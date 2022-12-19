import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';


interface functionType {
  storeDispatch: (childStorePath: string, data?: any, parentPath?: string) => Promise<void>;
  storeGetters: (childStorePath: string, parentPath?: string) => any;
  routePushName: (nameText: string, data?: any, newTab?: boolean) => void;
  routePushPath: (pathText: string, data?: any, newTab?: boolean) => void;
  getRoute: (key: string) => any;
}
export default (defaultParentPath?: string): functionType => {
  /* Start store */
  const store = useStore();
  const pathStore = (childStorePath: string, parentPath?: string): string => {
    return `${parentPath ? parentPath : defaultParentPath}/${childStorePath}`;
  };
  const storeDispatch = (childStorePath: string, data?: any, parentPath?: string): Promise<void> => {
    return store.dispatch(pathStore(childStorePath, parentPath), data);
  };
  const storeGetters = (childStorePath: string, parentPath?: string): void | any => {
    return store.getters[pathStore(childStorePath, parentPath)];
  };
  /* End store */
  /* Start router */
  const router = useRouter();
  const routePushName = (nameText?: string, data?: any, newTab = false): void => {
    const config = {
      ...(nameText && { name: nameText }),
      ...data,
    };
    if (!newTab) router.push(config);
    else {
      const newRoute = router.resolve(config);
      window.open(newRoute.href);
    }
  };
  const routePushPath = (pathText?: string, data?: any, newTab = false): void => {
    const config = {
      ...(pathText && { path: pathText }),
      ...data,
    };
    if (!newTab) router.push(config);
    else {
      const newRoute = router.resolve(config);
      window.open(newRoute.href);
    }
  };
  // route;
  const route = useRoute();
  const getRoute = (key: string) => {
    const data: any = {
      ['query']: route.query,
      ['params']: route.params,
      ['path']: route.path,
      ['fullPath']: route.fullPath,
      ['name']: route.name,
    };
    return data[key];
  };
  /* End router */
  return { storeDispatch, storeGetters, getRoute, routePushName, routePushPath };
}