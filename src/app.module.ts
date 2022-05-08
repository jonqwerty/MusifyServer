import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Serhii:music48@cluster0.bnzqv.mongodb.net/music-platform?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppModule {}
