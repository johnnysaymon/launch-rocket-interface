import Launch from "./Launch";

export default class LaunchesResume
{
    constructor(
        public next: Launch|null,
        public latest: Launch|null,
        public past: Launch[],
        public upcoming: Launch[],
    ){}
}