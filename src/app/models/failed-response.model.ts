export class FailedResponseModel {

  constructor (public statusCode: number,
               public statusText: any,
               public args?: any) {

  }
}
