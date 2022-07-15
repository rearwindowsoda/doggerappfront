import {AxiosStatic} from "axios";

export interface AxiosLoginDataResponse extends AxiosStatic{
    data: { message: string }
}
export interface AxiosLoginDataError extends  AxiosStatic{
    response: {data: {message: string}};
}