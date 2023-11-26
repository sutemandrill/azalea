import { storages } from '@handlers/state';

const { preferences } = storages;

const name = {
    defaults: {
        firstName: 'Sute',
        lastName: 'Mandrill'
    },

    get firstName() {
        return preferences.get('shouldUseCuteName')
            ? preferences.get('cuterFirstName') || this.defaults.firstName
            : preferences.get('firstName')
    },

    get lastName() {
        return preferences.get('shouldUseCuteName')
            ? preferences.get('cuterLastName') || this.defaults.lastName
            : preferences.get('lastName')
    }
};

const repository = {
    user: 'https://github.com/sutemandrill',

    get plain() {
        return this.user + '/sparxhacks';
    },

    hash: 'https://api.github.com/repos/sutemandrill/sparxhacks/git/refs/heads/main',
    download: 'https://github.com/sutemandrill/sparxhacks/releases/latest/download',
    raw: 'https://raw.githubusercontent.com/sutemandrill/sparxhacks',
};

const getImage = (name: string) => `${repository.raw}/main/extension/assets/${name}`;
const getFile = (name: string) => `${repository.download}/${name}`;
const capitalize = (s: string) => s.trim().replace(/^\w/, m => m.toUpperCase());
const noop = () => { };

export default {
    name,
    repository,
    getImage,
    getFile,
    capitalize,
    noop
}