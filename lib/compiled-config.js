
const cache = {};

/**
 * A resolver that caches rules and configuration as part of the bundle,
 * making them accessible in the browser.
 *
 * @param {Object} cache
 */
function Resolver() {}

Resolver.prototype.resolveRule = function(pkg, ruleName) {

  const rule = cache[pkg + '/' + ruleName];

  if (!rule) {
    throw new Error('cannot resolve rule <' + pkg + '/' + ruleName + '>: not bundled');
  }

  return rule;
};

Resolver.prototype.resolveConfig = function(pkg, configName) {
  throw new Error(
    'cannot resolve config <' + configName + '> in <' + pkg +'>: not bundled'
  );
};

const resolver = new Resolver();

const rules = {
  "camunda-compat/ad-hoc-sub-process": "error",
  "camunda-compat/element-type": "error",
  "camunda-compat/called-element": "error",
  "camunda-compat/collapsed-subprocess": "error",
  "camunda-compat/connector-properties": "warn",
  "camunda-compat/duplicate-execution-listeners": "error",
  "camunda-compat/duplicate-task-headers": "error",
  "camunda-compat/error-reference": "error",
  "camunda-compat/escalation-boundary-event-attached-to-ref": "error",
  "camunda-compat/escalation-reference": "error",
  "camunda-compat/event-based-gateway-target": "error",
  "camunda-compat/executable-process": "error",
  "camunda-compat/execution-listener": "error",
  "camunda-compat/feel": "error",
  "camunda-compat/history-time-to-live": "info",
  "camunda-compat/implementation": "error",
  "camunda-compat/inclusive-gateway": "error",
  "camunda-compat/link-event": "error",
  "camunda-compat/loop-characteristics": "error",
  "camunda-compat/io-mapping": "error",
  "camunda-compat/message-reference": "error",
  "camunda-compat/no-binding-type": "error",
  "camunda-compat/no-candidate-users": "error",
  "camunda-compat/no-execution-listeners": "error",
  "camunda-compat/no-expression": "error",
  "camunda-compat/no-loop": "error",
  "camunda-compat/no-multiple-none-start-events": "error",
  "camunda-compat/no-priority-definition": "error",
  "camunda-compat/no-propagate-all-parent-variables": "error",
  "camunda-compat/no-signal-event-sub-process": "error",
  "camunda-compat/no-task-schedule": "error",
  "camunda-compat/no-task-listeners": "error",
  "camunda-compat/no-template": "error",
  "camunda-compat/no-version-tag": "error",
  "camunda-compat/no-zeebe-properties": "error",
  "camunda-compat/no-zeebe-user-task": "error",
  "camunda-compat/priority-definition": "error",
  "camunda-compat/zeebe-user-task": "warn",
  "camunda-compat/secrets": "warn",
  "camunda-compat/sequence-flow-condition": "error",
  "camunda-compat/signal-reference": "error",
  "camunda-compat/start-event-form": "error",
  "camunda-compat/subscription": "error",
  "camunda-compat/task-listener": "error",
  "camunda-compat/task-schedule": "error",
  "camunda-compat/timer": "error",
  "camunda-compat/user-task-definition": "warn",
  "camunda-compat/user-task-form": "error",
  "camunda-compat/version-tag": "error",
  "camunda-compat/wait-for-completion": "error",
  "start-event-required": "error",
  "ad-hoc-sub-process": "error",
  "event-sub-process-typed-start-event": "error",
  "link-event": "error",
  "no-duplicate-sequence-flows": "warn",
  "sub-process-blank-start-event": "error",
  "single-blank-start-event": "error"
};

const config = {
  rules: rules
};

const bundle = {
  resolver: resolver,
  config: config
};

export { resolver, config };

export default bundle;

import rule_0 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/ad-hoc-sub-process';

cache['bpmnlint-plugin-camunda-compat/ad-hoc-sub-process'] = rule_0;

import rule_1 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/element-type';

cache['bpmnlint-plugin-camunda-compat/element-type'] = rule_1;

import rule_2 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/called-element';

cache['bpmnlint-plugin-camunda-compat/called-element'] = rule_2;

import rule_3 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/collapsed-subprocess';

cache['bpmnlint-plugin-camunda-compat/collapsed-subprocess'] = rule_3;

import rule_4 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/connector-properties';

cache['bpmnlint-plugin-camunda-compat/connector-properties'] = rule_4;

import rule_5 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/duplicate-execution-listeners';

cache['bpmnlint-plugin-camunda-compat/duplicate-execution-listeners'] = rule_5;

import rule_6 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/duplicate-task-headers';

cache['bpmnlint-plugin-camunda-compat/duplicate-task-headers'] = rule_6;

import rule_7 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/error-reference';

cache['bpmnlint-plugin-camunda-compat/error-reference'] = rule_7;

import rule_8 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/escalation-boundary-event-attached-to-ref';

cache['bpmnlint-plugin-camunda-compat/escalation-boundary-event-attached-to-ref'] = rule_8;

import rule_9 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/escalation-reference';

cache['bpmnlint-plugin-camunda-compat/escalation-reference'] = rule_9;

import rule_10 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/event-based-gateway-target';

cache['bpmnlint-plugin-camunda-compat/event-based-gateway-target'] = rule_10;

import rule_11 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/executable-process';

cache['bpmnlint-plugin-camunda-compat/executable-process'] = rule_11;

import rule_12 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/execution-listener';

cache['bpmnlint-plugin-camunda-compat/execution-listener'] = rule_12;

import rule_13 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/feel';

cache['bpmnlint-plugin-camunda-compat/feel'] = rule_13;

import rule_14 from 'bpmnlint-plugin-camunda-compat/rules/camunda-platform/history-time-to-live';

