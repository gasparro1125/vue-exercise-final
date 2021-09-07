import { MembersListDetails, MembersDetailsPage } from '@/types';

export const listCallService ={
    async get ():Promise<MembersListDetails[]> {
        const members =await fetch('https://api.github.com/orgs/Lemoncode/members',{
            headers:{
                Accept:'application/json',
            },
        }
        ).then(response=>response.json())
        return members;
    },

    async getMember(
        login: MembersDetailsPage["login"]): Promise<MembersDetailsPage | undefined> {
        if (!login) throw new Error("login is required");
        //reutilizamos el get
        const member: MembersDetailsPage = await fetch(`https://api.github.com/users/${login}`).then((response) => response.json());
        return member;
    },

    async getCompany(corpName: string): Promise<MembersListDetails[]> {
        const members: MembersListDetails[] = await fetch(
        `https://api.github.com/orgs/${corpName}/members`).then((response) => response.json());
        return members;
    },

};