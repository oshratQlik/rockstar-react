import axios from 'axios'

const BAD_REQUEST_ERROR_CODE = 400;

export class DataService<T> {

  public actionUrl: string;

  constructor() {
    this.actionUrl = "http://localhost:4009";
  }

  get<TResult>(url: string, onSuccess: any) {
    axios.get<TResult>(url).then(res => {
          onSuccess(res);
        }).catch(err => {
          throw(err);
        });
  }

}
