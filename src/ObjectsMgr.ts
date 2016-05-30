import {getRandomInt} from "./Globals";
import WorldMgr from "./WorldMgr";
import {BACKGROUND_SPEED} from "./Defines";

abstract class ObjectsMgr
{
    protected _time: number;                              
    protected _timeDiff: { min: number, max: number };    
    private _nextSpawnTime: number;                     
    private _worldMgr: WorldMgr;                    
    
    constructor(time: number, timeDiffMin: number, timeDiffMax: number)
    {
        this._time = time;
        this._timeDiff = { min: timeDiffMin, max: timeDiffMax };

        this.generateRandomSpawnTime();
    }

    protected getNextSpawnTime():number { return this._nextSpawnTime; }

    protected getWorldMgr():WorldMgr { return this._worldMgr; }
    
    public addWorldMgr(worldMgr: WorldMgr):void { this._worldMgr = worldMgr; }
    
    protected generateRandomSpawnTime():void
    {
        var min = this._timeDiff.min,
            max = this._timeDiff.max;

        if (BACKGROUND_SPEED > 5) {
            var mod = BACKGROUND_SPEED / 5;

            min = min / mod;
            max = max / mod;
        }

        this._nextSpawnTime = getRandomInt(min, max);
    }
}

export default ObjectsMgr;