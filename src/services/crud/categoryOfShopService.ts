import { CategoriesOfShop } from "@/models";
import { CrudService } from "../crudService.pg";
import { ICrudOption } from "@/interfaces";

export class CategoryOfShopService extends CrudService<typeof CategoriesOfShop>{
    constructor() {
        super(CategoriesOfShop)
    }

    async findOrCreate(params: any, option?: ICrudOption) {
        let categoryOfShop = await this.model.findOne({
            where: {
                shop_id: params.shop_id,
                title: params.title
            },
            transaction: option.transaction
        })
        if (!categoryOfShop) {
            categoryOfShop = await this.exec(this.model.create(params, this.applyCreateOptions(option)))
        }
        return categoryOfShop
    }
}