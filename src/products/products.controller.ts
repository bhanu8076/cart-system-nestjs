import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post() async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get() async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id') async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Put(':id') async update(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, createProductDto);
  }

  @Delete(':id') async delete(@Param('id') id: string): Promise<Product> {
    return this.productsService.delete(id);
  }
}
