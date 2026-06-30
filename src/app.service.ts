import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! sending files to main barch form test brach to main';
  }
  getHelloNew(): string {
    return 'Hello World! sending files to main barch form test brach to main';
  }

  featureBracnhToRelease() {
    console.log("featureBracnhToRelease");
    console.log("pulledFromFeature->Release-33.0.0->now sending to main");
  }
}
