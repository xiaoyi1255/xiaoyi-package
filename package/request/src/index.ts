import axios from 'axios'
import type { AxiosResponse, AxiosError, CreateAxiosDefaults } from 'axios'
type RequestConfig = CreateAxiosDefaults & { message?: any } 

class _Axios {
  config: RequestConfig
  message: any
  constructor(config: RequestConfig) {
    this.config = Object.assign({}, config)
    if (config.message) {
      this.message = config.message
    }
    this.init(config)
  }

  init(config: RequestConfig) {
    const service = axios.create({...config})
    
    // 请求拦截
    service.interceptors.request.use(
      (config) => {
        // token 处理
        // const token = tokenService.token
        // if (token) config.headers.token = token

        // loading 处理
        // if (config.params?.showLoading) {
        //   this.message.loading({
        //     content: 'Loading...',
        //     duration: 0,
        //   })
        // }
        return config
      },
      (error) => {
        return Promise.reject(error.response)
      },
    )
    // 响应拦截
    service.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => {
        // if (response.headers['token']) {
        //   tokenService.setToken(response.headers['token'])
        // }
        // if (response.headers['refresh-token']) {
        //   tokenService.setRefreshToken(response.headers['refresh-token'])
        // }

        // if (config.params?.showLoading) {
        //   this.message.clear()
        // }
        if (response.status === 200) {
          return response
        } else {
    
          throw new Error(response.status.toString())
        }
      },
      async (responseErr: AxiosError) => {
        const status = responseErr.response?.status
        // const msg = responseErr.response?.data?.msg || ''
        switch (status) {
          case 401: // "Unauthorized"
            // 做换取token操作
            // const originRequestConf = responseErr.config
            // if (tokenService.refreshToken) { // 存在refreshToken 
            //   const isSuceess = await refreshToken()
            //   console.log('刷新Token成功: ', isSuceess)
            //   if (isSuceess && originRequestConf) {
            //     originRequestConf.headers['refreshtoken'] = tokenService.refreshToken
            //     // 重新发一次原来的请求
            //     return service(originRequestConf)
            //   }
            // }
            // if (this.message) {
            //   this.message.error(msg)
            // }
            // location.href = location.origin + '/login'
            return Promise.reject(responseErr)
        
          default:
            return Promise.reject(responseErr)
        }
      },
    )
  }
}

export {
  _Axios
} 
