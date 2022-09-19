import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimersModule } from './timers/timers.module';

@Module({
  imports: [
    /*
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'fo_client/dist'), 
    }),
    */
    TimersModule//,
    ///PrismaModule, TimerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
