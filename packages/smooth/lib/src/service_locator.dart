import 'package:flutter/material.dart';
import 'package:smooth/src/actor.dart';
import 'package:smooth/src/auxiliary_tree_pack.dart';
import 'package:smooth/src/preempt_strategy.dart';

class ServiceLocator {
  static ServiceLocator get instance => _instance!;
  static ServiceLocator? _instance;

  factory ServiceLocator.normal() => ServiceLocator.raw(
        actor: Actor(),
        preemptStrategy: PreemptStrategy.normal(),
        auxiliaryTreeRegistry: AuxiliaryTreeRegistry(),
      );

  ServiceLocator.raw({
    required this.actor,
    required this.preemptStrategy,
    required this.auxiliaryTreeRegistry,
  });

  ServiceLocator copyWith({
    Actor? actor,
    PreemptStrategy? preemptStrategy,
    AuxiliaryTreeRegistry? auxiliaryTreeRegistry,
  }) =>
      ServiceLocator.raw(
        actor: actor ?? this.actor,
        preemptStrategy: preemptStrategy ?? this.preemptStrategy,
        auxiliaryTreeRegistry:
            auxiliaryTreeRegistry ?? this.auxiliaryTreeRegistry,
      );

  final Actor actor;
  final PreemptStrategy preemptStrategy;
  final AuxiliaryTreeRegistry auxiliaryTreeRegistry;
}

class SmoothScope extends StatefulWidget {
  final ServiceLocator? serviceLocator;
  final Widget child;

  const SmoothScope({super.key, this.serviceLocator, required this.child});

  @override
  State<SmoothScope> createState() => _SmoothScopeState();
}

class _SmoothScopeState extends State<SmoothScope> {
  late final serviceLocator = widget.serviceLocator ?? ServiceLocator.normal();

  @override
  void initState() {
    super.initState();
    assert(ServiceLocator._instance == null);
    ServiceLocator._instance = serviceLocator;
  }

  @override
  void didUpdateWidget(covariant SmoothScope oldWidget) {
    super.didUpdateWidget(oldWidget);
    assert(widget.serviceLocator == oldWidget.serviceLocator);
  }

  @override
  void dispose() {
    assert(ServiceLocator._instance == serviceLocator);
    ServiceLocator._instance = null;
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
