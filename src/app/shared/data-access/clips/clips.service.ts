import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ClipDataDto } from '../../dto/clip-data.dto';
import { ClipDto } from '../../dto/clip.dto';
import { UsersService } from '../users/users.service';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {

  constructor(private http: HttpClient, private userService: UsersService) { }

  getClipsByGamesId$(id: number): Observable<ClipDto[]> {
    return this.http.get<ClipDataDto>(`/clips?game_id=${id}`).pipe(
      map(response => response.data),
      mergeMap(clips => {
        const userIds = clips.map(clip => Number(clip.broadcaster_id));
        return this.userService.getUsersById$(userIds).pipe(
          map(users => {
            return clips.map((stream, index) => ({
              ...stream,
              avatar: (users[index])?users[index].profile_image_url:""
            }))
          })
        )
      })
    )
  }
}