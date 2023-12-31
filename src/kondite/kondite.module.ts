import { Module } from '@nestjs/common';
import { KonditeController } from './kondite.controller';
import { KonditeService } from './kondite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KonditeEntity } from './entity/kondite.entity';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { User } from 'src/auth/user.entity';
import * as dotenv  from 'dotenv';

dotenv.config();

@Module({
    controllers:[
        KonditeController
    ],
    providers:[
        KonditeService
    ],
    imports:[
        TypeOrmModule.forFeature([KonditeEntity, User]),
        CacheModule.register({
            // @ts-ignore
            store: async () => await redisStore({
              socket: {
                host: process.env.REDIS_HOST,
                port: parseInt(process.env.REDIS_PORT),
              },
              ttl:parseInt(process.env.REDIS_TTL),
              
              
            },
            
            )
          }),
    ]
})
export class KonditeModule {}
