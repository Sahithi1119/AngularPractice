import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  private _productUrl="https://dummyjson.com/products/";

  private _addProduct="";

  private _addEmplyee="http://localhost:8080/";

  private _getEmployee="http://localhost:8080/";


  constructor(private _http:HttpClient) { };

  public getProduct():Observable<any>
  {
    return this._http.get(this._productUrl);
  }

  public getResult():Observable<any>
  {
    return this._http.get(this._addProduct ,{responseType:"text"});
  }

  public deleteProduct(pid):Promise<any>
  {
    //return this._http.delete(this._productUrl+pid).toPromise(); //toPromise method is deprecated so we can fix this by using firstValueFrom
    return firstValueFrom(this._http.delete(this._productUrl+pid))
  }

  public addproducts(data):Observable<any>
  {
    return this._http.post(this._addProduct,data);
  }

  public addEmp(emp):Observable<any>
  {
    return this._http.post(this._addEmplyee,emp,{responseType:"text"});
  }

  public getEmp():Observable<any>
  {
    return this._http.get(this._getEmployee,{responseType:"text"});
  }

}
