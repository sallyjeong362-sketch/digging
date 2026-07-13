import type { ExplorationNode } from '../types';

export function getTrail(nodes: Record<string, ExplorationNode>, nodeId: string): ExplorationNode[] {
  const trail: ExplorationNode[] = [];
  let current: ExplorationNode | undefined = nodes[nodeId];
  while (current) {
    trail.unshift(current);
    current = current.parentId ? nodes[current.parentId] : undefined;
  }
  return trail;
}
