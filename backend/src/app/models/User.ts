import {Entity, Column, ObjectID, ObjectIdColumn, BeforeInsert, BeforeUpdate} from "typeorm";
import bcrypt from 'bcryptjs'

@Entity('users')
class User{
    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    email: string;

    @Column({
        length: 8
    })
    password: string;

    passwordConfirmation: string

    @Column({
        default: true
    })
    active: boolean;

    @Column({
        default: new Date()
    })
    last_access: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10)
    }
}

export default User;
