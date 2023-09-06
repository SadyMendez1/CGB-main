// Importa el módulo 'Module' desde el paquete '@nestjs/common'.
import { Module } from '@nestjs/common';

// Importa el controlador 'ProductosController' desde el archivo './productos.controller'.
import { ProductosController } from './productos.controller';

// Importa el servicio 'ProductosService' desde el archivo './productos.service'.
import { ProductosService } from './productos.service';

// Declara un módulo de NestJS llamado 'ProductosModule'.
@Module({
  // Define los controladores que pertenecen a este módulo.
  controllers: [ProductosController],

  // Define los proveedores (clases que pueden inyectarse en otras partes de la aplicación) de este módulo.
  providers: [ProductosService],
})
// Exporta la clase 'ProductosModule'.
export class ProductosModule {}
