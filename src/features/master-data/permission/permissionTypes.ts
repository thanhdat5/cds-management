export interface Permission {
  id: number;
  permissionId: string;
  permissionName: string;
  permissionDetails: PermissionDetail[];
  members: string[];
}
export interface PermissionDetail {
  moduleName: string;
  actions: string[];
//   children?: PermissionDetail[];
}
