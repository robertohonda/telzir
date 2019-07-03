import React from 'react'
import { StandardProps } from '@material-ui/core';
import { AppBarProps } from '@material-ui/core/AppBar';

export interface CustomAppBarProps extends StandardProps<AppBarProps, AppBarClassKey> {
  logoPath: string
  title: string
}

export type AppBarClassKey =
  | 'toolbar'
  | 'title'
  | 'logo'

declare const CustomAppBar: React.ComponentType<CustomAppBarProps>

export default CustomAppBar