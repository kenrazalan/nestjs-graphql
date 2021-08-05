import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { CreateUserInput } from './dto/input/create-user.input';
import { GetUsersArgs } from './dto/args/get-users.args';
import { GetUserArgs } from './dto/args/get-user.args';
import { UsersService } from './users.service';
import { User } from './models/user';
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";



@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}
     
    @Query(() => User, {name: 'user', nullable: true})
     getUser(@Args() getUserArgs: GetUserArgs) {
        return this.usersService.getUser(getUserArgs)
    }

    @Query(() => [User], {name: 'users', nullable: 'items'})
    getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
        return this.usersService.getUsers(getUsersArgs)
    }

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): User {
        return this.usersService.createUser(createUserData)
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
        return this.usersService.updateUser(updateUserData)
    }

    @Mutation(() => User)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
        return this.usersService.deleteUser(deleteUserData)
    }
}