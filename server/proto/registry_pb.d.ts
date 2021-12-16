// package: api
// file: registry.proto

import * as jspb from "google-protobuf";

export class Channel extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCsvname(): string;
  setCsvname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Channel.AsObject;
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Channel;
  static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
  export type AsObject = {
    name: string,
    csvname: string,
  }
}

export class PackageName extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageName.AsObject;
  static toObject(includeInstance: boolean, msg: PackageName): PackageName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackageName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageName;
  static deserializeBinaryFromReader(message: PackageName, reader: jspb.BinaryReader): PackageName;
}

export namespace PackageName {
  export type AsObject = {
    name: string,
  }
}

export class Package extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearChannelsList(): void;
  getChannelsList(): Array<Channel>;
  setChannelsList(value: Array<Channel>): void;
  addChannels(value?: Channel, index?: number): Channel;

  getDefaultchannelname(): string;
  setDefaultchannelname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Package.AsObject;
  static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Package;
  static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
  export type AsObject = {
    name: string,
    channelsList: Array<Channel.AsObject>,
    defaultchannelname: string,
  }
}

export class GroupVersionKind extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getKind(): string;
  setKind(value: string): void;

  getPlural(): string;
  setPlural(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupVersionKind.AsObject;
  static toObject(includeInstance: boolean, msg: GroupVersionKind): GroupVersionKind.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupVersionKind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupVersionKind;
  static deserializeBinaryFromReader(message: GroupVersionKind, reader: jspb.BinaryReader): GroupVersionKind;
}

export namespace GroupVersionKind {
  export type AsObject = {
    group: string,
    version: string,
    kind: string,
    plural: string,
  }
}

export class Dependency extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dependency.AsObject;
  static toObject(includeInstance: boolean, msg: Dependency): Dependency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dependency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dependency;
  static deserializeBinaryFromReader(message: Dependency, reader: jspb.BinaryReader): Dependency;
}

export namespace Dependency {
  export type AsObject = {
    type: string,
    value: string,
  }
}

export class Property extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    type: string,
    value: string,
  }
}

export class Bundle extends jspb.Message {
  getCsvname(): string;
  setCsvname(value: string): void;

  getPackagename(): string;
  setPackagename(value: string): void;

  getChannelname(): string;
  setChannelname(value: string): void;

  getCsvjson(): string;
  setCsvjson(value: string): void;

  clearObjectList(): void;
  getObjectList(): Array<string>;
  setObjectList(value: Array<string>): void;
  addObject(value: string, index?: number): string;

  getBundlepath(): string;
  setBundlepath(value: string): void;

  clearProvidedapisList(): void;
  getProvidedapisList(): Array<GroupVersionKind>;
  setProvidedapisList(value: Array<GroupVersionKind>): void;
  addProvidedapis(value?: GroupVersionKind, index?: number): GroupVersionKind;

  clearRequiredapisList(): void;
  getRequiredapisList(): Array<GroupVersionKind>;
  setRequiredapisList(value: Array<GroupVersionKind>): void;
  addRequiredapis(value?: GroupVersionKind, index?: number): GroupVersionKind;

  getVersion(): string;
  setVersion(value: string): void;

  getSkiprange(): string;
  setSkiprange(value: string): void;

  clearDependenciesList(): void;
  getDependenciesList(): Array<Dependency>;
  setDependenciesList(value: Array<Dependency>): void;
  addDependencies(value?: Dependency, index?: number): Dependency;

  clearPropertiesList(): void;
  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): void;
  addProperties(value?: Property, index?: number): Property;

  getReplaces(): string;
  setReplaces(value: string): void;

  clearSkipsList(): void;
  getSkipsList(): Array<string>;
  setSkipsList(value: Array<string>): void;
  addSkips(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bundle.AsObject;
  static toObject(includeInstance: boolean, msg: Bundle): Bundle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bundle;
  static deserializeBinaryFromReader(message: Bundle, reader: jspb.BinaryReader): Bundle;
}

export namespace Bundle {
  export type AsObject = {
    csvname: string,
    packagename: string,
    channelname: string,
    csvjson: string,
    objectList: Array<string>,
    bundlepath: string,
    providedapisList: Array<GroupVersionKind.AsObject>,
    requiredapisList: Array<GroupVersionKind.AsObject>,
    version: string,
    skiprange: string,
    dependenciesList: Array<Dependency.AsObject>,
    propertiesList: Array<Property.AsObject>,
    replaces: string,
    skipsList: Array<string>,
  }
}

export class ChannelEntry extends jspb.Message {
  getPackagename(): string;
  setPackagename(value: string): void;

  getChannelname(): string;
  setChannelname(value: string): void;

  getBundlename(): string;
  setBundlename(value: string): void;

