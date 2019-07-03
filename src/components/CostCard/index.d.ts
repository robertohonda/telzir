import React from 'react'
import { StandardProps } from '@material-ui/core';

export interface CostCardProps extends StandardProps<{}, CostCardClassKey> {
  logoPath: string
  cost: string
}

export type CostCardClassKey =
  | 'title'

declare const CostCard: React.ComponentType<CostCardProps>

export default CostCard