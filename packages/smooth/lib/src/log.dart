// do not log in production to avoid slow down
//
// import 'package:clock/clock.dart';
// import 'package:flutter/foundation.dart';
//
// // TODO may not exist after prorotyping
// class SimpleLog {
//   static final instance = SimpleLog._();
//
//   SimpleLog._();
//
//   final _messages = <String>[];
//
//   void log(String value) {
//     final message = '[${clock.now()}] $value';
//     _messages.add(message);
//     if (kDebugMode) print(message);
//   }
//
//   void dumpAndReset() {
//     for (final log in _messages) {
//       print(log);
//     }
//   }
// }
