import { Module, DynamicModule } from '@nestjs/common';
import { Redisk } from 'herow-redisk';
import * as Redis from "ioredis";


@Module({
    providers: [
        Redisk,
    ],
    exports: [
        Redisk,
    ],
})
export class RediskModule {
    static forRoot(options: Redis.RedisOptions): DynamicModule {
        return {
          module: RediskModule,
          global: true,
          providers: [
            {
              provide: Redisk,
              useValue: Redisk.init(options),
            },
          ],
          exports: [
              Redisk,
          ]
        };
      }
}
