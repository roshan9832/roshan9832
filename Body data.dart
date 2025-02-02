import 'package:flutter/material.dart';
import 'package:flutter_3d_view/flutter_3d_view.dart';

class BodyModelPage extends StatelessWidget {
  final Map<String, double> bodyMeasurements;

  BodyModelPage({required this.bodyMeasurements});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('3D Body Model')),
      body: Center(
        child: Flutter3DView(
          modelPath: 'assets/body_model.obj',
          scale: bodyMeasurements,
        ),
      ),
    );
  }
}
