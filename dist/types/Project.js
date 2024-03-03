"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    get isNew() {
        return this.id === undefined;
    }
    constructor(initializer) {
        this.name = "";
        this.description = "";
        this.imageUrl = "";
        this.contractSignedOn = new Date();
        this.budget = 0;
        this.isActive = false;
        if (!initializer)
            return;
        if (initializer.id)
            this.id = initializer.id;
        if (initializer.name)
            this.name = initializer.name;
        if (initializer.description)
            this.description = initializer.description;
        if (initializer.imageUrl)
            this.imageUrl = initializer.imageUrl;
        if (initializer.contractTypeId)
            this.contractTypeId = initializer.contractTypeId;
        if (initializer.contractSignedOn)
            this.contractSignedOn = new Date(initializer.contractSignedOn);
        if (initializer.budget)
            this.budget = initializer.budget;
        if (initializer.isActive)
            this.isActive = initializer.isActive;
    }
}
exports.Project = Project;