cache['bpmnlint-plugin-camunda-compat/history-time-to-live'] = rule_14;

import rule_15 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/implementation';

cache['bpmnlint-plugin-camunda-compat/implementation'] = rule_15;

import rule_16 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/inclusive-gateway';

cache['bpmnlint-plugin-camunda-compat/inclusive-gateway'] = rule_16;

import rule_17 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/link-event';

cache['bpmnlint-plugin-camunda-compat/link-event'] = rule_17;

import rule_18 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/loop-characteristics';

cache['bpmnlint-plugin-camunda-compat/loop-characteristics'] = rule_18;

import rule_19 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/io-mapping';

cache['bpmnlint-plugin-camunda-compat/io-mapping'] = rule_19;

import rule_20 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/message-reference';

cache['bpmnlint-plugin-camunda-compat/message-reference'] = rule_20;

import rule_21 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-binding-type';

cache['bpmnlint-plugin-camunda-compat/no-binding-type'] = rule_21;

import rule_22 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-candidate-users';

cache['bpmnlint-plugin-camunda-compat/no-candidate-users'] = rule_22;

import rule_23 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-execution-listeners';

cache['bpmnlint-plugin-camunda-compat/no-execution-listeners'] = rule_23;

import rule_24 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-expression';

cache['bpmnlint-plugin-camunda-compat/no-expression'] = rule_24;

import rule_25 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-loop';

cache['bpmnlint-plugin-camunda-compat/no-loop'] = rule_25;

import rule_26 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-multiple-none-start-events';

cache['bpmnlint-plugin-camunda-compat/no-multiple-none-start-events'] = rule_26;

import rule_27 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-priority-definition';

cache['bpmnlint-plugin-camunda-compat/no-priority-definition'] = rule_27;

import rule_28 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-propagate-all-parent-variables';

cache['bpmnlint-plugin-camunda-compat/no-propagate-all-parent-variables'] = rule_28;

import rule_29 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-signal-event-sub-process';

cache['bpmnlint-plugin-camunda-compat/no-signal-event-sub-process'] = rule_29;

import rule_30 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-task-schedule';

cache['bpmnlint-plugin-camunda-compat/no-task-schedule'] = rule_30;

import rule_31 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-task-listeners';

cache['bpmnlint-plugin-camunda-compat/no-task-listeners'] = rule_31;

import rule_32 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-template';

cache['bpmnlint-plugin-camunda-compat/no-template'] = rule_32;

import rule_33 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-version-tag';

cache['bpmnlint-plugin-camunda-compat/no-version-tag'] = rule_33;

import rule_34 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-zeebe-properties';

cache['bpmnlint-plugin-camunda-compat/no-zeebe-properties'] = rule_34;

import rule_35 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/no-zeebe-user-task';

cache['bpmnlint-plugin-camunda-compat/no-zeebe-user-task'] = rule_35;

import rule_36 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/priority-definition';

cache['bpmnlint-plugin-camunda-compat/priority-definition'] = rule_36;

import rule_37 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/zeebe-user-task';

cache['bpmnlint-plugin-camunda-compat/zeebe-user-task'] = rule_37;

import rule_38 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/secrets';

cache['bpmnlint-plugin-camunda-compat/secrets'] = rule_38;

import rule_39 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/sequence-flow-condition';

cache['bpmnlint-plugin-camunda-compat/sequence-flow-condition'] = rule_39;

import rule_40 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/signal-reference';

cache['bpmnlint-plugin-camunda-compat/signal-reference'] = rule_40;

import rule_41 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/start-event-form';

cache['bpmnlint-plugin-camunda-compat/start-event-form'] = rule_41;

import rule_42 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/subscription';

cache['bpmnlint-plugin-camunda-compat/subscription'] = rule_42;

import rule_43 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/task-listener';

cache['bpmnlint-plugin-camunda-compat/task-listener'] = rule_43;

import rule_44 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/task-schedule';

cache['bpmnlint-plugin-camunda-compat/task-schedule'] = rule_44;

import rule_45 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/timer';

cache['bpmnlint-plugin-camunda-compat/timer'] = rule_45;

import rule_46 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/user-task-definition';

cache['bpmnlint-plugin-camunda-compat/user-task-definition'] = rule_46;

import rule_47 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/user-task-form';

cache['bpmnlint-plugin-camunda-compat/user-task-form'] = rule_47;

import rule_48 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/version-tag';

cache['bpmnlint-plugin-camunda-compat/version-tag'] = rule_48;

import rule_49 from 'bpmnlint-plugin-camunda-compat/rules/camunda-cloud/wait-for-completion';

cache['bpmnlint-plugin-camunda-compat/wait-for-completion'] = rule_49;

import rule_50 from 'bpmnlint/rules/start-event-required';

cache['bpmnlint/start-event-required'] = rule_50;

import rule_51 from 'bpmnlint/rules/ad-hoc-sub-process';

cache['bpmnlint/ad-hoc-sub-process'] = rule_51;

import rule_52 from 'bpmnlint/rules/event-sub-process-typed-start-event';

cache['bpmnlint/event-sub-process-typed-start-event'] = rule_52;

import rule_53 from 'bpmnlint/rules/link-event';

cache['bpmnlint/link-event'] = rule_53;

import rule_54 from 'bpmnlint/rules/no-duplicate-sequence-flows';

cache['bpmnlint/no-duplicate-sequence-flows'] = rule_54;

import rule_55 from 'bpmnlint/rules/sub-process-blank-start-event';

cache['bpmnlint/sub-process-blank-start-event'] = rule_55;

import rule_56 from 'bpmnlint/rules/single-blank-start-event';

cache['bpmnlint/single-blank-start-event'] = rule_56;