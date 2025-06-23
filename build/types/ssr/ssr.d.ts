import express from 'express';
import { type DispatchFunction } from '@react5/reducer';
export type LoadDataFunction = (dispatch: DispatchFunction, cookies: {}, urlSearch: string | null, params: any) => Promise<void>;
export type RouteObjectSsr = {
    loadData?: LoadDataFunction;
    component: any;
    isNotFound?: boolean;
};
export declare const ssr: (htmlTemplatePath: string, reducers: any, routes: any, createServices?: (cookies: any) => any, verbose?: boolean) => (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export default ssr;
//# sourceMappingURL=ssr.d.ts.map