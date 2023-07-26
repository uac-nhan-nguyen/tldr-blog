# Backend Dart

## Simple server with route + static + auth + homePage

```dart
import 'dart:io';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_plus/shelf_plus.dart';

void main() async {
  final app = Router().plus;
  app.use(logRequests());
  app.get('/', homePageHandler);

  final authApp = Router().plus;
  authApp.use(logRequests());
  authApp.use(apiAuthorizer());
  authApp.post('/user', addUserHandler);

  final staticHandler = createStaticHandler('public');

  final handler = Cascade().add(app).add(authApp).add(staticHandler).handler;

  final server = await shelf_io.serve(handler, InternetAddress.anyIPv4, int.parse(Platform.environment['PORT'] ?? "8080"));

  // Enable content compression
  server.autoCompress = true;

  final url = 'http://${server.address.host}:${server.port}';
  print('Serving at ${url}');
}

Middleware apiAuthorizer() {
  return (innerHandler) {
    return (request) {
      if (request.headers['api-key'] != API_KEY) {
        return Response(401);
      }
      return innerHandler(request);
    };
  };
}

Future<Response> home(Request request) async {
  const html = '''
<!DOCTYPE HTML>
<html lang="en">
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-800 text-white">
<h1 class="text-bold text-3xl ml-[12px] mt-[12px]">This is home page</h1>
</body>
</html>
  ''';
  return Response(200, body: html, headers: {'content-type': 'text/html'});
}

```
