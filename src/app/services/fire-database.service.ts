import { Injectable } from "@angular/core";
import { Database, DataSnapshot, onValue, ref } from "@angular/fire/database";

@Injectable({
    providedIn: "root",
})
export class FireDatabaseService {
    constructor(private database: Database) {}

    public listen(
        reference: string,
        callback: (snapshot: DataSnapshot) => unknown
    ) {
        let fireRef = ref(this.database, reference);
        onValue(fireRef, callback);
    }
}
