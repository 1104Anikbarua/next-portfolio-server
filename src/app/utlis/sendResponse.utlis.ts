import { Response } from "express";

interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}
export const handleSendResponse = <T>(res: Response, data: IResponse<T>) => {
  res.status(data.statusCode).send({
    success: data.success,
    message: data.message,
    statusCode: data.statusCode,
    data: data.data,
  });
};