  getReplaces(): string;
  setReplaces(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelEntry): ChannelEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelEntry;
  static deserializeBinaryFromReader(message: ChannelEntry, reader: jspb.BinaryReader): ChannelEntry;
}

export namespace ChannelEntry {
  export type AsObject = {
    packagename: string,
    channelname: string,
    bundlename: string,
    replaces: string,
  }
}

export class ListPackageRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPackageRequest): ListPackageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPackageRequest;
  static deserializeBinaryFromReader(message: ListPackageRequest, reader: jspb.BinaryReader): ListPackageRequest;
}

export namespace ListPackageRequest {
  export type AsObject = {
  }
}

export class ListBundlesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBundlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBundlesRequest): ListBundlesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBundlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBundlesRequest;
  static deserializeBinaryFromReader(message: ListBundlesRequest, reader: jspb.BinaryReader): ListBundlesRequest;
}

export namespace ListBundlesRequest {
  export type AsObject = {
  }
}

export class GetPackageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackageRequest): GetPackageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackageRequest;
  static deserializeBinaryFromReader(message: GetPackageRequest, reader: jspb.BinaryReader): GetPackageRequest;
}

export namespace GetPackageRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetBundleRequest extends jspb.Message {
  getPkgname(): string;
  setPkgname(value: string): void;

  getChannelname(): string;
  setChannelname(value: string): void;

  getCsvname(): string;
  setCsvname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBundleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBundleRequest): GetBundleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBundleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBundleRequest;
  static deserializeBinaryFromReader(message: GetBundleRequest, reader: jspb.BinaryReader): GetBundleRequest;
}

export namespace GetBundleRequest {
  export type AsObject = {
    pkgname: string,
    channelname: string,
    csvname: string,
  }
}

export class GetBundleInChannelRequest extends jspb.Message {
  getPkgname(): string;
  setPkgname(value: string): void;

  getChannelname(): string;
  setChannelname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBundleInChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBundleInChannelRequest): GetBundleInChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBundleInChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBundleInChannelRequest;
  static deserializeBinaryFromReader(message: GetBundleInChannelRequest, reader: jspb.BinaryReader): GetBundleInChannelRequest;
}

export namespace GetBundleInChannelRequest {
  export type AsObject = {
    pkgname: string,
    channelname: string,
  }
}

export class GetAllReplacementsRequest extends jspb.Message {
  getCsvname(): string;
  setCsvname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllReplacementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllReplacementsRequest): GetAllReplacementsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllReplacementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllReplacementsRequest;
  static deserializeBinaryFromReader(message: GetAllReplacementsRequest, reader: jspb.BinaryReader): GetAllReplacementsRequest;
}

export namespace GetAllReplacementsRequest {
  export type AsObject = {
    csvname: string,
  }
}

export class GetReplacementRequest extends jspb.Message {
  getCsvname(): string;
  setCsvname(value: string): void;

  getPkgname(): string;
  setPkgname(value: string): void;

  getChannelname(): string;
  setChannelname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReplacementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReplacementRequest): GetReplacementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReplacementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReplacementRequest;
  static deserializeBinaryFromReader(message: GetReplacementRequest, reader: jspb.BinaryReader): GetReplacementRequest;
}

export namespace GetReplacementRequest {
  export type AsObject = {
    csvname: string,
    pkgname: string,
    channelname: string,
  }
}

export class GetAllProvidersRequest extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getKind(): string;
  setKind(value: string): void;

  getPlural(): string;
  setPlural(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProvidersRequest): GetAllProvidersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProvidersRequest;
  static deserializeBinaryFromReader(message: GetAllProvidersRequest, reader: jspb.BinaryReader): GetAllProvidersRequest;
}

export namespace GetAllProvidersRequest {
  export type AsObject = {
    group: string,
    version: string,
    kind: string,
    plural: string,
  }
}

export class GetLatestProvidersRequest extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getKind(): string;
  setKind(value: string): void;

  getPlural(): string;
  setPlural(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestProvidersRequest): GetLatestProvidersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestProvidersRequest;
  static deserializeBinaryFromReader(message: GetLatestProvidersRequest, reader: jspb.BinaryReader): GetLatestProvidersRequest;
}

export namespace GetLatestProvidersRequest {
  export type AsObject = {
    group: string,
    version: string,
    kind: string,
    plural: string,
  }
}

export class GetDefaultProviderRequest extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getKind(): string;
  setKind(value: string): void;

  getPlural(): string;
  setPlural(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultProviderRequest): GetDefaultProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultProviderRequest;
  static deserializeBinaryFromReader(message: GetDefaultProviderRequest, reader: jspb.BinaryReader): GetDefaultProviderRequest;
}

export namespace GetDefaultProviderRequest {
  export type AsObject = {
    group: string,
    version: string,
    kind: string,
    plural: string,
  }
}

