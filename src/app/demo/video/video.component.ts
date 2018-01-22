import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ROOT_VIDEO_URL} from '../../config';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewInit {


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // ckplayer播放视频
    this.ckplayer();

    // videojs
    // this.videojs();
  }

  /**
   *
   * @param url 视频路径
   * @param div 播放器容器的id值
   * ROOT_VIDEO_URL 外部引入的根目录,部署时改为服务器地址
   *
   */
  playM3u8(url, div) {
    const flashvars = {
      f: ROOT_VIDEO_URL + 'assets/ckplayer/m3u8/m3u8.swf',
      a: url,
      s: 4, // SWF视频流形式，此时f='一个swf文件
      c: 0
    };
    const params = {bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent'};
    const video = [url];
    const w = Math.floor(844);
    const h = Math.floor(w * 3 / 5);
    CKobject.embed(ROOT_VIDEO_URL + 'assets/ckplayer/ckplayer.swf', div, 'ckplayer_a1', w, h, false, flashvars, video, params);
  }


  playMp4(url, div) {
    const flashvars = {
      f: 'http://pic.ibaotu.com/00/25/86/008888piCNE6.mp4',
      a: '',
      s: 0, // 普通形式调用视频，f=视频地址,支持http协议和rtmp协议视频，支持多个视频地址组合成一个完整的视频进行播放，中间用|隔开'
      c: 0
    };
    const params = {bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent'};
    const video = [url];
    const w = Math.floor(844);
    const h = Math.floor(w * 3 / 5);
    CKobject.embed(ROOT_VIDEO_URL + 'assets/ckplayer/ckplayer.swf', div, 'ckplayer_a1', w, h, false, flashvars, video, params);
  }

  playRtmp(url, div) {
    const flashvars = {
      f: 'http://pic.ibaotu.com/00/25/86/008888piCNE6.mp4',
      a: '',
      s: 0, // 普通形式调用视频，f=视频地址,支持http协议和rtmp协议视频，支持多个视频地址组合成一个完整的视频进行播放，中间用|隔开'
      c: 0,
    };
    const params = {bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent'};
    const video = [url];
    const w = Math.floor(844);
    const h = Math.floor(w * 3 / 5);
    CKobject.embed(ROOT_VIDEO_URL + 'assets/ckplayer/ckplayer.swf', div, 'ckplayer_a1', w, h, false, flashvars, video, params);
  }

  private videoM3u8() {
    const player = videojs('example-video', {'poster': '', 'controls': 'true'}, function () {
      // this.play();
      this.on('play', function () {
        console.log('正在播放');
      });
      // 暂停--播放完毕后也会暂停
      this.on('pause', function () {
        console.log('暂停中');
      });
      // 结束
      this.on('ended', function () {
        console.log('结束');
      });
    });
  }

  private videAudio() {
    const audio = videojs('audio1',
      {
        'poster': 'http://192.168.1.111:8081/hscloud/img?path=venues/201709/9c97d86a-886b-44a6-abe8-6d9129b06cb2.jpg',
        'controls': 'true'
      },
      function () {
        this.on('play', function () {
          console.log('正在播放');
        });
        //  暂停--播放完毕后也会暂停
        this.on('pause', function () {
          console.log('暂停中');
        });
        // 结束
        this.on('ended', function () {
          console.log('结束');
        });
      });
  }

  private ckplayer() {
    const m3u8 = 'http://119.60.8.230:10088/EasyTrans/Data/cc153d43-17d5-4de7-8ec3-318ed65724f6/video.m3u8';
    this.playM3u8(m3u8, 'a1');


    const mp4 = 'http://pic.ibaotu.com/00/25/86/008888piCNE6.mp4';
    this.playMp4(mp4, 'a2');


    const rtmp = 'rtmp://124.133.52.148:8077|part2/20130606/0/0_iglum33o_0_s0rm18qo_1.mp4';
    this.playRtmp(rtmp, 'a3');
  }

  private videojs() {
    this.videoM3u8();
    this.videAudio();
  }
}
