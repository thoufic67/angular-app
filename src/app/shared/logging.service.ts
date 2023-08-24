export class LoggingService {
  logToConsole(status: string) {
    console.log(
      'From ServiceWorker: A server status changed, new status: ' + status
    );
  }
}
