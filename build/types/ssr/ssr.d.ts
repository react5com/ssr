import express from 'express';
import { type DispatchFunction } from 'react-reducer-ssr';
export type LoadDataFunction = (dispatch: DispatchFunction, cookies: {}, urlSearch: string | null) => Promise<void>;
export type RouteObjectSsr = {
    loadData?: LoadDataFunction;
    component: any;
    isNotFound?: boolean;
};
export declare const ssr: (htmlTemplatePath: string, reducers: any, routes: any, createServices: (cookies: any) => any) => (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export default ssr;
//# sourceMappingURL=ssr.d.ts.map