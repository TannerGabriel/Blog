import { SubscribeMessage, WebSocketGateway, OnGatewayInit } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {

  private logger: Logger = new Logger('AppGateway');

  afterInit(server: any) {
    this.logger.log('Init');
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
