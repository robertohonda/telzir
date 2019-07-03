import React from "react"
import { StandardProps } from "@material-ui/core"
import { TextFieldProps } from "@material-ui/core/TextField"
import { MenuItemProps } from "@material-ui/core/MenuItem"

export interface SelectTextFieldProps extends TextFieldProps {
  MenuItemProps: MenuItemProps
  options: Array<{ label: string; value: string }>
  cost: string
}

declare const CostCard: React.ComponentType<SelectTextFieldProps>

export default CostCard
