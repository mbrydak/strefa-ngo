import { AppModule } from './app/app.module';
import { applyGlobalMiddleware, createServer, enableHMR, runServer } from './common/bootstrap';

const bootstrap = async () => {
  const server = await createServer(AppModule);

  applyGlobalMiddleware(server);

  await runServer(server);

  enableHMR(server);
};

bootstrap();
