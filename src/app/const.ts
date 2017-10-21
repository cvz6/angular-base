import { NzModalService } from 'ng-zorro-antd';
export class Const {
  constructor(private confirmServ: NzModalService) {}
  /*数字转换活动状态*/
  public static toChangeStatus(status) {
    switch (status) {
      case '未开始':
        return status = '0';
      case '进行中':
        return status = '1';
      case '已结束':
        return status = '2';
      default:
        return status = '';
    }
  }
  public info() {
    this.confirmServ.info({
      title: '请先登录',
    });
  }


}
