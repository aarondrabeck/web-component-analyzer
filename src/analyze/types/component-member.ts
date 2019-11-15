import { SimpleType } from "ts-simple-type";
import { Node, Type } from "typescript";
import { JsDoc } from "./js-doc";

export type ComponentMemberKind = "property" | "attribute" | "method";

export interface ComponentMemberBase {
	kind: ComponentMemberKind;
	node: Node;
	type: Type | SimpleType;
	deprecated?: boolean | string;
	jsDoc?: JsDoc;
}

export interface ComponentMemberSetterBase extends ComponentMemberBase {
	default?: object | string | number | boolean | null;
	required?: boolean;
}

export interface ComponentMemberProperty extends ComponentMemberSetterBase {
	kind: "property";
	propName: string;
	attrName?: string;
	reflect?: boolean;
}

export interface ComponentMemberAttribute extends ComponentMemberSetterBase {
	kind: "attribute";
	attrName: string;
}

export interface ComponentMemberMethod extends ComponentMemberBase {
	kind: "method";
	name: string;
}

export type ComponentMember = ComponentMemberProperty | ComponentMemberAttribute | ComponentMemberMethod;
