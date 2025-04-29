import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

export interface BaseResponse<T = unknown> {
  code: number
  data: T
  message: string
}

const baseURL = 'https://m1.apifoxmock.com/m1/6140976-5832822-default/'

class Request {
  private static instance: Request
  private axiosIntance: AxiosInstance

  private constructor() {
    this.axiosIntance = axios.create({
      baseURL,
      timeout: 100000,
    })

    this.axiosIntance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        Promise.reject(error)
      },
    )
  }

  static getInstance() {
    if (!Request.instance) {
      Request.instance = new Request()
    }
    return Request.instance
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    return this.axiosIntance.get(url, config)
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    return this.axiosIntance.post(url, data, config)
  }
}

export default Request
