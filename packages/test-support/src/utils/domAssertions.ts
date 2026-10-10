// Copyright 2017-2026 @pezkuwi/test-supports authors & contributors
// SPDX-License-Identifier: Apache-2.0

// DOM checks with the meaning of the matching @testing-library/jest-dom
// matchers, which the node:test based runner does not provide

import assert from 'node:assert/strict';

function describeElement (node: Node): string {
  const html = (node as Partial<Element>).outerHTML ?? node.nodeName;

  return html.length > 200
    ? `${html.slice(0, 200)}...`
    : html;
}

/** As toHaveClass: the element carries the class */
export function assertHasClass (node: Node | null, className: string): void {
  assert.ok(node, `Expected an element with class "${className}", found none`);

  const classList = (node as Partial<Element>).classList;

  assert.ok(classList, `Expected an element with class "${className}", found ${describeElement(node)}`);
  assert.ok(classList.contains(className), `Expected class "${className}" on ${describeElement(node)}`);
}

/** As toHaveTextContent: the whitespace-normalized text contains the string, or matches the pattern */
export function assertTextContent (element: Node | null, expected: string | RegExp): void {
  assert.ok(element, `Expected an element with text ${String(expected)}, found none`);

  const text = (element.textContent ?? '').replace(/\s+/g, ' ').trim();

  if (typeof expected === 'string') {
    assert.ok(text.includes(expected), `Expected text containing "${expected}", found "${text}"`);
  } else {
    assert.match(text, expected);
  }
}

/** As toBeVisible: in the document, and neither it nor an ancestor is hidden */
export function assertVisible (element: Element | null): void {
  assert.ok(element, 'Expected a visible element, found none');
  assert.ok(element.isConnected, `Expected ${describeElement(element)} to be in the document`);

  for (let current: Element | null = element; current; current = current.parentElement) {
    const style = current.ownerDocument.defaultView?.getComputedStyle(current);
    const isHidden = current.hasAttribute('hidden') ||
      style?.display === 'none' ||
      style?.visibility === 'hidden' ||
      style?.visibility === 'collapse' ||
      style?.opacity === '0';

    assert.ok(!isHidden, `Expected ${describeElement(element)} to be visible, hidden by ${describeElement(current)}`);
  }
}
