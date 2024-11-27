import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public i:number=0;

 public data: any;
  data1: any;
  result: any;
  constructor(private _productService:ProductsService){};

  ngOnInit()
  {
    //debugger
    this.getProducts();
    this.getResult();
  }


  private getProducts() {
    this._productService.getProduct().subscribe(
      (result) => {
        console.log(result);
        this.data = result.products;
      }
    );
  }

  private getResult()
  {
    this._productService.getResult().subscribe(
      (res) =>
      {
        console.log(res);
        this.data1=res;
      }
    )
  }

  public deleteProducts()
  {
    this.i=this.i+1;
    console.log(this.i);
    this._productService.deleteProduct(this.i).then(
      (res) =>{
        console.log(res);
        this.result=res;
      }
    );
  }
}
