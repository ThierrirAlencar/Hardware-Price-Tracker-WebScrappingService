import { Prisma, StaticLink } from "../../prisma/indev-output";

export interface StaticLinkRepository {
    create(data:Prisma.StaticLinkCreateInput):Promise<StaticLink>
    delete(id:string):Promise<StaticLink|null>
}