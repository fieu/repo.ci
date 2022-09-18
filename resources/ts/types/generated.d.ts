declare namespace App.Data {
    export type BuildData = {
        id: number
        commit: string
        branch: string
        status: App.Enums.BuildStatusType
        project: App.Data.ProjectData
        server: App.Data.ServerData
        created_at: string
    }
    export type ProjectData = {
        id: number
        name: string
        branch: string
        secrets: Array<any>
        is_activated: boolean
        user_id: number
        builds: Array<App.Data.BuildData> | null
        created_at: string
    }
    export type ServerData = {
        id: number
        user: App.Data.UserData
        name: string
        host: string
        username: string
        password: string
        port: number
        is_activated: boolean
        projects: Array<App.Data.BuildData> | null
        created_at: string
    }
    export type UserData = {
        id: number
        name: string
        email: string
        github_id: string
        github_token: string
        ssh_private_key_path: string | null
        projects: Array<App.Data.ProjectData> | null
        servers: Array<App.Data.ServerData> | null
        created_at: string
    }
}
declare namespace App.Enums {
    export enum BuildStatusType {
        'PENDING' = 'pending',
        'SUCCEEDED' = 'succeeded',
        'FAILED' = 'failed',
        'CANCELLED' = 'cancelled',
    }
}
