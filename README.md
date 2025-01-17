Redisk for Nestjs
=====
[![npm version](https://badge.fury.io/js/redisk-nestjs.svg)](https://badge.fury.io/js/redisk-nestjs)

Module for using [Redisk](https://github.com/ArkerLabs/redisk) in NestJS.


## Getting started
```bash
npm install redisk-nestjs redisk --save
```


### Usage

```ts
import { Module } from '@nestjs/common';
import { RediskModule } from 'redisk-nestjs';

@Module({
  imports: [
    RediskModule.forRoot({
      host: '127.0.0.1',
      port:6379, 
      db:0
    }),
  ],
})
export class AppModule {}
```


### Example

```ts
import { Controller, Get } from '@nestjs/common';
import { Redisk } from 'redisk';

@Controller('cats')
export class CatsController {
  constructor(private readonly redisk: Redisk) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.redisk.list<Cat>(Cat);
  }
}
```
