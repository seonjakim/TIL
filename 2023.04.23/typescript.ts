// https://www.youtube.com/watch?v=V5OnAN63vls&t=1204s&ab_channel=SitePen
type RouteParamName<T extends string> =
  string extends T ? string:
  T extends `${string}:${infer P}/${infer R}` ? P | RouteParamName<R> :
  T extends `${string}:${infer P}` ? P:
  never;

  declare function handlerGet<R extends string>(route: R, handler: (params: Record<RouteParamName<R>, string>) => void): void;

  handlerGet('/posts/:postId/:commentId', params => {
    //params.
  })