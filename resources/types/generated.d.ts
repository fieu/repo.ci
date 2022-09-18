declare namespace App.Data {
    export type UserData = {
        name: string
        email: string
        github_id: string
        github_token: string
        ssh_private_key_path: string | null
        created_at: string
    }
}
