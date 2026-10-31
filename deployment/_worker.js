const HISTORY_DOCUMENT="<!doctype html>\n<html lang=\"zh-Hant\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<meta name=\"theme-color\" content=\"#f5f3ef\">\n<meta name=\"history-build\" content=\"v9.2-cloud-1.9\">\n<title>歷史時空軸 · History Atlas v9.2 Cloud 1.9</title>\n<style>\n:root{color-scheme:light;--ink:#3c4850;--muted:#819098;--line:#e5e7e3;--bg:#f5f3ef;--paper:#fff;--sage:#8fa69e;--blue:#8fa6b5;--sand:#b8a58c;--rose:#bc9d98;--purple:#aaa0b4;--shadow:0 14px 45px rgba(61,71,73,.055)}\n*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,\"Noto Sans TC\",\"Microsoft JhengHei\",sans-serif;font-size:14px;line-height:1.55}button,input,select,textarea{font:inherit}button{cursor:pointer}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid #839faf;outline-offset:2px}a{color:#5d8191;text-decoration:none}a:hover{text-decoration:underline}\n.shell{max-width:1580px;margin:0 auto;padding:29px clamp(16px,3.1vw,50px) 45px}.masthead{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:30px}.brand{display:flex;align-items:center;gap:13px}.brand-mark{width:44px;height:44px;border-radius:15px;background:#758f91;display:grid;place-items:center;color:white;box-shadow:0 4px 12px rgba(107,143,143,.17)}.brand-mark svg{width:27px;height:27px}.brand-title{font-size:21px;letter-spacing:.045em;font-weight:700}.eyebrow{font-size:10px;letter-spacing:.22em;font-weight:720;color:#899a9e}.head-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end}#addEventTop{white-space:nowrap;flex-shrink:0}.button{border:1px solid #dce2df;border-radius:10px;padding:9px 15px;background:#fff;color:#4f6369;font-weight:620;display:inline-flex;gap:7px;align-items:center;justify-content:center;transition:background .15s,border .15s}.button:hover{background:#f1f5f3;border-color:#bccbc7}.button.primary{background:#718b87;color:#fff;border-color:#718b87}.button.primary:hover{background:#617c78}.button.ghost{background:transparent}.button.small{padding:6px 10px;border-radius:8px;font-size:12px}.button.danger{color:#985c5a;border-color:#e5cccc}.button svg{width:15px;height:15px;flex:none}\n.intro{display:flex;align-items:flex-end;justify-content:space-between;gap:22px;margin:2px 0 23px}.intro h1{font-family:Georgia,\"Noto Serif TC\",serif;font-size:clamp(30px,3.4vw,48px);font-weight:500;letter-spacing:.03em;line-height:1.25;margin:7px 0 10px}.intro p{color:#78878a;margin:0;font-size:14px}.intro-fact{text-align:right;color:#8b9696;white-space:nowrap;padding-bottom:5px}.intro-fact strong{font:500 29px Georgia,serif;display:block;color:#748d8d;line-height:1.15}.tag{border:1px solid #e6e6e1;background:#f8f8f5;border-radius:7px;display:inline-block;padding:2px 8px;font-size:11px;color:#6e7d80}\n.workspace{display:grid;grid-template-columns:244px minmax(0,1fr);gap:19px;align-items:start}.sidebar,.panel{background:var(--paper);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow)}.sidebar{padding:21px 17px 22px;position:sticky;top:16px}.side-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.section-caption{font-size:11px;letter-spacing:.16em;font-weight:750;color:#8b9c9d}.side-reset{font-size:11px;background:transparent;color:#879997;border:0;padding:2px 0}.side-reset:hover{text-decoration:underline}.side-hint{font-size:11px;color:#9aa3a1;margin:0 0 15px}.continent{margin:10px 0 13px}.continent-top{display:flex;align-items:center;gap:7px}.fold{font-size:13px;color:#96a2a0;padding:3px 2px;background:none;border:0;width:15px}.dot{height:8px;width:8px;display:inline-block;border-radius:50%;flex:none}.continent-name{border:0;background:transparent;color:#4e5e61;font-weight:710;font-size:13px;padding:5px 1px;flex:1;text-align:left}.select-continent{font-size:10px;background:#f2f5f3;color:#7b9390;border:1px solid #e6ece8;border-radius:7px;padding:3px 6px}.region-items{padding:4px 0 1px 19px;display:flex;flex-wrap:wrap;gap:6px}.region-chip{font-size:12px;color:#68797b;background:#f6f7f5;border:1px solid transparent;border-radius:8px;padding:6px 9px;white-space:nowrap}.region-chip:hover{border-color:#d6e0dc}.region-chip.active,.select-continent.active{background:#e7efeb;color:#597c70;border-color:#bdd2ca;font-weight:700}.sidebar-footer{margin-top:16px;padding-top:17px;border-top:1px solid #edf0ec}.sidebar-footer button{font-size:12px;display:flex;align-items:center;gap:7px;background:none;border:0;color:#668581;padding:3px 0;font-weight:700}.sidebar-footer p{font-size:11px;line-height:1.7;color:#a0aaa7;margin:10px 0 0}\n.panel{padding:23px 24px 25px;min-width:0}.panel-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap}.tabbar{display:inline-flex;gap:4px;background:#f4f6f3;border-radius:11px;padding:4px}.tab{padding:8px 15px;background:transparent;border:0;border-radius:8px;color:#8b9998;font-weight:650}.tab.active{background:#fff;color:#52716e;box-shadow:0 1px 4px #233c3918}.searchbox{display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #e1e7e3;background:#fcfdfb;border-radius:10px;max-width:260px;flex:1}.searchbox svg{width:16px;height:16px;color:#97aaa9;flex:none}.searchbox input{min-width:85px;width:100%;border:0;background:transparent;outline:0;color:#546769;font-size:12px}.panel-heading{display:flex;justify-content:space-between;gap:20px;margin:23px 0 15px;align-items:flex-end}.panel-heading h2{font-family:Georgia,\"Noto Serif TC\",serif;font-size:24px;font-weight:500;margin:0 0 3px}.panel-heading p{font-size:12px;margin:0;color:#899997}.muted{color:#97a4a2}.stats{font-size:11px;white-space:nowrap;color:#81928f;background:#f6f8f6;border-radius:8px;padding:6px 10px}.toolbar{display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap;padding:13px 14px 15px;background:#f9faf8;border-radius:12px;border:1px solid #eff0ec;margin-bottom:15px}.field{display:flex;flex-direction:column;gap:4px}.field label{font-size:11px;font-weight:690;color:#879695}.field input,.field select,.field textarea{width:100%;background:#fff;color:#536467;border:1px solid #dfe7e4;padding:10px 11px;border-radius:9px;outline:none}.field input:focus,.field select:focus,.field textarea:focus{border-color:#91aea3;box-shadow:0 0 0 3px #9bb9a420}.year-box{width:123px}.toolbar input{padding:7px 10px;font-size:13px;font-variant-numeric:tabular-nums}.separator{color:#b6bfbc;margin-bottom:8px}.presets{display:flex;gap:5px;flex-wrap:wrap;align-self:end}.preset{border:1px solid #e4e9e6;background:#fff;padding:7px 10px;border-radius:8px;color:#829391;font-size:11px}.preset:hover{background:#e9f0ed;color:#5f7d78}.zoom-tools{display:flex;gap:5px;margin-left:auto;align-self:flex-end}.zoom-tools button{background:#fff;border:1px solid #e4e8e5;border-radius:8px;padding:7px 9px;font-size:11px;color:#82938f}.zoom-tools button.on{background:#e7eeea;color:#64867b;border-color:#bcd2c7}.help-line{font-size:11px;color:#99a5a1;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:10px}.gantt-shell{border:1px solid #edf0ec;border-radius:12px;overflow:hidden}.gantt-scroll{width:100%;overflow-x:auto;overscroll-behavior-inline:contain}.gantt-inner{width:max-content;min-width:100%}.axis-row{display:flex;height:43px;background:#f8faf8;border-bottom:1px solid #e7ebe7;position:relative}.row-sticky{position:sticky;left:0;width:202px;min-width:202px;background:#fff;z-index:3;border-right:1px solid #eaece8}.axis-sticky{display:flex;align-items:center;padding:0 17px;color:#9ca8a4;font-size:11px;background:#f8faf8}.axis-track{height:43px;position:relative;flex:none}.axis-tick{position:absolute;top:0;bottom:0;border-left:1px solid #dce5e0}.axis-tick span{position:absolute;top:14px;left:6px;white-space:nowrap;color:#99a7a3;font-size:10px;font-variant-numeric:tabular-nums}.group-band{height:34px;display:flex;align-items:center;gap:9px;padding:0 17px;background:#f8f8f5;color:#687c7d;border-bottom:1px solid #eaede9;font-size:12px;font-weight:760;letter-spacing:.02em}.group-count{font-size:10px;color:#9aa7a3;font-weight:500}.gantt-row{display:flex;min-height:50px;background:#fff;border-bottom:1px solid #f0f2ef;position:relative}.gantt-row:last-child{border-bottom:0}.gantt-row:hover .row-sticky,.gantt-row:hover .gantt-track{background-color:#fbfcfa}.gantt-label{display:flex;align-items:center;justify-content:space-between;text-align:left;border:0;padding:5px 13px 5px 18px;color:#526267;gap:6px;box-shadow:4px 0 9px -7px #304b4440}.gantt-label b{display:block;font-weight:700;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:132px}.gantt-label small{color:#a3aeaa;display:block;font-size:10px;font-weight:450;font-variant-numeric:tabular-nums;white-space:nowrap}.label-arrow{color:#c0c9c4;font-size:15px}.gantt-track{flex:none;position:relative;min-height:50px;background:#fff}.grid-tick{position:absolute;top:0;bottom:0;border-left:1px dashed #eef2ef;pointer-events:none}.range-bar{position:absolute;top:17px;height:17px;border-radius:5px;border:1px solid #ffffff44;display:block;color:#fff;min-width:4px;overflow:hidden;white-space:nowrap;font-size:10px;font-weight:700;text-align:left;padding:0 6px;line-height:16px;box-shadow:0 1px 3px #788c8a18}.range-bar:hover{filter:saturate(1.15) brightness(.94);z-index:2}.point-dot{position:absolute;top:17px;width:13px;height:13px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 2px currentColor;transform:translateX(-50%)}.empty{padding:40px 24px;text-align:center;color:#91a09b}.chart-footer{color:#9aa6a2;font-size:11px;padding-top:11px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}.legend{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.legend i{display:inline-block;width:17px;height:6px;vertical-align:2px;border-radius:2px;background:#8da79f}.legend i.dot-swatch{height:7px;width:7px;border-radius:50%;background:#bc9d98}.chrono-shell{border:1px solid #edf0ec;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,#fff 0%,#fcfdfb 100%)}.chrono-scroll{width:100%;overflow-x:auto;overscroll-behavior-inline:contain}.chrono-stage{position:relative;min-height:220px;padding:20px 18px 24px;width:max-content;min-width:100%}.chrono-axis-label{position:absolute;left:18px;top:8px;font-size:12px;font-weight:760;color:#7d8b91;letter-spacing:.08em}.chrono-axis-line{position:absolute;left:48px;right:12px;top:38px;height:2px;background:#cfd8d5}.chrono-axis-line:after{content:\"\";position:absolute;right:-1px;top:-5px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:10px solid #cfd8d5}.chrono-tick{position:absolute;top:28px;width:1px;height:18px;background:#d6ddd9}.chrono-tick:after{content:\"\";position:absolute;left:50%;top:4px;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:#aab4b8}.chrono-tick span{position:absolute;top:-22px;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:11px;color:#7f8d93;font-variant-numeric:tabular-nums}.chrono-strip{position:relative;height:74px;margin:64px 0 0;border-radius:37px;background:#f2f4f1;box-shadow:inset 0 0 0 1px #edf0ec}.chrono-seg{position:absolute;top:10px;bottom:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:clamp(15px,1.45vw,23px);letter-spacing:.05em;text-shadow:0 1px 1px rgba(0,0,0,.08);padding:0 8px;overflow:hidden;border:0}.chrono-seg span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chrono-seg.first{border-radius:30px 0 0 30px}.chrono-seg.last{border-radius:0 30px 30px 0}.chrono-seg.mid{clip-path:polygon(0 0,calc(100% - 18px) 0,100% 50%,calc(100% - 18px) 100%,0 100%,18px 50%)}.chrono-seg.first.only{border-radius:30px}.chrono-seg.first:not(.only){clip-path:polygon(0 0,calc(100% - 18px) 0,100% 50%,calc(100% - 18px) 100%,0 100%)}.chrono-seg.last:not(.first){clip-path:polygon(0 0,100% 0,100% 100%,0 100%,18px 50%)}.chrono-seg-label-small{font-size:12px}.chrono-events{position:relative;height:44px}.chrono-event{position:absolute;transform:translateX(-50%);width:170px;text-align:center;background:none;border:0}.chrono-event.top{top:0}.chrono-event.bottom{top:114px}.chrono-event-line{position:absolute;left:50%;transform:translateX(-50%);width:2px;background:#cfdbd6}.chrono-event.top .chrono-event-line{top:63px;height:62px}.chrono-event.bottom .chrono-event-line{top:-60px;height:60px}.chrono-event-dot{position:absolute;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:#9aa8ac;border:3px solid #fff;box-shadow:0 0 0 2px currentColor}.chrono-event.top .chrono-event-dot{top:118px}.chrono-event.bottom .chrono-event-dot{top:-8px}.chrono-event-card{display:inline-block;max-width:170px;background:#fff;border:1px solid #e6ece8;border-radius:16px;padding:10px 12px;box-shadow:0 8px 24px rgba(61,71,73,.06)}.chrono-event-card b{display:block;font-size:13px;color:#56686f;margin-bottom:3px}.chrono-event-card small{display:block;color:#94a2a6;font-size:11px;font-variant-numeric:tabular-nums}.chrono-note{font-size:12px;color:#8c999d;padding:14px 2px 0}\n.focus-select{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:13px}.focus-select select{background:#f8faf8;border:1px solid #dfe7e4;border-radius:9px;padding:8px 10px;color:#5a7771;max-width:260px;min-width:170px}.flow-list{position:relative;margin:18px 0 5px 0}.flow-list:before{content:\"\";position:absolute;left:101px;top:10px;bottom:20px;width:2px;background:#e7eeea}.flow-item{display:grid;grid-template-columns:102px 1fr;align-items:start;gap:21px;position:relative;margin:0 0 16px}.flow-date{text-align:right;color:#82948f;padding-top:17px;font-family:Georgia,\"Noto Serif TC\",serif;font-size:12px;font-variant-numeric:tabular-nums}.flow-node{position:absolute;left:96px;top:20px;height:12px;width:12px;border-radius:50%;background:#fff;border:3px solid var(--node,#8fa69e);z-index:1}.flow-card{text-align:left;background:#fbfcfa;border:1px solid #e8ede8;border-radius:12px;padding:14px 17px;min-width:0;transition:border .12s,box-shadow .12s}.flow-card:hover{border-color:#bdcfc8;box-shadow:0 3px 10px #203b3210}.flow-card-title{font-size:15px;font-weight:720;color:#51646a;display:flex;gap:8px;align-items:baseline;justify-content:space-between;flex-wrap:wrap}.flow-sub{font-size:11px;color:#9fa9a5;margin:3px 0 7px}.flow-note{font-size:12px;color:#7f8d89;margin:0}.flow-tags{display:flex;gap:5px;flex-wrap:wrap;margin-top:9px}.flow-tag{background:#edf1ee;color:#81918c;padding:1px 7px;border-radius:5px;font-size:10px}.flow-actions{margin-top:10px;display:flex;gap:12px;font-size:11px}.footnote{border-top:1px solid #eef0ec;margin-top:25px;padding:14px 2px 0;font-size:11px;color:#a5ada9}\n.backdrop{position:fixed;inset:0;background:#2c414367;display:flex;align-items:center;justify-content:center;padding:16px;z-index:50;backdrop-filter:blur(3px)}.modal{background:#fff;width:min(790px,100%);max-height:min(92vh,880px);display:flex;flex-direction:column;border-radius:18px;box-shadow:0 20px 60px #273d3e42;overflow:hidden;position:relative}.modal-header{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #edf0ed;padding:21px 25px 17px}.modal-header h2{font-size:20px;font-weight:630;margin:0}.modal-header p{font-size:12px;color:#a0aaa6;margin:2px 0 0}.close-modal{border:0;background:#f4f7f4;color:#81928e;width:32px;height:32px;border-radius:9px;font-size:19px}.close-floating{position:absolute;top:16px;right:16px;z-index:2}.modal.no-header .modal-body{padding-top:20px}.modal-body{overflow-y:auto;padding:20px 25px 25px}.modal-actions{display:flex;gap:9px;justify-content:flex-end;border-top:1px solid #eef0ed;padding:14px 25px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:13px 14px}.span-2{grid-column:1/-1}.field textarea{resize:vertical;min-height:75px}.form-help{font-size:11px;color:#a3b0aa;margin:4px 0 0}.region-checklist{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;border:1px solid #e9eee9;border-radius:14px;padding:12px;max-height:340px;overflow:auto;background:#fbfcfb}.region-check-group{border:1px solid #e4ebe6;border-radius:12px;background:#fff;padding:12px}.region-check-group h4{display:flex;align-items:center;gap:8px;font-size:13px;color:#5e7670;margin:0 0 10px}.region-check-group label{display:inline-flex;align-items:flex-start;gap:8px;font-size:12px;color:#6f8380;line-height:1.35}.region-check-group input{accent-color:#708f81;flex:none;margin-top:1px}.region-check-group .continent-toggle{display:flex;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eef2ef;font-weight:700;color:#617973}.region-check-group-options{display:grid;grid-template-columns:repeat(auto-fit,minmax(92px,1fr));gap:10px 12px}.region-option{min-width:0;word-break:keep-all}.wiki-pane{margin:0 0 14px;padding:0;background:transparent;border:0;border-radius:0}.wiki-search{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px}.wiki-search input{flex:1;min-width:0;border:1px solid #dce6df;background:#fff;border-radius:10px;padding:10px 12px;color:#59716c}.wiki-results{margin-top:10px;display:flex;flex-direction:column;gap:6px}.wiki-result{display:flex;justify-content:space-between;align-items:center;gap:8px;background:#fff;border:1px solid #e5ebe5;border-radius:9px;padding:9px 10px}.wiki-result-main{min-width:0;flex:1}.wiki-result b{display:block;color:#5e7375;font-size:12px}.wiki-result small{color:#9aa7a4;font-size:11px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wiki-result button{font-size:11px;white-space:nowrap;border:1px solid #d7e5de;border-radius:7px;background:#eef4ef;color:#638374;padding:6px 9px}.wiki-status{font-size:11px;margin-top:8px;color:#879992}.wiki-status:empty{display:none}.region-manage-group{margin-bottom:14px}.region-manage-group h4{margin:0 0 8px;font-size:13px;color:#688078}.manage-row{display:flex;gap:7px;margin:0 0 7px;align-items:center}.manage-row input{border:1px solid #e0e8e2;border-radius:8px;padding:7px 9px;color:#566b67;flex:1;min-width:70px}.manage-row select{max-width:115px;padding:7px 4px;border-radius:8px;border:1px solid #e0e8e2;color:#728e83}.manage-row button{padding:6px 8px;background:#fafbf9;border:1px solid #e4ebe6;border-radius:8px;color:#6d8a81}.manage-row button.remove{color:#b18580}.add-region-row{background:#f8faf8;border-radius:12px;padding:12px;margin:14px 0;display:flex;gap:8px;flex-wrap:wrap;align-items:center}.add-region-row input,.add-region-row select{background:white;border:1px solid #dce6df;border-radius:8px;padding:8px 9px;color:#5d706b}.add-region-row input{flex:1;min-width:130px}.manage-warning{border-top:1px solid #edf0ec;padding-top:14px;font-size:12px;color:#8a9a93}\n.toast{position:fixed;right:23px;bottom:24px;z-index:90;padding:12px 18px;background:#5d7972;color:white;border-radius:11px;box-shadow:0 10px 30px #354b4433;font-size:12px;max-width:90vw}.hidden{display:none!important}\n@media(max-width:1050px){.workspace{grid-template-columns:210px minmax(0,1fr)}.sidebar{padding:18px 13px}.panel{padding:18px 18px}.intro-fact{display:none}.zoom-tools{margin-left:0}}\n@media(max-width:740px){.chrono-stage{padding:16px 12px 18px}.chrono-axis-label{left:12px;font-size:11px}.chrono-axis-line{left:48px;right:12px;top:34px}.chrono-tick{top:25px;height:16px}.chrono-tick span{font-size:10px;top:-20px}.chrono-strip{margin-top:56px;height:64px}.chrono-seg{font-size:13px;padding:0 4px}.chrono-seg-label-small{font-size:11px}.chrono-events{height:38px}.chrono-note{font-size:11px;padding-top:10px}.shell{padding:18px 13px 45px}.masthead{align-items:flex-start}.brand-title{font-size:17px}.brand-mark{height:39px;width:39px}.head-actions .button{font-size:11px;padding:8px 9px}.head-actions .secondary{display:none}.intro{margin-bottom:17px}.intro h1{font-size:32px}.workspace{display:flex;flex-direction:column;gap:11px}.sidebar{width:100%;position:static;padding:13px 15px}.side-title{margin-bottom:4px}.side-hint{display:none}.region-items{padding:0 0 0 13px}.continent{margin:4px 0}.continent-top{min-height:25px}.continent-name{font-size:12px}.sidebar-footer{margin-top:8px;padding-top:8px}.sidebar-footer p{display:none}.panel{width:100%;padding:16px 13px 20px}.panel-heading{margin-top:15px}.panel-heading h2{font-size:21px}.searchbox{max-width:100%;width:100%;order:2}.tabbar{width:100%;justify-content:space-between}.tab{flex:1}.panel-head{gap:8px}.toolbar{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;padding:9px}.year-box{width:100%;min-width:0}.year-box input{width:100%}.toolbar .separator{display:none}.presets{grid-column:1/-1;align-self:auto}.zoom-tools{grid-column:1/-1;width:100%;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin:0}.zoom-tools button{width:100%}.gantt-label,.row-sticky{width:152px;min-width:152px}.gantt-label{padding-left:10px}.gantt-label b{max-width:117px}.gantt-label small{font-size:9px}.flow-item{grid-template-columns:72px 1fr;gap:14px}.flow-list:before{left:74px}.flow-node{left:69px}.flow-date{font-size:11px}.flow-card{padding:11px}.modal-body{padding:16px}.modal-header{padding:16px}.modal-actions{padding:12px 16px}.region-checklist{grid-template-columns:1fr;padding:10px}.region-check-group{padding:10px}.region-check-group-options{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px 10px}.form-grid{gap:9px}.form-grid .field:not(.force-half){grid-column:1/-1}.manage-row select{max-width:92px}}\n\n/* v3: aligned, horizontally scrollable historical lanes */\n.era-intro{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin:7px 0 10px;color:#7f8d8c;font-size:12px}\n.era-jumps{display:flex;align-items:center;gap:7px;overflow-x:auto;max-width:100%;padding:4px 0 12px;white-space:nowrap;scrollbar-width:thin}\n.era-jumps>span{color:#9aaba7;font-size:11px;font-weight:700;flex:0 0 auto}\n.era-jumps button{flex:0 0 auto;background:#f5f7f4;border:1px solid #e5ece6;color:#708780;border-radius:8px;padding:6px 10px;font-size:11px;white-space:nowrap}\n.era-jumps button:hover{background:#e8f1ec;color:#4d7766;border-color:#c3d9cc}\n.era-view{display:flex;min-width:0;max-width:100%;border:1px solid #e7ece8;border-radius:12px;overflow:hidden;background:#fff}\n.era-labels{position:relative;flex:0 0 104px;background:#fdfefc;border-right:1px solid #e6ece8;z-index:2}\n.era-axis-label{position:absolute;left:15px;top:29px;font-size:12px;color:#718782;font-weight:800;white-space:nowrap}\n.era-region-label{position:absolute;left:0;right:0;height:70px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border:0;background:#f8faf7;color:#516968}\n.era-region-label:hover{background:#eaf2ed}\n.era-region-label strong{font-weight:800;font-size:15px;white-space:nowrap}\n.era-region-label small{font-size:10px;color:#9baba7}\n.era-scroll{flex:1;min-width:0;max-width:100%;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;scrollbar-color:#bbc9c1 #f5f7f4;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch}\n.era-svg{display:block;max-width:none;overflow:visible}\n.era-tick-label{fill:#687c83;font-size:13px;font-weight:580;font-family:system-ui,-apple-system,'Noto Sans TC',sans-serif}\n.era-period,.era-event,.era-event-connector{cursor:pointer;outline:0}\n.era-period:hover .era-period-fill{filter:brightness(.92)}\n.era-period:focus .era-period-fill,.era-event:focus rect{stroke:#304b51;stroke-width:3}\n.era-segment-text{pointer-events:none;font-family:system-ui,-apple-system,'Noto Sans TC','Microsoft JhengHei',sans-serif}\n.era-caption{color:#929e9e;margin-top:12px;font-size:11px;line-height:1.6}\n@media(max-width:740px){.era-labels{flex-basis:69px}.era-axis-label{left:11px;top:30px;font-size:11px}.era-region-label{height:70px}.era-region-label strong{font-size:13px}.era-region-label small{font-size:9px}.era-intro{font-size:11px}.era-tick-label{font-size:12px}.era-jumps button{font-size:11px}.era-caption{font-size:11px}}\n\n.mobile-region-toggle{display:none}\n@media(max-width:740px){\n  .mobile-region-toggle{display:flex;width:100%;background:#f8faf7;border:1px solid #e7ece7;border-radius:10px;padding:11px 12px;align-items:center;justify-content:space-between;gap:10px;color:#66817a;font-weight:720;text-align:left;font-size:12px}\n  .mobile-region-arrow{font-size:11px;color:#91a39d;font-weight:500}\n  #regionSidebar:not(.expanded) .side-title,#regionSidebar:not(.expanded) .side-hint,#regionSidebar:not(.expanded) #regionNav,#regionSidebar:not(.expanded) .sidebar-footer{display:none}\n  #regionSidebar{padding:11px 12px}\n  #regionSidebar.expanded .side-title{margin-top:12px}\n  .era-view{border-radius:10px}\n}\n\n/* v4 · Egyptian milestone annotation styles */\n.era-event .event-tag{fill:#fff;stroke:#d9e5dd;stroke-width:1.25;transition:fill .15s,stroke .15s}\n.era-event:hover .event-tag{fill:#eef5ee;stroke:#9bb8a4}\n.era-event .event-tag.uncertain{fill:#fffaf1;stroke:#c99f6c;stroke-dasharray:5 3}\n.era-event:hover .event-tag.uncertain{fill:#fdf1df}\n.era-event .event-tag-title{font-weight:720;font-size:12px;fill:#536a68;pointer-events:none}\n.era-event .event-tag-date{font-size:10px;fill:#889897;pointer-events:none}\n.era-event .event-tag-date.uncertain{fill:#a57748;font-weight:700}\n.era-event-connector .event-range{stroke:#b9a995;stroke-width:3;stroke-linecap:round}\n.era-event-connector .event-range.uncertain{stroke:#c89c68;stroke-dasharray:5 5;stroke-width:3}\n.era-event-connector .event-leader{stroke:#b7c7bf;stroke-width:1.6;stroke-linecap:round}\n.era-event-connector .event-leader.uncertain{stroke:#bd9766;stroke-dasharray:3 4}\n.era-event-connector .event-anchor{fill:#91a99e;stroke:white;stroke-width:2}\n.era-event-connector .event-anchor.uncertain{fill:#fff7e9;stroke:#bd9766;stroke-width:2}\n.era-legend{display:flex;flex-wrap:wrap;gap:14px;align-items:center;font-size:11px;color:#879994;margin:5px 0 9px}\n.era-legend i{display:inline-block;width:18px;height:5px;border-radius:3px;background:#9eafa6;vertical-align:2px;margin-right:5px}\n.era-legend i.range{background:#b9a995}\n.era-legend i.uncertain{height:3px;background:repeating-linear-gradient(90deg,#c89c68 0 6px,transparent 6px 10px)}\n@media(max-width:740px){.era-legend{font-size:10px;gap:9px}.era-jumps{gap:6px}}\n\n/* v5 · Featured battles and a legible callout for very short dynasties */\n.era-event .event-tag.featured{fill:#f8f0e1;stroke:#c8a77c;stroke-width:1.8}\n.era-event:hover .event-tag.featured{fill:#f4e6d0;stroke:#b89064}\n.era-event .event-tag-title.featured{fill:#86694c;font-weight:820}\n.era-event .event-tag.period-badge{fill:#eaf0f7;stroke:#8da9ba;stroke-width:1.4}\n.era-event .event-tag-title.period-badge{fill:#58718e;font-weight:800}\n.era-legend i.featured{background:#c8a77c}\n/* v6 · independent fork branches in the Roman timeline */\n.era-roman-fork-label{font-size:11px;font-weight:750;fill:#768d88}\n.era-roman-end{font-size:11px;font-weight:760;fill:#7a898b}\n.era-legend i.roman{background:linear-gradient(180deg,#a89180 0 45%,transparent 45% 55%,#86a6aa 55%)}\n\n/* v7 · simplified layout */\n.panel-head .tabbar,.panel-head .searchbox,.presets,.zoom-tools,.help-line,.footnote,.side-hint,.sidebar-footer p,.stats,#viewDescription,.era-intro,.era-jumps,.era-legend,.era-caption{display:none !important}\n.panel-heading{margin:0 0 14px;align-items:center}\n.panel-heading h2{margin:0;font-size:30px}\n.toolbar{padding:14px 16px;margin-bottom:18px;gap:10px;background:#fff;border:1px solid #edf0ec}\n.toolbar .separator{margin-bottom:10px}\n.mobile-region-toggle{font-size:13px}\n.era-view{margin-top:0}\n#regionSidebar .side-title{margin-bottom:10px}\n#regionSidebar .section-caption{font-size:12px}\n@media(max-width:740px){\n  .panel{padding:20px 16px 18px}\n  .panel-heading{margin:0 0 10px}\n  .panel-heading h2{font-size:24px}\n  .toolbar{padding:12px 12px 14px}\n}\n\n\n/* v7.1 · make clearing mobile region filter accessible without reopening menu */\n.mobile-region-bar{display:none}\n@media(max-width:740px){\n .mobile-region-bar{display:flex;align-items:stretch;gap:7px}\n .mobile-region-toggle{min-width:0;flex:1;width:auto}\n .mobile-clear-filter{flex:none;background:#e9f0eb;color:#617d70;border:1px solid #dce9df;border-radius:10px;padding:0 12px;font-size:12px;font-weight:700}\n .mobile-clear-filter:focus-visible{outline:2px solid #839faf;outline-offset:2px}\n}\n\n/* v7.3 · inline Wikipedia lookup, and robust checkbox grid (especially Android Chrome) */\n.modal-minimal-top{height:44px;display:flex;align-items:center;justify-content:flex-end;padding:6px 14px 2px;flex:none;background:#fff}\n.modal.no-header .modal-body{padding-top:0}\n#eventForm .field{min-width:0}\n#eventForm .field input:not([type=checkbox]),#eventForm .field textarea,#eventForm .field select{min-width:0;max-width:100%}\n#eventForm .region-checklist{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px;width:100%;min-width:0;max-width:100%;max-height:360px;overflow-y:auto;overflow-x:hidden;padding:11px;border:1px solid #e8eee9;border-radius:14px;background:#f9fbf8}\n#eventForm .region-check-group{min-width:0;padding:11px;border:1px solid #e7eee9;border-radius:12px;background:#fff}\n#eventForm .region-check-group h4{margin:0 0 9px;display:flex;gap:8px;align-items:center;font-size:13px;font-weight:720;line-height:1.4;white-space:nowrap}\n#eventForm .region-check-group-options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;width:100%;min-width:0}\n#eventForm label.region-option{display:flex;align-items:center;gap:8px;min-width:0;min-height:42px;margin:0;padding:8px 9px;background:#f6f8f5;border:1px solid #e8eee8;border-radius:9px;cursor:pointer;font-size:12px;color:#5d716d;line-height:1.4;text-align:left}\n#eventForm label.region-option:has(input:checked){background:#e7f0ea;border-color:#b7d0c1;color:#4f7460}\n#eventForm .region-option span{min-width:0;flex:1;white-space:normal;overflow-wrap:anywhere;word-break:normal}\n#eventForm .region-check-group input.event-region[type=checkbox]{appearance:auto;display:block;flex:0 0 18px;width:18px!important;min-width:18px!important;max-width:18px!important;height:18px!important;min-height:18px!important;max-height:18px!important;padding:0!important;margin:0!important;box-shadow:none!important;border:0;accent-color:#708f81}\n#eventForm .wiki-inline{max-width:100%;margin-top:4px}\n#eventForm .wiki-status{font-size:11px;color:#788f81;line-height:1.5;margin-top:5px}\n#eventForm .wiki-results{max-height:190px;overflow:auto;max-width:100%;margin-top:7px}\n#eventForm .wiki-result{min-width:0;padding:9px;gap:8px}\n#eventForm .wiki-result-main{min-width:0}\n#eventForm .wiki-result-main small{max-width:100%}\n@media(max-width:740px){\n #eventForm .region-checklist{grid-template-columns:1fr;gap:10px;padding:9px;max-height:355px}\n #eventForm .region-check-group{padding:11px}\n #eventForm .region-check-group-options{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}\n #eventForm label.region-option{min-height:43px;font-size:13px;gap:9px}\n}\n@media(max-width:360px){#eventForm label.region-option{padding:7px 6px;font-size:12px;gap:6px}}\n\n\n/* v7.6 · year locator and centered, draggable timeline */\n.year-navigator{flex:1 1 210px;min-width:210px;display:flex;flex-direction:column;gap:4px}\n.year-nav-header{display:flex;align-items:center;justify-content:space-between;gap:7px}\n.year-nav-header label{font-size:11px;font-weight:730;color:#617b75}\n.year-nav-header span{font-size:11px;color:#a3b1ad;white-space:nowrap}\n.year-nav-entry{display:flex;gap:7px;min-width:0}\n.toolbar .year-nav-entry input{flex:1 1 auto;min-width:0;width:100%;height:38px;border-radius:9px;border:1px solid #b9cfc5;background:#fff;color:#4f6863;font-weight:680;font-size:15px;padding:7px 11px;outline:none}\n.toolbar .year-nav-entry input:focus{border-color:#77998a;box-shadow:0 0 0 3px #91b6a027}\n.year-nav-entry button{flex:none;height:38px;padding:0 14px;background:#718f83;border:1px solid #718f83;border-radius:9px;color:#fff;font-size:13px;font-weight:760;white-space:nowrap}\n.year-nav-entry button:hover{background:#5d7b70}\n.era-viewport{position:relative;display:flex;flex:1;min-width:0;max-width:100%;overflow:hidden}\n.era-viewport .era-scroll{min-width:0;flex:1;cursor:grab;touch-action:pan-y;scrollbar-width:none;user-select:none;-webkit-user-select:none}\n.era-viewport .era-scroll::-webkit-scrollbar{display:none}\n.era-viewport .era-scroll.is-dragging{cursor:grabbing}\n.era-viewport .era-scroll.is-dragging *{user-select:none;-webkit-user-select:none}\n.era-center-guide{position:absolute;top:0;bottom:0;left:50%;width:0;z-index:3;pointer-events:none}\n.era-center-line{position:absolute;left:0;top:62px;bottom:0;border-left:1px dashed #b99a84;opacity:.64}\n.era-center-dot{position:absolute;top:57px;left:-5px;width:11px;height:11px;background:#fff;border:2px solid #b38e76;border-radius:50%;box-shadow:0 0 0 3px #f7f5f1}\n.era-center-badge{position:absolute;left:0;top:5px;transform:translateX(-50%);background:#f9f3ee;color:#8e6e5a;border:1px solid #e5d5ca;border-radius:20px;white-space:nowrap;font-size:11px;line-height:1.5;font-weight:800;padding:3px 8px;box-shadow:0 1px 5px #65574712}\n@media(max-width:740px){\n .year-navigator{grid-column:1/-1;grid-row:1;min-width:0;order:-1;margin:0 0 2px}\n .toolbar{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n .year-nav-entry input,.year-nav-entry button{height:40px}\n .year-nav-header span{font-size:10px}\n .era-center-badge{font-size:10px;padding:3px 7px}\n}\n\n/* v7.7 — quick-jump sheet follows the Wordbook interaction pattern */\n.year-jump-trigger{flex:none;align-self:flex-end;height:42px;display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;border:1px solid #c5d5ca;border-radius:11px;background:#718b79;color:white;font-size:13px;font-weight:730;padding:0 18px;transition:background .15s}\n.year-jump-trigger:hover{background:#5f7968}\n.year-jump-trigger:focus-visible{outline:2px solid #517562;outline-offset:3px}\n.jump-backdrop{position:fixed;inset:0;background:rgba(40,51,48,.38);display:flex;align-items:flex-end;justify-content:center;z-index:75}\n.jump-sheet{background:#fffefa;border:1px solid #ebece6;border-bottom:0;border-radius:28px 28px 0 0;width:min(660px,100%);box-shadow:0 -16px 45px rgba(35,46,42,.13);position:relative;padding:30px 24px calc(33px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;gap:21px;touch-action:pan-y}\n.jump-close{border:0;background:#f0f2ec;color:#6f807a;border-radius:50%;position:absolute;right:17px;top:15px;width:34px;height:34px;font-size:24px;line-height:1;display:flex;align-items:center;justify-content:center}\n.jump-form{display:flex;flex-direction:column;gap:8px;margin-top:2px}\n.jump-form label{color:#3d5148;font-weight:720;font-size:19px}\n.jump-form input{width:100%;border:1px solid #dce3db;background:#fff;border-radius:12px;color:#31443b;height:55px;padding:10px 16px;font-size:25px;font-variant-numeric:tabular-nums;outline:none}\n.jump-form input:focus{border-color:#779b83;box-shadow:0 0 0 3px #dcebe0}\n.jump-slider-row{display:flex;align-items:center;gap:10px;padding-top:2px}\n.jump-limit{font-size:12px;color:#84908a;font-variant-numeric:tabular-nums;white-space:nowrap}\n.jump-year-slider{appearance:none;-webkit-appearance:none;flex:1;width:100%;min-width:0;height:7px;border-radius:999px;outline:0;background:linear-gradient(to right,#728a72 0%,#728a72 var(--jump-progress,50%),#dce1d9 var(--jump-progress,50%),#dce1d9 100%);cursor:pointer;touch-action:pan-y}\n.jump-year-slider::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:27px;height:27px;border:3px solid white;border-radius:50%;background:#647e67;box-shadow:0 1px 6px #314b4066}\n.jump-year-slider::-moz-range-thumb{width:22px;height:22px;border:3px solid white;border-radius:50%;background:#647e67;box-shadow:0 1px 6px #314b4066}\n.jump-year-slider:focus-visible{outline:2px solid #719880;outline-offset:7px}\nbody.year-jump-open{overflow:hidden}\n@media(min-width:741px){.jump-sheet{margin-bottom:24px;border:1px solid #ebece6;border-radius:24px}}\n@media(max-width:740px){.year-jump-trigger{grid-column:1/-1;grid-row:2;align-self:stretch;width:100%;height:43px;font-size:14px}.jump-sheet{padding:28px 20px calc(32px + env(safe-area-inset-bottom,0px));gap:21px}.jump-form label{font-size:19px}.jump-form input{font-size:24px}.jump-close{right:16px;top:14px}}\n\n/* v8.2 · pinch zoom / five graduated time scales (years per viewport) */\n.scale-trigger{height:42px;padding:0 13px;display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;border:1px solid #d8e1dc;background:#f4f7f4;border-radius:11px;color:#577267;font-size:12px;font-weight:750;align-self:flex-end;cursor:pointer}\n.scale-trigger:hover,.scale-trigger:focus-visible{border-color:#93b3a1;background:#e8f0e9}\n.scale-trigger svg{width:16px;height:16px;flex:none}\n.scale-backdrop{position:fixed;inset:0;z-index:78;background:#24372e60;display:flex;align-items:flex-end;justify-content:center}\n.scale-sheet{width:min(550px,100%);padding:24px 22px calc(28px + env(safe-area-inset-bottom,0px));position:relative;border-radius:24px 24px 0 0;background:#fffefa;box-shadow:0 -14px 36px #1f382c24;border:1px solid #e5ebe4;border-bottom:0;display:flex;flex-direction:column;gap:17px}\n.scale-sheet h3{font-family:Georgia,'Noto Serif TC',serif;color:#3c5348;font-size:19px;font-weight:600;margin:0;padding-right:34px}\n.scale-close{position:absolute;right:16px;top:16px;border:0;background:#f0f2ec;border-radius:50%;height:34px;width:34px;color:#668077;font-size:23px;line-height:1;display:grid;place-items:center}\n.scale-status{display:flex;align-items:baseline;gap:8px;color:#577668}\n.scale-status strong{font-size:30px;font-variant-numeric:tabular-nums;font-weight:700;line-height:1.2}\n.scale-status span{font-size:12px;color:#84938b}\n.scale-adjust{display:flex;align-items:center;gap:13px}\n.scale-stepper{width:40px;height:40px;display:grid;place-items:center;background:#f2f5f1;color:#547366;border:1px solid #dce7db;border-radius:12px;font-size:23px;flex:none}\n.scale-stepper:disabled{opacity:.32;cursor:default}\n.scale-slider{min-width:0;flex:1;accent-color:#738d7c;touch-action:pan-y}\n.scale-marks{display:flex;justify-content:space-between;margin:0 45px;color:#8b9b91;font-size:11px;font-variant-numeric:tabular-nums}\n.scale-marks span{width:34px;text-align:center}\n.scale-hint{margin:0;color:#97a39b;font-size:12px}\nbody.scale-open{overflow:hidden}\n.era-viewport .era-scroll{touch-action:pan-y;overscroll-behavior-x:contain}\n.era-event-cluster .cluster-tag{fill:#f0f3ed;stroke:#abc1b1;stroke-width:1.5;cursor:pointer}\n.era-event-cluster:hover .cluster-tag{fill:#e2eddf}\n.era-event-cluster .cluster-title{fill:#4f7560;font-size:12px;font-weight:750;pointer-events:none}\n.era-event-cluster .cluster-date{fill:#819587;font-size:10px;pointer-events:none}\n@media(min-width:741px){.scale-sheet{border-radius:23px;margin:0 0 22px;border-bottom:1px solid #e5ebe4}}\n@media(max-width:740px){.scale-trigger{grid-column:1/-1;grid-row:3;justify-self:start;height:37px;min-width:0;padding:0 12px}.scale-sheet{padding:27px 19px calc(31px + env(safe-area-inset-bottom,0px))}.scale-adjust{gap:8px}.scale-marks{margin:0 43px}}\n\n/* v8.4 — Inline fast year navigation & collision-free chronological event tracks */\n.time-toolbar-v84{display:flex;align-items:center;gap:12px;flex-wrap:nowrap;padding:13px 14px;margin-bottom:16px}\n.inline-year-jump{display:flex;flex-direction:column;flex:1;gap:11px;min-width:0;padding:2px 0}\n.inline-jump-head{display:flex;align-items:center;gap:13px}\n.inline-jump-head label{font-size:13px;font-weight:750;color:#637d72;white-space:nowrap}\n.inline-jump-entry{display:flex;min-width:0;flex:1;max-width:240px;height:39px;border:1px solid #d5e1d8;border-radius:10px;background:#fff;overflow:hidden}\n.inline-jump-entry:focus-within{border-color:#849f89;box-shadow:0 0 0 3px #9cbaa32b}\n.inline-jump-entry input{width:100%;min-width:0;padding:7px 12px;border:0;outline:0;box-shadow:none;background:none;color:#425b4f;font-size:17px;font-weight:670;font-variant-numeric:tabular-nums}\n.inline-jump-entry input:focus{outline:0;box-shadow:none}\n.inline-jump-entry button{height:100%;width:40px;flex:none;display:grid;place-items:center;background:#e8f0e8;color:#597968;border:0;border-left:1px solid #dce6dd}\n.inline-jump-entry button:hover{background:#dceadd}\n.inline-jump-slider-row{display:flex;align-items:center;gap:10px;min-width:0}\n.inline-jump-slider-row .jump-year-slider{flex:1;min-width:0;height:6px}\n.inline-jump-slider-row .jump-year-slider::-webkit-slider-thumb{height:22px;width:22px}\n.inline-jump-slider-row .jump-limit{font-size:11px;color:#85938b}\n.time-toolbar-v84 .scale-trigger{flex:none;align-self:center;min-height:40px}\n.era-event-connector .event-range{stroke-width:3.4}\n.era-event-connector .event-leader{stroke-width:1.65;fill:none}\n@media(max-width:740px){\n .time-toolbar-v84{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px 10px;padding:12px 13px}\n .inline-year-jump{grid-column:1/-1;grid-row:1;gap:13px}\n .inline-jump-head{justify-content:space-between;gap:8px}\n .inline-jump-entry{max-width:none;flex:1;height:42px}\n .inline-jump-entry input{font-size:17px}\n .inline-jump-slider-row{gap:9px;padding:1px 0 6px}\n .inline-jump-slider-row .jump-limit{font-size:10px}\n .time-toolbar-v84 .scale-trigger{grid-column:1/-1;grid-row:2;justify-self:start;width:auto;height:34px;margin-top:0}\n}\n\n\n/* v8.6: Approved mobile layout – five one-row shortcuts, slider above both controls */\n.region-quick-row{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));align-items:stretch;gap:8px;width:100%;margin:9px 0 15px;min-width:0}\n.quick-region{display:grid;place-items:center;min-width:0;height:39px;background:#f6f8f5;border:1px solid #dbe5de;border-radius:10px;color:#58766d;font-weight:760;font-size:14px;line-height:1;transition:background .15s,border-color .15s,color .15s;padding:0 4px}\n.quick-region:hover{background:#edf3ed;border-color:#bdcfc3}\n.quick-region.active{background:#dcebe2;border-color:#91b1a0;color:#436753;box-shadow:inset 0 0 0 1px #a9c6b4}\n.quick-region:focus-visible{outline:2px solid #698f7e;outline-offset:2px}\n.quick-region.quick-reset{font-size:12px;letter-spacing:.02em}\n.time-toolbar-v85{display:block;padding:17px 17px 15px;margin-bottom:17px}\n.time-toolbar-v85 .inline-year-jump{width:100%;min-width:0;display:flex;flex-direction:column;gap:17px;padding:0;margin:0}\n.time-toolbar-v85 .inline-jump-slider-row{display:flex;gap:13px;align-items:center;width:100%;min-width:0;padding:11px 4px 4px;margin:0}\n.time-toolbar-v85 .inline-jump-slider-row .jump-year-slider{min-width:0;flex:1;height:7px;padding:0;cursor:pointer}\n.time-toolbar-v85 .inline-jump-slider-row .jump-limit{font-size:12px;font-weight:550;color:#81928c;white-space:nowrap;min-width:max-content}\n.time-toolbar-v85 .inline-jump-controls{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0;width:100%}\n.time-toolbar-v85 .scale-trigger{grid-column:auto;grid-row:auto;align-self:center;flex:none;height:40px;width:auto;min-width:0;margin:0;padding:0 13px;gap:7px;font-size:12px;border:1px solid #d6e1d9;background:#f6f8f5;border-radius:11px;white-space:nowrap}\n.time-toolbar-v85 .scale-trigger svg{width:17px;height:17px}\n.time-toolbar-v85 .scale-dropdown{font-size:12px;color:#6f8a7d;margin-left:2px}\n.time-toolbar-v85 .inline-jump-head{display:flex;align-items:center;justify-content:flex-end;gap:10px;min-width:0;margin-left:auto;flex:0 1 340px}\n.time-toolbar-v85 .inline-jump-head label{font-size:13px;font-weight:760;color:#688176;white-space:nowrap;flex:none}\n.time-toolbar-v85 .inline-jump-entry{flex:1 1 130px;min-width:0;max-width:230px;height:40px;border-radius:10px;border-color:#d2dfd6}\n.time-toolbar-v85 .inline-jump-entry input{width:100%;min-width:0;flex:1;font-size:17px;padding:7px 11px}\n.time-toolbar-v85 .inline-jump-entry button{width:41px}\n@media(max-width:740px){\n #regionSidebar .region-quick-row{margin:9px 0 0;gap:7px}\n #regionSidebar .quick-region{height:37px;border-radius:9px;font-size:15px}\n #regionSidebar .quick-region.quick-reset{font-size:12px}\n #regionSidebar.expanded .region-quick-row{margin-bottom:12px}\n .time-toolbar-v85{display:block;padding:14px 13px 15px}\n .time-toolbar-v85 .inline-year-jump{display:flex;grid-row:auto;grid-column:auto;gap:16px}\n .time-toolbar-v85 .inline-jump-slider-row{gap:9px;padding:8px 0 3px}\n .time-toolbar-v85 .inline-jump-slider-row .jump-limit{font-size:10.5px}\n .time-toolbar-v85 .inline-jump-controls{gap:8px;align-items:center}\n .time-toolbar-v85 .scale-trigger{height:40px;min-height:0;padding:0 9px;gap:5px;justify-self:auto;grid-row:auto;grid-column:auto;width:auto;max-width:50%;font-size:11.5px}\n .time-toolbar-v85 .scale-trigger svg{width:15px;height:15px}\n .time-toolbar-v85 .inline-jump-head{flex:1 1 0;gap:7px;justify-content:flex-end;min-width:0}\n .time-toolbar-v85 .inline-jump-head label{font-size:11.5px}\n .time-toolbar-v85 .inline-jump-entry{height:40px;min-width:0;flex:1 1 0;max-width:none}\n .time-toolbar-v85 .inline-jump-entry input{font-size:16px;padding:7px 8px}\n .time-toolbar-v85 .inline-jump-entry button{width:36px}\n}\n@media(max-width:375px){\n .region-quick-row{gap:5px;grid-template-columns:repeat(6,minmax(0,1fr))}\n .time-toolbar-v85 .inline-jump-controls{gap:6px}\n .time-toolbar-v85 .scale-trigger{font-size:10px;padding:0 7px;gap:3px}\n .time-toolbar-v85 .inline-jump-head{gap:5px}\n .time-toolbar-v85 .inline-jump-head label{font-size:10.5px}\n .time-toolbar-v85 .inline-jump-entry button{width:32px}\n}\n\n/* v9.2 — clear selected regions: directly above the 美 shortcut, same six-column grid. */\n@media(max-width:740px){\n #regionSidebar .mobile-region-bar{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:7px;align-items:stretch;width:100%;}\n #regionSidebar .mobile-region-toggle{grid-column:1 / span 5;width:100%;min-width:0;gap:6px;overflow:hidden;}\n #regionSidebar .mobile-region-toggle span:first-child{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}\n #regionSidebar .mobile-region-arrow{flex:none;white-space:nowrap;}\n #regionSidebar .mobile-filter-clear{grid-column:6;display:grid;place-items:center;min-width:0;padding:0 3px;height:auto;min-height:40px;border:1px solid #d5e1db;border-radius:10px;background:#e8f0eb;color:#527567;font-weight:760;font-size:12px;white-space:nowrap;}\n #regionSidebar .mobile-filter-clear:hover{background:#dcebe2;border-color:#a8c4b4;}\n #regionSidebar .mobile-filter-clear:disabled{opacity:.48;cursor:default;}\n}\n@media(min-width:741px){\n #regionSidebar .mobile-filter-clear{display:none;}\n}\n.era-region-label strong{max-width:100%;overflow:hidden;text-overflow:ellipsis}\n\n\n/* History Timeline Cloud: same design, explicit read-only / online state. */\n.history-cloud-state{background:#f0f4f1;border:1px solid #dce5dd;border-radius:11px;padding:9px 13px;margin:-16px 0 17px;color:#637b70;font-size:12px}\n.history-cloud-state.error{background:#fff5f1;border-color:#ecdcd2;color:#9c604d}\nbody:not(.history-owner) #addEventTop,body:not(.history-owner) #importBtn,body:not(.history-owner) #manageRegions{display:none!important}\nbody:not(.history-owner) #deleteEvent,body:not(.history-owner) #saveEvent{display:none!important}\n/* v9.2 Cloud 1.3: one Settings entry for account and device administration */\n#historySettingsBtn{display:inline-flex!important;align-items:center;justify-content:center;gap:7px;white-space:nowrap;padding:9px 13px;background:#fff;color:#59716f;border:1px solid #dce2df;border-radius:11px;min-height:42px}\n#historySettingsBtn:hover{background:#f0f5f2;border-color:#a9c0b9}\n#historySettingsBtn svg{width:18px;height:18px;flex:none}\n.history-settings-profile{display:flex;gap:13px;align-items:center;padding:16px;background:#f2f6f3;border:1px solid #e3ebe6;border-radius:15px;margin-bottom:17px}\n.history-settings-profile-icon{width:42px;height:42px;border-radius:13px;background:#e0ebe5;color:#5a796c;display:grid;place-items:center;flex:none}\n.history-settings-profile-icon svg{width:22px;height:22px}\n.history-settings-profile strong{display:block;font-size:15px;color:#3f5953;font-weight:720}\n.history-settings-profile p{font-size:12px;color:#81928b;margin:3px 0 0;overflow-wrap:anywhere}\n.history-settings-menu{display:flex;flex-direction:column;gap:9px}\n.history-settings-action{width:100%;border:1px solid #e3e9e4;background:#fff;border-radius:13px;min-height:66px;padding:11px 13px;display:flex;align-items:center;gap:13px;text-align:left;color:#4d665f}\n.history-settings-action:hover{background:#f4f8f5;border-color:#c6d7cd}\n.history-settings-action-icon{width:36px;height:36px;background:#edf3ef;border-radius:11px;display:grid;place-items:center;flex:none;color:#66887a}\n.history-settings-action-icon svg{width:18px;height:18px}\n.history-settings-action-text{flex:1;min-width:0}\n.history-settings-action-text b{display:block;font-weight:680;font-size:14px}\n.history-settings-action-text small{display:block;font-size:11px;color:#8d9d97;margin-top:3px;line-height:1.55}\n.history-settings-chevron{font-size:22px;line-height:1;color:#a7b6b0;font-weight:350}\n.history-settings-action.logout{margin-top:4px;color:#9c7066}\n.history-settings-action.logout .history-settings-action-icon{background:#faf2ef;color:#a7796c}\n@media(max-width:740px){.history-cloud-state{margin:0 0 15px;padding:8px 10px}.masthead{gap:8px}.brand{gap:8px;min-width:0}.brand>div:last-child{min-width:0}.head-actions{gap:6px;flex-wrap:nowrap}.head-actions #addEventTop{font-size:11px;padding:8px 9px}#historySettingsBtn{display:inline-flex!important;font-size:12px;min-height:38px;width:39px;min-width:39px;padding:8px}#historySettingsBtn svg{width:18px;height:18px}#historySettingsBtn span{display:none}}\n@media(max-width:375px){.masthead{gap:5px}.brand{gap:6px}.brand-title{font-size:15px}.eyebrow{letter-spacing:.12em;font-size:9px}.head-actions{gap:4px}.head-actions #addEventTop{font-size:10px;padding:8px 7px}#historySettingsBtn{width:37px;min-width:37px;padding:7px}}\n\n/* v9.2 Cloud 1.4 — compact header, no redundant status banner, and truly equal quick-filter cells. */\n.masthead{\n  display:grid;\n  grid-template-columns:minmax(0,1fr) auto;\n  grid-template-rows:auto auto;\n  column-gap:16px;\n  row-gap:13px;\n  align-items:center;\n  margin-bottom:24px;\n}\n.masthead .brand{grid-column:1;grid-row:1;min-width:0;}\n.masthead .brand>div:last-child{min-width:0;}\n.history-header-subtitle{\n  grid-column:1;grid-row:2;\n  margin:0;\n  color:#78878a;\n  font-size:14px;\n  line-height:1.65;\n  letter-spacing:.015em;\n}\n/* Keep failures visible, but suppress the redundant record/sync count during normal operation. */\n#historyCloudState:not(.error){\n  position:absolute!important;\n  width:1px!important;height:1px!important;\n  overflow:hidden!important;\n  clip-path:inset(50%)!important;\n  white-space:nowrap!important;\n  margin:0!important;padding:0!important;border:0!important;\n}\n#historyCloudState.error{margin:0 0 16px;}\n.masthead .head-actions{\n  grid-column:2;grid-row:1 / 3;\n  display:grid;\n  grid-template-columns:repeat(3,auto);\n  grid-template-rows:auto auto;\n  gap:8px;\n  align-self:stretch;\n  justify-items:end;\n  align-content:space-between;\n}\n.masthead #historySettingsBtn{grid-column:3;grid-row:1;justify-self:end;}\n.masthead #importBtn{grid-column:1;grid-row:1;}\n.masthead #exportBtn{grid-column:2;grid-row:1;}\n.masthead #addEventTop{grid-column:3;grid-row:2;justify-self:end;align-self:end;}\n@media(max-width:740px){\n .masthead{\n   grid-template-columns:minmax(0,1fr) auto;\n   grid-template-rows:auto auto;\n   column-gap:8px;\n   row-gap:10px;\n   align-items:start;\n   margin-bottom:19px;\n }\n .masthead .brand{gap:8px;align-self:start;}\n .masthead .brand-mark{flex:none;}\n .masthead .brand .eyebrow{line-height:1.55;overflow-wrap:normal;}\n .masthead .head-actions{\n   display:flex;\n   flex-direction:column;\n   justify-content:space-between;\n   align-items:flex-end;\n   align-self:stretch;\n   gap:8px;\n   flex-wrap:nowrap;\n   min-width:0;\n }\n .masthead #historySettingsBtn{\n   min-width:35px;width:35px;\n   min-height:35px;height:35px;\n   padding:7px;\n   border-radius:10px;\n   margin:0;\n }\n .masthead #historySettingsBtn svg{width:16px;height:16px;}\n .masthead #historySettingsBtn span{display:none;}\n .masthead #addEventTop{\n   align-self:end;\n   font-size:11px;\n   padding:8px 10px;\n   min-height:37px;\n   white-space:nowrap;\n }\n .history-header-subtitle{\n   font-size:12px;\n   line-height:1.6;\n   overflow-wrap:break-word;\n }\n /* Both rows must use the identical six-column track, width, gap and height.\n    This gives Clear and USA identical bounding boxes at all mobile widths. */\n #regionSidebar{--region-quick-gap:7px;--region-quick-height:37px;}\n #regionSidebar .mobile-region-bar,\n #regionSidebar .region-quick-row{\n   display:grid;\n   grid-template-columns:repeat(6,minmax(0,1fr));\n   column-gap:var(--region-quick-gap);\n   width:100%;min-width:0;max-width:100%;\n   margin-left:0;margin-right:0;\n   padding-left:0;padding-right:0;\n   box-sizing:border-box;\n }\n #regionSidebar .mobile-region-bar{align-items:center;}\n #regionSidebar .mobile-region-toggle{\n   grid-column:1 / span 5;\n   width:100%;min-width:0;\n   height:var(--region-quick-height);min-height:var(--region-quick-height);\n   padding:0 10px;\n   box-sizing:border-box;\n }\n #regionSidebar .mobile-filter-clear,\n #regionSidebar .region-quick-row .quick-region{\n   display:grid;place-items:center;\n   width:100%;min-width:0;max-width:100%;\n   height:var(--region-quick-height);\n   min-height:var(--region-quick-height);\n   padding:0 2px;\n   box-sizing:border-box;\n   border:1px solid #dbe5de;\n   border-radius:9px;\n   background:#f6f8f5;\n   color:#58766d;\n   line-height:1;\n }\n #regionSidebar .mobile-filter-clear{grid-column:6;font-size:12px;font-weight:760;}\n #regionSidebar .mobile-filter-clear:hover{background:#edf3ed;border-color:#bdcfc3;}\n #regionSidebar .mobile-filter-clear:disabled{opacity:.48;cursor:default;}\n}\n@media(max-width:375px){\n .masthead{column-gap:5px;row-gap:8px;}\n .masthead .brand{gap:6px;}\n .masthead .brand .eyebrow{letter-spacing:.11em;font-size:9px;}\n .masthead #historySettingsBtn{min-width:34px;width:34px;height:34px;min-height:34px;}\n .masthead #addEventTop{font-size:10px;padding:7px 8px;min-height:35px;}\n .history-header-subtitle{font-size:11px;}\n}\n/* v9.2 Cloud 1.6 — settings gear refinement B, following owner-supplied eight-tooth outline. */\n#historySettingsBtn svg{width:19px;height:19px;display:block;flex:none}\n@media(max-width:740px){.masthead #historySettingsBtn svg{width:18px;height:18px}}\n.geo-group{flex:1 1 100%;border:1px solid #e6ece8;border-radius:10px;background:#fcfdfb;padding:4px 7px;margin-top:4px}\n.geo-heading{display:flex;align-items:center;gap:5px}\n.geo-heading button{border:0;background:transparent;color:#617b71;padding:5px;font-size:12px}\n.geo-heading button:first-child{flex:1;text-align:left;font-weight:720}\n.geo-heading .geo-filter{border:1px solid #dfe8e1;border-radius:7px;background:#f4f8f4;font-size:10px}\n.geo-heading .geo-filter.active{background:#dfebe1;border-color:#a8c6ad;color:#477158}\n.geo-children{display:flex;flex-wrap:wrap;gap:6px;padding:6px 2px}\n#historySearchBtn{width:35px;min-width:35px;height:35px;min-height:35px;border-radius:10px;padding:7px}\n#historySearchBtn svg{width:18px;height:18px}\n.masthead #historySearchBtn{grid-column:2;grid-row:1}\n@media(max-width:740px){.masthead .head-actions{display:grid;grid-template-columns:35px 35px;grid-template-rows:35px auto;gap:7px;align-content:space-between}\n.masthead #historySearchBtn{grid-column:1;grid-row:1}\n.masthead #historySettingsBtn{grid-column:2;grid-row:1}\n.masthead #addEventTop{grid-column:1 / span 2;grid-row:2;justify-self:end}}\n/* Cloud 1.7 header: four slots, no overlap between Export and Search on desktop */\n@media(min-width:741px){\n .masthead .head-actions{grid-template-columns:repeat(4,auto)}\n .masthead #importBtn{grid-column:1;grid-row:1}\n .masthead #exportBtn{grid-column:2;grid-row:1}\n .masthead #historySearchBtn{grid-column:3;grid-row:1}\n .masthead #historySettingsBtn{grid-column:4;grid-row:1}\n .masthead #addEventTop{grid-column:4;grid-row:2}\n}\n.scale-marks span{min-width:0;flex:1;width:auto}\n@media(max-width:740px){\n .masthead .head-actions{grid-template-columns:35px 35px;grid-template-rows:35px auto}\n .masthead #historySearchBtn{grid-column:1;grid-row:1}\n .masthead #historySettingsBtn{grid-column:2;grid-row:1}\n .masthead #addEventTop{grid-column:1 / span 2;grid-row:2}\n}\n.geo-group.geo-parent{background:#f4f8f5;margin-top:7px;border-color:#d2e0d5}\n.geo-parent>.geo-children{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:6px 0}\n.geo-parent>.geo-children.hidden,.geo-child>.geo-children.hidden{display:none}\n.geo-group.geo-child{margin:2px 0 0 9px;background:#fff;border-color:#e0eae3}\n.geo-child>.geo-children{display:flex;flex-wrap:wrap;gap:5px;padding:5px 1px}\n.era-region-label[data-toggle-geo]{background:#ebf3ed;color:#426958;border-left:3px solid #a3c3ad}\n.era-region-label[data-toggle-geo]:hover{background:#dbece0}\n.era-region-label[data-toggle-geo] small{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.history-search-dialog{display:flex;flex-direction:column;gap:13px}\n.history-search-input-row{display:flex;gap:8px;align-items:center}\n.history-search-input-row input{flex:1;min-width:0;border:1px solid #d5e1d8;background:#f8faf8;border-radius:11px;padding:12px 13px;color:#50685d;outline:none}\n.history-search-input-row input:focus{border-color:#82aa93;box-shadow:0 0 0 3px #89b8a020}\n.history-search-results{max-height:48vh;overflow:auto;display:flex;flex-direction:column;gap:7px}\n.history-search-result{display:flex;flex-direction:column;align-items:flex-start;gap:3px;border:1px solid #e5ece6;background:#fff;border-radius:10px;padding:11px 13px;color:#4e665b;text-align:left;min-width:0}\n.history-search-result:hover{background:#f0f5f1;border-color:#b9d2bf}\n.history-search-result strong{font-size:14px;font-weight:710;overflow-wrap:anywhere}\n.history-search-result small{color:#8b9f94;font-size:11px;overflow-wrap:anywhere}\n\n/* Cloud 1.8: European macro-regions, preserving granular database IDs. */\n.macro-region-items{display:flex;flex-wrap:wrap;align-items:flex-start;gap:6px;padding:4px 0 1px 19px}\n.macro-region-items .macro-chip{flex:0 0 auto;width:auto;min-width:0;text-align:left;white-space:nowrap;line-height:normal;font-size:12px;min-height:0;padding:6px 9px}\n.macro-region-items .geo-sidebar-note{flex:1 0 100%;margin:5px 0 0;color:#99a9a1;font-size:10px;line-height:1.55}\n.macro-lane-label{background:#f0f5f1;color:#4b6a5b}\n.macro-lane-label:hover{background:#e2eee7}\n.macro-lane-label strong{max-width:100%;text-align:center;white-space:normal;overflow-wrap:anywhere;line-height:1.12}\n.geo-edit-help,.geo-saved-details{font-size:11px;line-height:1.7;color:#7f9388;margin:5px 0 8px}\n.geo-saved-details{padding:9px 11px;background:#f6f9f5;border-radius:9px;border:1px solid #e6ece7}\n#regionSidebar .region-items.macro-region-items.hidden{display:none}\n@media(max-width:740px){.macro-region-items{padding:0 0 0 13px}.geo-edit-help,.geo-saved-details{font-size:11px}}\n</style>\n</head>\n<body>\n<div class=\"shell\">\n <header class=\"masthead\">\n  <div class=\"brand\"><div class=\"brand-mark\"><svg viewBox=\"0 0 30 30\" aria-hidden=\"true\" fill=\"none\"><path d=\"M5 6v18M25 6v18M5 10h20M5 20h20\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><circle cx=\"10\" cy=\"10\" r=\"2.8\" fill=\"currentColor\"/><circle cx=\"20\" cy=\"20\" r=\"2.8\" fill=\"currentColor\"/></svg></div><div><div class=\"eyebrow\">HISTORY ATLAS · WORLD CHRONICLE</div><div class=\"brand-title\">歷史時空軸</div></div></div>\n  <div class=\"head-actions\"><button class=\"button\" id=\"historySearchBtn\" type=\"button\" aria-label=\"搜尋歷史事件\" title=\"搜尋歷史事件\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"m15.5 15.5 5 5\"/></svg></button><button class=\"button history-settings-trigger\" id=\"historySettingsBtn\" type=\"button\" aria-label=\"開啟設定\" aria-haspopup=\"dialog\" title=\"設定\"><svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#5b746d\" stroke-width=\"4.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M 35.25 19.43 Q 36.99 18.59 38.81 17.95 Q 40.63 17.32 41.41 14.45 Q 42.18 11.59 43.38 10.17 Q 44.57 8.76 50.00 8.76 Q 55.43 8.76 56.62 10.17 Q 57.82 11.59 58.59 14.45 Q 59.37 17.32 61.19 17.95 Q 63.01 18.59 64.75 19.43 Q 66.48 20.26 69.06 18.79 Q 71.64 17.31 73.48 17.15 Q 75.32 17.00 79.16 20.84 Q 83.00 24.68 82.85 26.52 Q 82.69 28.36 81.21 30.94 Q 79.74 33.52 80.57 35.25 Q 81.41 36.99 82.05 38.81 Q 82.68 40.63 85.55 41.41 Q 88.41 42.18 89.83 43.38 Q 91.24 44.57 91.24 50.00 Q 91.24 55.43 89.83 56.62 Q 88.41 57.82 85.55 58.59 Q 82.68 59.37 82.05 61.19 Q 81.41 63.01 80.57 64.75 Q 79.74 66.48 81.21 69.06 Q 82.69 71.64 82.85 73.48 Q 83.00 75.32 79.16 79.16 Q 75.32 83.00 73.48 82.85 Q 71.64 82.69 69.06 81.21 Q 66.48 79.74 64.75 80.57 Q 63.01 81.41 61.19 82.05 Q 59.37 82.68 58.59 85.55 Q 57.82 88.41 56.62 89.83 Q 55.43 91.24 50.00 91.24 Q 44.57 91.24 43.38 89.83 Q 42.18 88.41 41.41 85.55 Q 40.63 82.68 38.81 82.05 Q 36.99 81.41 35.25 80.57 Q 33.52 79.74 30.94 81.21 Q 28.36 82.69 26.52 82.85 Q 24.68 83.00 20.84 79.16 Q 17.00 75.32 17.15 73.48 Q 17.31 71.64 18.79 69.06 Q 20.26 66.48 19.43 64.75 Q 18.59 63.01 17.95 61.19 Q 17.32 59.37 14.45 58.59 Q 11.59 57.82 10.17 56.62 Q 8.76 55.43 8.76 50.00 Q 8.76 44.57 10.17 43.38 Q 11.59 42.18 14.45 41.41 Q 17.32 40.63 17.95 38.81 Q 18.59 36.99 19.43 35.25 Q 20.26 33.52 18.79 30.94 Q 17.31 28.36 17.15 26.52 Q 17.00 24.68 20.84 20.84 Q 24.68 17.00 26.52 17.15 Q 28.36 17.31 30.94 18.79 Q 33.52 20.26 35.25 19.43 Z\"/><circle cx=\"50\" cy=\"50\" r=\"19\"/></svg><span>設定</span></button><button class=\"button secondary\" id=\"importBtn\" type=\"button\">匯入資料</button><button class=\"button secondary\" id=\"exportBtn\" type=\"button\">匯出備份 ↗</button><button class=\"button primary\" id=\"addEventTop\" type=\"button\">＋ 新增事件</button><input class=\"hidden\" type=\"file\" id=\"fileInput\" accept=\".json,application/json\" aria-label=\"匯入備份 JSON\"></div>\n  <p class=\"history-header-subtitle\">以西元紀年為基礎，從時間看世界，從地區讀脈絡。</p>\n </header>\n <div id=\"historyCloudState\" role=\"status\" aria-live=\"polite\" class=\"history-cloud-state\">正在讀取 Supabase 資料，暫時僅供檢視…</div>\n <span id=\"totalNum\" hidden aria-hidden=\"true\">226</span>\n <div class=\"workspace\">\n  <aside class=\"sidebar\" id=\"regionSidebar\" aria-label=\"地區選擇\"><div class=\"mobile-region-bar\"><button class=\"mobile-region-toggle\" id=\"mobileRegionToggle\" type=\"button\" aria-expanded=\"false\"><span>▤ 地區篩選 · 五大洲</span><span class=\"mobile-region-arrow\">展開 ▾</span></button><button class=\"mobile-filter-clear\" id=\"clearSelection\" type=\"button\" aria-label=\"清除所有地區篩選\" title=\"清除所有地區篩選\">清除</button></div><div class=\"region-quick-row\" role=\"group\" aria-label=\"常用地區快速篩選\"><button class=\"quick-region quick-reset\" type=\"button\" id=\"clearFilter\" aria-label=\"顯示全部地區\" aria-pressed=\"true\">全部</button><button class=\"quick-region\" type=\"button\" data-quick-region=\"china\" aria-label=\"快速篩選中國\" aria-pressed=\"false\">中</button><button class=\"quick-region\" type=\"button\" data-quick-region=\"germany\" aria-label=\"快速篩選德國\" aria-pressed=\"false\">德</button><button class=\"quick-region\" type=\"button\" data-quick-region=\"france\" aria-label=\"快速篩選法國\" aria-pressed=\"false\">法</button><button class=\"quick-region\" type=\"button\" data-quick-region=\"uk\" aria-label=\"快速篩選英國\" aria-pressed=\"false\">英</button><button class=\"quick-region\" type=\"button\" data-quick-region=\"usa\" aria-label=\"快速篩選美國\" aria-pressed=\"false\">美</button></div><div class=\"side-title\"><span class=\"section-caption\">地區篩選 · 五大洲</span></div><div id=\"regionNav\"></div><div class=\"sidebar-footer\"><button type=\"button\" id=\"manageRegions\">⚙ 管理國家與地區</button><p>五大洲為固定框架；子分類可新增、改名、移動或刪除。</p></div></aside>\n  <main class=\"panel\"><div class=\"panel-head\"><div class=\"tabbar\" role=\"tablist\" aria-label=\"瀏覽模式\"><button class=\"tab active\" data-view=\"time\" type=\"button\" role=\"tab\" aria-selected=\"true\">↔ 時間視角</button><button class=\"tab\" data-view=\"region\" type=\"button\" role=\"tab\" aria-selected=\"false\">☷ 地區視角</button></div><label class=\"searchbox\" aria-label=\"搜尋歷史事件\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"m15.5 15.5 5 5\"/></svg><input type=\"search\" id=\"textSearch\" placeholder=\"搜尋朝代、歷史事件…\"></label></div>\n  <div class=\"panel-heading\"><div><h2 id=\"viewTitle\">世界歷史時間軸</h2><p id=\"viewDescription\">以水平朝代色帶閱讀中國歷史主幹。</p></div><span class=\"stats\" id=\"countLabel\">44 個條目</span></div>\n  <div class=\"toolbar time-toolbar-v84 time-toolbar-v85\" id=\"timeControls\">\n   <div class=\"inline-year-jump\" id=\"inlineYearJump\" aria-label=\"快速定位歷史年份\">\n    <div class=\"inline-jump-slider-row\">\n     <span class=\"jump-limit\" id=\"jumpStart\">前2686</span>\n     <input id=\"jumpSlider\" class=\"jump-year-slider\" type=\"range\" min=\"-2686\" max=\"2000\" value=\"1\" step=\"1\" aria-label=\"在主畫面拖曳快速選擇年份\">\n     <span class=\"jump-limit\" id=\"jumpEnd\">2000</span>\n    </div>\n    <div class=\"inline-jump-controls\">\n     <button id=\"openScale\" type=\"button\" class=\"scale-trigger\" aria-haspopup=\"dialog\" aria-label=\"調整時間軸縮放\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"9.5\" cy=\"9.5\" r=\"6.5\"/><path d=\"M14.5 14.5 21 21M6 9.5h7\"/></svg><span id=\"scaleTriggerText\">200 年／畫面</span><span class=\"scale-dropdown\" aria-hidden=\"true\">▾</span></button>\n     <div class=\"inline-jump-head\">\n      <label for=\"jumpYearInput\">快速定位</label>\n      <div class=\"inline-jump-entry\"><input id=\"jumpYearInput\" inputmode=\"text\" type=\"text\" autocomplete=\"off\" enterkeyhint=\"go\" aria-label=\"前往年份，例如 300 或 -221\"><button id=\"jumpGo\" type=\"button\" aria-label=\"前往輸入的年份\" title=\"前往年份\"><svg viewBox=\"0 0 24 24\" width=\"17\" height=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14m-6-6 6 6-6 6\"/></svg></button></div>\n     </div>\n    </div>\n   </div>\n  </div>\n  <div id=\"mainContent\" aria-live=\"polite\"></div>\n  </main>\n </div>\n</div>\n<div id=\"modalRoot\"></div><div id=\"scaleRoot\"></div><div id=\"toast\" class=\"toast hidden\" role=\"status\"></div>\n<script>\n'use strict';\nconst CONTINENTS=[{id:'asia',name:'亞洲',color:'#8fa69e',children:[['china','中國'],['korea','韓國'],['japan','日本'],['russia','俄羅斯'],['india','印度'],['persia','伊朗／波斯'],['turkey','土耳其／安那托利亞'],['mesopotamia','兩河流域（伊拉克）'],['levant','黎凡特'],['arabian-peninsula','阿拉伯半島'],['vietnam','越南'],['central-asia','中亞'],['mongolia','蒙古高原']]},{id:'africa',name:'非洲',color:'#b8a58c',children:[['egypt','埃及']]},{id:'europe',name:'歐洲',color:'#8fa6b5',children:[['greece','希臘'],['italy','義大利'],['germany','德國'],['france','法國'],['austria','奧地利'],['spain','西班牙'],['uk','英國'],['czechia','捷克'],['sweden','瑞典'],['belgium','比利時'],['netherlands','荷蘭'],['poland','波蘭'],['serbia','塞爾維亞'],['romania','羅馬尼亞'],['bulgaria','保加利亞'],['eastern-europe','東歐（含烏克蘭）']]},{id:'americas',name:'美洲',color:'#bc9d98',children:[['usa','美國'],['mexico','墨西哥'],['canada','加拿大'],['latin-america','中南美洲'],['cuba','古巴']]},{id:'oceania',name:'大洋洲',color:'#aaa0b4',children:[]}];\nconst SEED=[\n ['商','Shang dynasty',-1600,-1046,'朝代','商朝','約前1600年建立，早期紀年有不同學說。','約'],\n ['西周','Western Zhou',-1046,-771,'朝代','西周','約前1046年牧野之戰後建立；西周終於前771年。','約'],\n ['東周','Eastern Zhou',-770,-256,'朝代','东周','周王室東遷後的時期，包含春秋與部分戰國；戰國延續到前221年。','確定'],\n ['秦','Qin dynasty',-221,-207,'朝代','秦朝','前221年秦統一六國；滅亡年份常見前207年或前206年的不同標法。','確定'],\n ['西漢','Western Han',-202,9,'朝代','西汉','前202年劉邦即皇帝位；王莽建立新朝於西元9年。','確定'],\n ['新','Xin dynasty',9,23,'朝代','新朝','王莽建立的政權；23年覆亡，後有更始政權過渡至東漢。','確定'],\n ['東漢','Eastern Han',25,220,'朝代','东汉','西元25年劉秀稱帝；220年曹丕代漢。','確定'],\n ['魏晉南北朝','Three Kingdoms, Jin and Northern and Southern dynasties',220,589,'歷史時期','魏晋南北朝','綜合時期而非單一朝代；包含三國（220–280）、晉（266–420）、南北朝（420–589），多個政權曾並存。','確定'],\n ['隋','Sui dynasty',581,618,'朝代','隋朝','581年楊堅建隋；618年唐建立。隋的終結也有以619年為準的標示。','確定'],\n ['唐','Tang dynasty',618,907,'朝代','唐朝','618年建立、907年終結；690–705年間有武周政權。','確定'],\n ['五代十國','Five Dynasties and Ten Kingdoms',907,979,'歷史時期','五代十国','五代以907–960年為常見界線；十國中北漢直到979年才滅亡，此處顯示整段分裂期。','確定'],\n ['北宋','Northern Song',960,1127,'朝代','北宋','960年宋建立，1127年靖康之變後轉入南宋。','確定'],\n ['南宋','Southern Song',1127,1279,'朝代','南宋','1127年建立，1279年宋亡；與元朝1271–1279年重疊。','確定'],\n ['元','Yuan dynasty',1271,1368,'朝代','元朝','1271年忽必烈定國號大元，1368年元廷退出大都；蒙古帝國於1206年即已建立。','確定'],\n ['明','Ming dynasty',1368,1644,'朝代','明朝','1368年朱元璋建立明朝；1644年北京明廷終結，南明政權延續至1662年。','確定'],\n ['清','Qing dynasty',1636,1912,'朝代','清朝','1636年改國號為大清，1644年入關定都北京；後金始於1616年，1912年清帝退位。','確定']\n];\nconst EGYPT_SEED=[\n {id:'eg_old_kingdom',nameZh:'古王國時期',nameEn:'Old Kingdom of Egypt',start:-2686,end:-2181,type:'歷史時期',source:'https://zh.wikipedia.org/wiki/古王國時期',notes:'古埃及第三至第六王朝，約前2686年至前2181年；著名的金字塔建造時期。之後進入第一中間期，並非直接接續中王國。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'eg_middle_kingdom',nameZh:'中王國時期',nameEn:'Middle Kingdom of Egypt',start:-2055,end:-1650,type:'歷史時期',source:'https://zh.wikipedia.org/wiki/中王國時期',notes:'採維基百科古埃及歷史分期表的約前2055年至前1650年；不同史學分期可能採前2040年至前1782年或其他區間。之後進入第二中間期。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'eg_new_kingdom',nameZh:'新王國時期',nameEn:'New Kingdom of Egypt',start:-1550,end:-1069,type:'歷史時期',source:'https://zh.wikipedia.org/wiki/新王國時期',notes:'古埃及第十八、十九與二十王朝，約前1550年至前1069年；年代因分期及研究方法而略有差異。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'eg_ptolemaic',nameZh:'托勒密王朝',nameEn:'Ptolemaic Kingdom',start:-305,end:-30,type:'朝代',source:'https://zh.wikipedia.org/wiki/托勒密王國',notes:'托勒密一世於前305年稱王，托勒密埃及延續至前30年被羅馬吞併。與新王國相隔數個不同歷史時期，本圖不會將其誤接為同一時期。',precision:'確定',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true}\n];\n\n// Ancient Egyptian milestones; dates follow commonly used chronologies.\nconst EGYPT_EVENT_SEED=[\n {id:'eg_great_pyramid',nameZh:'古夫金字塔建造',shortName:'古夫金字塔',nameEn:'Construction of the Great Pyramid of Giza',start:-2580,end:-2560,type:'建造工程',source:'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza',notes:'約前2580至前2560年，古埃及第四王朝法老古夫（Khufu）在位期間興建吉薩大金字塔。這是常見估算，實際建造起訖年代因埃及編年法不同而有歧異。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'eg_hatshepsut',nameZh:'哈特謝普蘇特在位',shortName:'哈特謝普蘇特',nameEn:'Reign of Hatshepsut',start:-1479,end:-1458,type:'在位期間',source:'https://en.wikipedia.org/wiki/Hatshepsut',notes:'約前1479至前1458年，先以攝政身分協助圖特摩斯三世，後成為女法老並共同統治；部分研究將正式採用法老王號定在約前1473年，故請勿將整段誤解為獨立單獨在位。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'eg_akhenaten_reform',nameZh:'阿肯那頓宗教改革',shortName:'阿肯那頓改革',nameEn:'Religious reforms of Akhenaten',start:-1348,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Akhenaten',notes:'約前1348年（阿蒙霍特普四世／阿肯那頓在位第5年）開始大力推行阿頓崇拜，後續在位期間逐步排擠傳統諸神崇拜。阿肯那頓在位年代常採前1353–前1336年，也有前1351–前1334年的編年。時間軸以改革起點標為單一年份節點。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'eg_tutankhamun',nameZh:'圖坦卡門在位',shortName:'圖坦卡門',nameEn:'Reign of Tutankhamun',start:-1332,end:-1323,type:'在位期間',source:'https://en.wikipedia.org/wiki/Tutankhamun',notes:'常用埃及編年為約前1332至前1323年；其他學者採用前1336–前1327年等日期。其統治期間恢復阿蒙等傳統宗教與祭祀。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'eg_kadesh',nameZh:'拉美西斯二世與西臺的卡迭石戰役',shortName:'卡迭石戰役',nameEn:'Battle of Kadesh (Ramesses II and Hittites)',start:-1274,end:null,type:'戰爭',source:'https://en.wikipedia.org/wiki/Battle_of_Kadesh',notes:'前1274年（常用埃及編年），拉美西斯二世率領埃及軍與西臺王穆瓦塔里二世在卡迭石（今敘利亞一帶）交戰，結果無決定性勝負。不要與較晚的埃及－西臺和約（約前1259年）混為同一事件。',precision:'確定',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'eg_abu_simbel',nameZh:'阿布辛貝神殿建造',shortName:'阿布辛貝神殿',nameEn:'Construction of Abu Simbel temples',start:-1264,end:-1244,type:'建造工程',source:'https://en.wikipedia.org/wiki/Abu_Simbel',notes:'拉美西斯二世時期開鑿阿布辛貝大神殿及小神殿，常見估算為約前1264至前1244年（約20年）；另有前1244至前1224年的估計。神殿位於努比亞，古代埃及南方邊境地區。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true}\n];\n\n\n// v5 · Iranian imperial periods and cross-regional Greek/Persian events. IDs remain stable across imports/upgrades.\nconst PERSIAN_GREEK_SEED=[\n {id:'ir_achaemenid',nameZh:'波斯第一帝國（阿契美尼德）',shortName:'第一帝國・阿契美尼德',nameEn:'Achaemenid Empire',start:-550,end:-330,type:'朝代',source:'https://en.wikipedia.org/wiki/Achaemenid_Empire',notes:'前550年居魯士二世推翻米底王國，建立阿契美尼德帝國；前330年亞歷山大大帝攻滅此王朝。「第一帝國」是本時間軸對三個古代伊朗主要帝國的簡化排序，不是所有史學資料都使用的正式編號。',precision:'確定',regionIds:['persia'],sourceType:'wikipedia',isSeed:true},\n {id:'ir_parthian',nameZh:'波斯第二帝國（安息／帕提亞）',shortName:'第二帝國・安息',nameEn:'Parthian (Arsacid) Empire',start:-247,end:224,type:'朝代',source:'https://en.wikipedia.org/wiki/Parthian_Empire',notes:'傳統編年約前247年至西元224年，阿爾沙克王朝／安息（帕提亞）帝國從塞琉古勢力下興起，並在224年被薩珊帝國取代。第二帝國為本圖的概括排序，並非通用的正式史學名稱。',precision:'約',regionIds:['persia'],sourceType:'wikipedia',isSeed:true},\n {id:'ir_sasanian',nameZh:'波斯第三帝國（薩珊）',shortName:'第三帝國・薩珊',nameEn:'Sasanian Empire',start:224,end:651,type:'朝代',source:'https://en.wikipedia.org/wiki/Sasanian_Empire',notes:'西元224年阿爾達希爾一世擊敗安息，薩珊帝國興起；651年末代君主伊嗣俟三世身亡，波斯帝國終結。「第三帝國」是本圖排列用語；薩珊在其他史學論述中亦常稱「第二波斯帝國」。',precision:'確定',regionIds:['persia'],sourceType:'wikipedia',isSeed:true},\n {id:'ir_conquest_egypt_525',nameZh:'波斯第一帝國征服埃及',shortName:'波斯征服埃及',nameEn:'First Achaemenid conquest of Egypt',start:-525,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Battle_of_Pelusium',notes:'前525年，阿契美尼德波斯帝國岡比西斯二世（Cambyses II）於佩魯西姆之戰擊敗埃及第二十六王朝，後攻占孟菲斯並控制埃及，形成埃及第二十七王朝（第一次波斯統治）。同一事件會同時顯示在伊朗／波斯與埃及時間帶。',precision:'確定',regionIds:['persia','egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'gr_alexander_empire',nameZh:'亞歷山大帝國',shortName:'亞歷山大帝國',nameEn:'Empire of Alexander the Great',start:-336,end:-323,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Alexander_the_Great',notes:'前336年亞歷山大三世繼承馬其頓王位，前334年開始進攻波斯，前330年波斯阿契美尼德王朝覆亡；前323年亞歷山大去世，帝國隨後逐漸分裂為繼業者政權。此處以亞歷山大本人統治期間前336至前323年標示，不代表其死後立即完全瓦解。',precision:'確定',regionIds:['greece'],sourceType:'wikipedia',showPeriodCallout:false,isSeed:true},\n {id:'gr_persian_wars',nameZh:'希波戰爭',shortName:'希波戰爭',nameEn:'Greco-Persian Wars',start:-499,end:-449,type:'戰爭',source:'https://en.wikipedia.org/wiki/Greco-Persian_Wars',notes:'常見的希波戰爭廣義編年為前499至前449年，以小亞細亞愛奧尼亞起義為起點。兩次重要波斯入侵希臘本土分別發生於前490與前480–前479年；亦有資料只將前492至前449年列為主要戰爭期間。',precision:'約',regionIds:['greece','persia'],sourceType:'wikipedia',isSeed:true},\n {id:'gr_marathon',nameZh:'馬拉松戰役',shortName:'馬拉松戰役',nameEn:'Battle of Marathon',start:-490,end:null,type:'戰爭',source:'https://en.wikipedia.org/wiki/Battle_of_Marathon',notes:'前490年希波戰爭中，雅典與普拉提亞聯軍在馬拉松平原擊敗大流士一世派出的波斯軍隊；這場戰役不是斯巴達主導的戰役。設為醒目戰役標記，點選可自行補充內容。',precision:'確定',regionIds:['greece','persia'],sourceType:'wikipedia',featured:true,isSeed:true},\n {id:'gr_thermopylae',nameZh:'溫泉關戰役（斯巴達）',shortName:'斯巴達・溫泉關',nameEn:'Battle of Thermopylae',start:-480,end:null,type:'戰爭',source:'https://en.wikipedia.org/wiki/Battle_of_Thermopylae',notes:'前480年，斯巴達國王列奧尼達一世率領的希臘城邦聯軍於溫泉關抵抗薛西斯一世的波斯軍隊。著名的「三百斯巴達勇士」只是聯軍的一部分，還有底比斯、塞斯皮亞等其他希臘城邦參戰；最終波斯突破防線。',precision:'確定',regionIds:['greece','persia'],sourceType:'wikipedia',featured:true,isSeed:true}\n];\n\n\n\n// v6 · Classical Greece, Alexander's campaigns, and branching Roman history.\n// Rome's 395 CE division is a conventional visual milestone, not the first administrative separation.\nconst CLASSICAL_ROME_SEED=[\n {id:'gr_peloponnesian_war',nameZh:'伯羅奔尼撒戰爭',shortName:'伯羅奔尼撒戰爭',nameEn:'Peloponnesian War',start:-431,end:-404,type:'戰爭',source:'https://en.wikipedia.org/wiki/Peloponnesian_War',notes:'前431至前404年，雅典領導的提洛同盟與斯巴達領導的伯羅奔尼撒同盟交戰，雅典於前404年戰敗。此處使用一般所稱的第二次伯羅奔尼撒戰爭，而非前460–前445年的早期衝突。',precision:'確定',regionIds:['greece'],sourceType:'wikipedia',featured:true,isSeed:true},\n {id:'gr_chaeronea_338',nameZh:'馬其頓擊敗雅典（喀羅尼亞戰役）',shortName:'馬其頓擊敗雅典',nameEn:'Battle of Chaeronea (Philip II and Alexander)',start:-338,end:null,type:'戰爭',source:'https://en.wikipedia.org/wiki/Battle_of_Chaeronea_(338_BC)',notes:'前338年，馬其頓國王腓力二世率軍擊敗雅典、底比斯等希臘城邦聯軍，亞歷山大參戰。雅典此後受到馬其頓霸權制約，並未被亞歷山大直接滅亡或摧毀。前336年亞歷山大繼位後延續馬其頓在希臘的主導地位。使用此名稱是對「亞歷山大滅雅典」的史實校正。',precision:'確定',regionIds:['greece'],sourceType:'wikipedia',featured:true,isSeed:true},\n {id:'al_conquer_egypt_332',nameZh:'亞歷山大征服埃及',shortName:'亞歷山大入埃及',nameEn:'Alexander the Great conquers Egypt',start:-332,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Alexander_the_Great',notes:'前332年冬，亞歷山大率軍進入埃及，當地波斯總督馬札克斯投降；這代表埃及脫離阿契美尼德帝國統治。此事件與前331年亞歷山大港建立分開標記。',precision:'確定',regionIds:['greece','egypt','persia'],sourceType:'wikipedia',isSeed:true},\n {id:'al_found_alexandria_331',nameZh:'亞歷山大建立亞歷山大港',shortName:'建立亞歷山大港',nameEn:'Founding of Alexandria',start:-331,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Alexandria',notes:'亞歷山大在征服埃及後於前331年建立亞歷山大港（部分舊資料將其籌畫日期標為前332年）；它後來成為托勒密埃及的首都以及希臘化時代的重要文化中心。',precision:'確定',regionIds:['greece','egypt'],sourceType:'wikipedia',isSeed:true},\n {id:'al_achaemenid_defeat_330',nameZh:'亞歷山大攻滅波斯第一帝國',shortName:'亞歷山大滅波斯',nameEn:'Fall of the Achaemenid Empire to Alexander',start:-330,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Achaemenid_Empire',notes:'前331年亞歷山大在高加米拉戰役擊敗大流士三世，前330年占領波斯波利斯；同年大流士三世遇害，阿契美尼德帝國走向終結。此處以王朝終結的前330年為單一標記，征服波斯帝國全境仍是較長的軍事過程。',precision:'確定',regionIds:['greece','persia'],sourceType:'wikipedia',featured:true,isSeed:true},\n {id:'it_roman_kingdom',nameZh:'羅馬王政時期',shortName:'羅馬王政',nameEn:'Roman Kingdom',start:-753,end:-509,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Roman_Kingdom',notes:'依羅馬傳統建城紀年，前753年羅慕路斯建羅馬，至前509年推翻塔克文王朝而建立共和。早期羅馬王政史含傳說成分，並非每一年都獲考古史料確證。',precision:'約',regionIds:['italy'],sourceType:'wikipedia',isSeed:true},\n {id:'it_roman_republic',nameZh:'羅馬共和時期',shortName:'羅馬共和',nameEn:'Roman Republic',start:-509,end:-27,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Roman_Republic',notes:'傳統年代自前509年王政終結至前27年屋大維獲元老院授予奧古斯都尊號，羅馬共和轉入帝政（元首制）。',precision:'確定',regionIds:['italy'],sourceType:'wikipedia',isSeed:true},\n {id:'it_roman_empire',nameZh:'羅馬帝國（分治前）',shortName:'羅馬帝國',nameEn:'Roman Empire before the final imperial court division',start:-27,end:395,type:'歷史時期',source:'https://zh.wikipedia.org/wiki/羅馬帝國',notes:'前27年屋大維成為奧古斯都，為羅馬帝國元首制時代的常用起點。東西區域早已有行政分治與共治，但本圖為直觀呈現，將帝國主軸畫到395年狄奧多西一世去世後東西宮廷分治的慣用分期點；不意味著395年前一直完全單一行政管理。',precision:'確定',regionIds:['italy'],sourceType:'wikipedia',isSeed:true},\n {id:'it_west_roman',nameZh:'西羅馬帝國',shortName:'西羅馬',nameEn:'Western Roman Empire',start:395,end:476,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Western_Roman_Empire',notes:'採395年作為東西宮廷分治後的西部帝國起點；西元476年羅慕路斯・奧古斯都被廢黜，通常視為西羅馬帝國結束。西部帝國的東西分治在395年之前已多次存在；其他政治或法律編年有不同終點。',precision:'確定',regionIds:['italy'],sourceType:'wikipedia',romanBranch:'west',isSeed:true},\n {id:'it_east_roman',nameZh:'東羅馬帝國（拜占庭）',shortName:'東羅馬',nameEn:'Eastern Roman (Byzantine) Empire',start:395,end:1453,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Byzantine_Empire',notes:'395年作為羅馬帝國東西宮廷分治後的慣用時間節點；東部帝國以君士坦丁堡（今伊斯坦堡）為中心，延續至1453年鄂圖曼攻陷君士坦丁堡。實際帝國東部行政中心較早形成；「拜占庭帝國」是後世的史學稱呼，其居民自認羅馬人。為讓羅馬分支易讀，義大利主軸保留此傳承，同時將事件標到土耳其地區。',precision:'確定',regionIds:['italy','turkey'],sourceType:'wikipedia',romanBranch:'east',isSeed:true}\n];\n\n\n// v7.5: Roman Republic/Empire milestones and cross-regional impact; stable IDs for future upgrades.\nconst ROMAN_MILESTONE_SEED = [\n  {\n    \"id\": \"it_caesar_gaul\",\n    \"nameZh\": \"凱撒征服高盧（高盧戰爭）\",\n    \"shortName\": \"凱撒征服高盧\",\n    \"nameEn\": \"Gallic Wars (Caesar conquers Gaul)\",\n    \"start\": -58,\n    \"end\": -50,\n    \"type\": \"戰爭\",\n    \"source\": \"https://en.wikipedia.org/wiki/Gallic_Wars\",\n    \"notes\": \"前58至前50年，凱撒率羅馬軍隊對高盧各部族展開連年征戰。前52年阿萊西亞戰役擊敗維欽托利，是關鍵勝利；高盧大致相當於今日法國、比利時及鄰近地區，征服並非一次完成。\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"italy\",\n      \"france\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"it_caesar_assassination\",\n    \"nameZh\": \"凱撒遇刺\",\n    \"shortName\": \"凱撒遇刺\",\n    \"nameEn\": \"Assassination of Julius Caesar\",\n    \"start\": -44,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"source\": \"https://en.wikipedia.org/wiki/Assassination_of_Julius_Caesar\",\n    \"notes\": \"前44年3月15日（羅馬三月十五日，Ides of March），凱撒在羅馬龐培劇院的元老院會議場所遭一群元老刺殺，羅馬共和國陷入進一步的政治衝突。\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"italy\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"it_octavian_conquest_egypt\",\n    \"nameZh\": \"屋大維征服埃及（托勒密王朝終結）\",\n    \"shortName\": \"屋大維滅埃及\",\n    \"nameEn\": \"Octavian annexes Egypt\",\n    \"start\": -30,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"source\": \"https://en.wikipedia.org/wiki/Octavian\",\n    \"notes\": \"前31年亞克興海戰後，屋大維在前30年攻下亞歷山大港。安東尼與克麗奧佩脫拉七世相繼身亡，托勒密王國終結，埃及納入羅馬統治。請與前27年屋大維獲封奧古斯都分開看待。\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"italy\",\n      \"egypt\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"it_augustus_27\",\n    \"nameZh\": \"屋大維獲封奧古斯都（羅馬帝國開端）\",\n    \"shortName\": \"屋大維稱帝\",\n    \"nameEn\": \"Octavian receives the title Augustus\",\n    \"start\": -27,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"source\": \"https://en.wikipedia.org/wiki/Augustus\",\n    \"notes\": \"前27年羅馬元老院授予屋大維「奧古斯都」稱號，常用作羅馬共和轉入帝國元首制的起點；這不是後世君主式的單日加冕。前30年征服埃及是另一筆事件。\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"italy\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"it_claudius_britain_43\",\n    \"nameZh\": \"克勞迪烏斯入侵不列顛\",\n    \"shortName\": \"征服不列顛\",\n    \"nameEn\": \"Roman invasion of Britain under Claudius\",\n    \"start\": 43,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"source\": \"https://www.english-heritage.org.uk/learn/story-of-england/romans/invasion\",\n    \"notes\": \"西元43年，羅馬皇帝克勞迪烏斯下令入侵不列顛，首先控制今英格蘭東南部並建立羅馬不列顛行省。往後數十年才逐步擴張到英格蘭與威爾斯更廣區域，因此43年不代表整個英格蘭當年已完全被征服。\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"italy\",\n      \"uk\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"it_hadrians_wall_122\",\n    \"nameZh\": \"哈德良長城建造\",\n    \"shortName\": \"哈德良長城\",\n    \"nameEn\": \"Construction of Hadrian's Wall\",\n    \"start\": 122,\n    \"end\": 128,\n    \"type\": \"建造工程\",\n    \"source\": \"https://www.english-heritage.org.uk/visit/places/hadrians-wall/hadrians-wall-history-and-stories/history/\",\n    \"notes\": \"哈德良在西元122年到訪不列顛期間下令興建長城。主要建造工程至少持續六年，這裡以約122–128年表示；完整防禦工事在約130年時已大致完成。長城位於今日英格蘭北部，而非現代英格蘭與蘇格蘭的精確邊界。\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"italy\",\n      \"uk\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"it_end_roman_britain_410\",\n    \"nameZh\": \"羅馬結束對不列顛的統治\",\n    \"shortName\": \"羅馬撤離不列顛\",\n    \"nameEn\": \"End of Roman rule in Britain\",\n    \"start\": 410,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"source\": \"https://production.english-heritage.org.uk/visit/inspire-me/why-did-the-romans-leave-britain/\",\n    \"notes\": \"西元410年是羅馬在不列顛統治結束的常用分期：軍隊及中央行政的退出是四世紀末至五世紀初逐漸發生的過程。英國地方勢力於410年前後需自力防衛；羅馬居民並非在這一年集體離開。\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"italy\",\n      \"uk\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"it_edict_milan_313\",\n    \"nameZh\": \"米蘭敕令（君士坦丁與李錫尼）\",\n    \"shortName\": \"米蘭敕令\",\n    \"nameEn\": \"Edict of Milan\",\n    \"start\": 313,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"source\": \"https://en.wikipedia.org/wiki/Edict_of_Milan\",\n    \"notes\": \"西元313年，君士坦丁一世與李錫尼在米蘭達成宗教寬容政策，保障基督徒宗教實踐並允許歸還部分教會財產。常稱「米蘭敕令」，但實際文本與法律形式較複雜；313年並非基督教成為帝國國教的年份（傳統上以380年為關鍵）。\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"italy\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"it_constantinople_330\",\n    \"nameZh\": \"君士坦丁啟用新都君士坦丁堡\",\n    \"shortName\": \"君士坦丁堡建都\",\n    \"nameEn\": \"Dedication of Constantinople as new capital\",\n    \"start\": 330,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"source\": \"https://blog.oup.com/2012/05/constantine-dedicates-constantinople/\",\n    \"notes\": \"西元324年前後，君士坦丁開始將古城拜占庭擴建為「新羅馬」；西元330年5月11日舉行君士坦丁堡啟用典禮。此處將330年作為正式建都節點，並在義大利的羅馬歷史脈絡與今日土耳其所在地同步顯示。\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"italy\",\n      \"turkey\"\n    ],\n    \"sourceType\": \"reference\",\n    \"isSeed\": true\n  }\n];\nconst ROMAN_MILESTONE_ALIASES = {\n  \"it_caesar_gaul\": [\n    \"凱撒征服高盧\",\n    \"高盧戰爭\"\n  ],\n  \"it_caesar_assassination\": [\n    \"凱撒遇刺\",\n    \"凱撒遇刺事件\"\n  ],\n  \"it_octavian_conquest_egypt\": [\n    \"屋大維滅埃及\",\n    \"屋大維征服埃及\"\n  ],\n  \"it_augustus_27\": [\n    \"屋大維稱帝\",\n    \"屋大維獲封奧古斯都\",\n    \"奧古斯都建立羅馬帝國\"\n  ],\n  \"it_claudius_britain_43\": [\n    \"克勞迪烏斯征服不列顛\",\n    \"克勞迪烏斯入侵不列顛\"\n  ],\n  \"it_hadrians_wall_122\": [\n    \"哈德良長城\",\n    \"哈德良興建長城\",\n    \"哈德良修長城\"\n  ],\n  \"it_end_roman_britain_410\": [\n    \"羅馬撤離不列顛\",\n    \"羅馬撤離英國\",\n    \"羅馬退出不列顛\"\n  ],\n  \"it_edict_milan_313\": [\n    \"米蘭敕令\",\n    \"君士坦丁的米蘭敕令\"\n  ],\n  \"it_constantinople_330\": [\n    \"君士坦丁堡建都\",\n    \"君士坦丁營建新都\",\n    \"君士坦丁建立新都\"\n  ]\n};\n\nconst WEST_EUROPE_HISTORY_SEED=[\n  {\n    \"id\": \"we_east_west_schism_1054\",\n    \"nameZh\": \"東西教會大分裂\",\n    \"nameEn\": \"East–West Schism\",\n    \"start\": 1054,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"italy\",\n      \"greece\"\n    ],\n    \"notes\": \"1054年羅馬教廷與君士坦丁堡教會代表互相絕罰，常被視為天主教與東正教分裂的象徵性年份。教會疏離是數百年的過程，並非1054年才突然完全分裂。\",\n    \"source\": \"https://en.wikipedia.org/wiki/East%E2%80%93West_Schism\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"東西教會分裂\"\n  },\n  {\n    \"id\": \"we_luther_theses_1517\",\n    \"nameZh\": \"馬丁・路德《九十五條論綱》\",\n    \"nameEn\": \"Ninety-five Theses\",\n    \"start\": 1517,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"1517年，馬丁・路德提出對贖罪券等教會問題的九十五條神學論題，開啟宗教改革的重要爭議。「將文書釘在威登堡教堂門上」是傳統敘事，細節在史學上有討論。\",\n    \"source\": \"https://www.britannica.com/topic/Lutheranism\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"九十五條論綱\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_act_supremacy_1534\",\n    \"nameZh\": \"英格蘭《至尊法案》與英國國教\",\n    \"nameEn\": \"Act of Supremacy and Church of England\",\n    \"start\": 1534,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1534年亨利八世時期英格蘭國會通過《至尊法案》，確認國王為英格蘭教會在地上的最高元首，英國宗教改革由此制度化；伊莉莎白一世1559年重新確立國教安排。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Acts_of_Supremacy\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"英國國教確立\"\n  },\n  {\n    \"id\": \"we_jesuits_1540\",\n    \"nameZh\": \"耶穌會獲教宗核准成立\",\n    \"nameEn\": \"Founding of the Society of Jesus\",\n    \"start\": 1540,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"italy\",\n      \"spain\"\n    ],\n    \"notes\": \"依納爵・羅耀拉等人於1534年在巴黎結盟立願，1540年9月27日教宗保祿三世正式核准耶穌會成為修會，成為天主教改革、教育及海外傳教的重要力量。\",\n    \"source\": \"https://www.jesuits.global/2021/09/26/on-27-september-1540-the-society-of-jesus-received-papal-approval/\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"耶穌會成立\"\n  },\n  {\n    \"id\": \"we_pilgrims_mayflower_1620\",\n    \"nameZh\": \"新教徒乘五月花號抵達北美\",\n    \"nameEn\": \"Pilgrims arrive on the Mayflower\",\n    \"start\": 1620,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\",\n      \"north-america\"\n    ],\n    \"notes\": \"1620年來自英格蘭的分離派清教徒及其他移民乘五月花號抵達北美，建立普利茅斯殖民地；並非所有乘客都是出於宗教理由而移居。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Mayflower\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"五月花號赴北美\"\n  },\n  {\n    \"id\": \"we_puritan_migration_1630\",\n    \"nameZh\": \"英國清教徒大遷徙至新英格蘭\",\n    \"nameEn\": \"Puritan Great Migration\",\n    \"start\": 1630,\n    \"end\": 1640,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\",\n      \"north-america\"\n    ],\n    \"notes\": \"約1630至1640年，數以萬計的清教徒移民由英格蘭前往新英格蘭地區，波士頓與麻薩諸塞灣殖民地因此快速發展；與1620年的五月花號事件分開標示。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Puritans\",\n    \"precision\": \"約\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"清教徒大遷徙\"\n  },\n  {\n    \"id\": \"we_charlemagne_empire_800\",\n    \"nameZh\": \"查理曼的加洛林帝國\",\n    \"nameEn\": \"Carolingian Empire under Charlemagne\",\n    \"start\": 800,\n    \"end\": 814,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"france\",\n      \"germany\"\n    ],\n    \"notes\": \"查理曼768年即位法蘭克國王，800年在羅馬被教宗加冕為皇帝，814年去世。此色帶使用其「皇帝」任期800–814年，不等於法蘭克帝國於814年立即消失。\",\n    \"source\": \"https://www.britannica.com/biography/Charlemagne\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"查理曼帝國\"\n  },\n  {\n    \"id\": \"we_charlemagne_coronation_800\",\n    \"nameZh\": \"查理曼在羅馬受教宗加冕\",\n    \"nameEn\": \"Coronation of Charlemagne as emperor\",\n    \"start\": 800,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"italy\",\n      \"france\",\n      \"germany\"\n    ],\n    \"notes\": \"800年聖誕節，教宗良三世在羅馬加冕法蘭克國王查理曼為皇帝，重建西歐皇帝頭銜的政治象徵；他自768年起便統治法蘭克王國。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Charlemagne\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"查理曼加冕\"\n  },\n  {\n    \"id\": \"we_treaty_verdun_843\",\n    \"nameZh\": \"《凡爾登條約》瓜分法蘭克帝國\",\n    \"nameEn\": \"Treaty of Verdun\",\n    \"start\": 843,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"france\",\n      \"germany\",\n      \"italy\"\n    ],\n    \"notes\": \"843年查理曼的三位孫子瓜分法蘭克帝國，形成西、中、東法蘭克。西法蘭克與東法蘭克是後來法國、德國的重要政治源頭，但不等於843年出現現代民族國家。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Treaty_of_Verdun\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"凡爾登條約\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_west_francia_843\",\n    \"nameZh\": \"西法蘭克王國\",\n    \"nameEn\": \"West Francia\",\n    \"start\": 843,\n    \"end\": 987,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"843年凡爾登條約後形成西法蘭克，逐步發展為後世的法蘭西王國。987年于格・卡佩繼位是常用的政治史轉折點，並非當年才首次存在法蘭克王國。\",\n    \"source\": \"https://en.wikipedia.org/wiki/West_Francia\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"西法蘭克\"\n  },\n  {\n    \"id\": \"we_capet_987\",\n    \"nameZh\": \"于格・卡佩即位與卡佩王朝開始\",\n    \"nameEn\": \"Hugh Capet becomes King of the Franks\",\n    \"start\": 987,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"987年于格・卡佩成為西法蘭克國王，開啟卡佩王朝。此事件常作為後世法國王權發展的關鍵年份，不意味現代法國國家瞬間成立。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Hugh_Capet\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"卡佩王朝開始\"\n  },\n  {\n    \"id\": \"we_hundred_years_war_1337\",\n    \"nameZh\": \"英法百年戰爭\",\n    \"nameEn\": \"Hundred Years' War\",\n    \"start\": 1337,\n    \"end\": 1453,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"france\",\n      \"uk\"\n    ],\n    \"notes\": \"1337–1453年間英格蘭與法蘭西王室及其盟友長期爭奪法國王位與領土，戰爭間有多次休戰。名稱「百年戰爭」為後人概稱，實際約116年。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Hundred_Years%27_War\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"百年戰爭\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_war_three_henrys_1585\",\n    \"nameZh\": \"三亨利之戰\",\n    \"nameEn\": \"War of the Three Henrys\",\n    \"start\": 1585,\n    \"end\": 1589,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1585–1589年的法國宗教戰爭後期，法王亨利三世、吉斯公爵亨利、納瓦拉王亨利角逐權力。納瓦拉亨利於1589年繼位為亨利四世。部分論述以1587年起稱「三亨利之戰」。\",\n    \"source\": \"https://en.wikipedia.org/wiki/War_of_the_Three_Henrys\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"三亨利之戰\"\n  },\n  {\n    \"id\": \"we_bourbon_dynasty_1589\",\n    \"nameZh\": \"法國波旁王朝（革命前）\",\n    \"nameEn\": \"Bourbon dynasty in France before the Revolution\",\n    \"start\": 1589,\n    \"end\": 1792,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1589年納瓦拉的亨利繼位為法國亨利四世，波旁王朝開始；1792年法國廢除君主制。波旁王朝後於1814/1815–1830年間曾復辟，本圖以革命前主段表示。\",\n    \"source\": \"https://en.wikipedia.org/wiki/House_of_Bourbon\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"波旁王朝\"\n  },\n  {\n    \"id\": \"we_bourbon_start_1589\",\n    \"nameZh\": \"亨利四世繼位，波旁王朝開始\",\n    \"nameEn\": \"Henry IV of France succeeds to the throne\",\n    \"start\": 1589,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1589年瓦盧瓦王朝的亨利三世遇刺後，納瓦拉的亨利成為法國亨利四世，是波旁王朝在法國統治的起點。其後仍需多年宗教戰爭才穩固政權。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Henry_IV_of_France\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"波旁王朝起點\"\n  },\n  {\n    \"id\": \"we_louis14_personal_rule_1661\",\n    \"nameZh\": \"太陽王路易十四親政與鼎盛時期\",\n    \"nameEn\": \"Personal reign of Louis XIV\",\n    \"start\": 1661,\n    \"end\": 1715,\n    \"type\": \"在位期間\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"路易十四自1643年即位，1661年馬薩林死後開始親政至1715年去世；以凡爾賽宮、宮廷文化與集權統治聞名。所謂「鼎盛」不是有公認固定起訖的一段黃金年代，且後期戰爭負擔沉重。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Louis_XIV\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"太陽王親政\"\n  },\n  {\n    \"id\": \"we_french_revolution_1789\",\n    \"nameZh\": \"法國大革命\",\n    \"nameEn\": \"French Revolution\",\n    \"start\": 1789,\n    \"end\": 1799,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"法國大革命通常以1789年三級會議、巴士底獄事件為起點；此處採至1799年拿破崙霧月政變為止的常見廣義分期，期間君主制瓦解並經歷共和及恐怖統治。\",\n    \"source\": \"https://en.wikipedia.org/wiki/French_Revolution\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"法國大革命\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_napoleon_egypt_1798\",\n    \"nameZh\": \"拿破崙遠征埃及\",\n    \"nameEn\": \"French campaign in Egypt and Syria\",\n    \"start\": 1798,\n    \"end\": 1801,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"france\",\n      \"egypt\"\n    ],\n    \"notes\": \"1798年拿破崙率法軍入侵當時受鄂圖曼名義宗主權管轄的埃及，1799年返回法國，但法國遠征軍直到1801年才投降撤離。1798年尼羅河海戰中法國艦隊受英軍重創。\",\n    \"source\": \"https://en.wikipedia.org/wiki/French_campaign_in_Egypt_and_Syria\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"拿破崙遠征埃及\"\n  },\n  {\n    \"id\": \"we_first_french_empire_1804\",\n    \"nameZh\": \"拿破崙第一帝國\",\n    \"nameEn\": \"First French Empire\",\n    \"start\": 1804,\n    \"end\": 1814,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"拿破崙於1804年建立法蘭西第一帝國，1814年首次退位；1815年百日復辟為短暫延續，於另一個條目標示，以免把1814至1815年的波旁復辟期誤作連續統治。\",\n    \"source\": \"https://en.wikipedia.org/wiki/First_French_Empire\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"拿破崙帝國\"\n  },\n  {\n    \"id\": \"we_trafalgar_1805\",\n    \"nameZh\": \"特拉法加海戰\",\n    \"nameEn\": \"Battle of Trafalgar\",\n    \"start\": 1805,\n    \"end\": null,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"uk\",\n      \"france\",\n      \"spain\"\n    ],\n    \"notes\": \"1805年10月21日，納爾遜率領的英國皇家海軍擊敗法國與西班牙聯合艦隊，鞏固英國海上優勢；納爾遜在戰鬥中陣亡。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Battle_of_Trafalgar\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"特拉法加海戰\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_russia_campaign_1812\",\n    \"nameZh\": \"拿破崙遠征俄國慘敗\",\n    \"nameEn\": \"French invasion of Russia\",\n    \"start\": 1812,\n    \"end\": null,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"france\",\n      \"russia\"\n    ],\n    \"notes\": \"1812年拿破崙的大軍侵入俄羅斯；俄軍持續撤退、補給困難、莫斯科大火及嚴冬撤退等因素共同導致法軍嚴重損失，並非單純「敗給冬天」。\",\n    \"source\": \"https://en.wikipedia.org/wiki/French_invasion_of_Russia\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"拿破崙征俄\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_hundred_days_1815\",\n    \"nameZh\": \"拿破崙百日王朝\",\n    \"nameEn\": \"Hundred Days\",\n    \"start\": 1815,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1815年3月拿破崙自厄爾巴島返回法國，再度統治約百日；6月18日滑鐵盧失敗後第二次退位。本事件標於1815年，實際歷時約三個月。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Hundred_Days\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"百日王朝\"\n  },\n  {\n    \"id\": \"we_waterloo_1815\",\n    \"nameZh\": \"滑鐵盧戰役\",\n    \"nameEn\": \"Battle of Waterloo\",\n    \"start\": 1815,\n    \"end\": null,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"france\",\n      \"uk\",\n      \"germany\",\n      \"belgium\"\n    ],\n    \"notes\": \"1815年6月18日，拿破崙在今比利時滑鐵盧附近敗於威靈頓統率的英國及盟軍與布呂歇爾的普魯士軍隊，百日王朝遂告結束。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Battle_of_Waterloo\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"滑鐵盧\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_franco_prussian_war_1870\",\n    \"nameZh\": \"普法戰爭\",\n    \"nameEn\": \"Franco-Prussian War\",\n    \"start\": 1870,\n    \"end\": 1871,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"germany\",\n      \"france\"\n    ],\n    \"notes\": \"1870–1871年普魯士及德意志諸邦與法國交戰；法軍色當大敗、拿破崙三世被俘，巴黎遭圍困，後續促成德意志帝國的建立。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Franco-Prussian_War\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"普法戰爭\"\n  },\n  {\n    \"id\": \"we_sedan_1870\",\n    \"nameZh\": \"色當會戰：法皇拿破崙三世被俘\",\n    \"nameEn\": \"Battle of Sedan and capture of Napoleon III\",\n    \"start\": 1870,\n    \"end\": null,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"germany\",\n      \"france\"\n    ],\n    \"notes\": \"1870年9月1日至2日色當會戰，法軍戰敗；被俘的是法國皇帝拿破崙三世，不是法國國王。這是第二帝國垮台的重要轉折。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Battle_of_Sedan\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"色當會戰・法皇被俘\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_german_empire_1871\",\n    \"nameZh\": \"凡爾賽宮宣布德意志帝國成立\",\n    \"nameEn\": \"Proclamation of the German Empire at Versailles\",\n    \"start\": 1871,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"germany\",\n      \"france\"\n    ],\n    \"notes\": \"1871年1月18日普魯士國王威廉一世在凡爾賽宮鏡廳被宣布為德意志皇帝。這是帝國成立的「宣告儀式」，不是教宗主持的宗教加冕。\",\n    \"source\": \"https://en.chateauversailles.fr/discover/history/key-dates/proclamation-german-empire-1871\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"德意志帝國成立\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_holy_roman_empire_962\",\n    \"nameZh\": \"神聖羅馬帝國（奧托王朝起）\",\n    \"nameEn\": \"Holy Roman Empire\",\n    \"start\": 962,\n    \"end\": 1806,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"此圖以962年奧托一世在羅馬受教宗加冕為象徵性起點，1806年弗朗茨二世放棄帝號為終點。帝國疆域與政治性質跨世紀劇變，並不等於現代德國。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Holy_Roman_Empire\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"神聖羅馬帝國\"\n  },\n  {\n    \"id\": \"we_otto_962\",\n    \"nameZh\": \"奧托一世在羅馬受教宗加冕為皇帝\",\n    \"nameEn\": \"Coronation of Otto I as Holy Roman Emperor\",\n    \"start\": 962,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"germany\",\n      \"italy\"\n    ],\n    \"notes\": \"962年2月2日教宗若望十二世在羅馬加冕東法蘭克／德意志國王奧托一世為皇帝，常作為中世紀神聖羅馬帝國的重要起點。\",\n    \"source\": \"https://www.britannica.com/biography/Otto-I\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"奧托一世加冕\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_prague_defenestration_1618\",\n    \"nameZh\": \"布拉格擲窗事件\",\n    \"nameEn\": \"Defenestration of Prague (1618)\",\n    \"start\": 1618,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"czechia\",\n      \"austria\",\n      \"germany\"\n    ],\n    \"notes\": \"1618年5月23日波希米亞新教貴族在布拉格城堡把哈布斯堡皇帝的代表擲出窗外，引發波希米亞起義，是三十年戰爭的重要導火線。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Defenestrations_of_Prague\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"布拉格擲窗事件\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_thirty_years_war_1618\",\n    \"nameZh\": \"三十年戰爭\",\n    \"nameEn\": \"Thirty Years' War\",\n    \"start\": 1618,\n    \"end\": 1648,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"germany\",\n      \"austria\",\n      \"czechia\",\n      \"sweden\",\n      \"france\",\n      \"spain\"\n    ],\n    \"notes\": \"1618–1648年間以神聖羅馬帝國為中心的歐洲大戰，起因含宗教衝突，但隨時間演變為哈布斯堡、法國、瑞典等勢力的政治軍事爭霸；1648年以《西發里亞和約》為重要終點。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Thirty_Years%27_War\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"三十年戰爭\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_prussia_kingdom_1701\",\n    \"nameZh\": \"普魯士王國建立\",\n    \"nameEn\": \"Kingdom of Prussia founded\",\n    \"start\": 1701,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"1701年1月18日霍亨索倫的腓特烈三世在柯尼斯堡加冕為「在普魯士的國王」腓特烈一世，普魯士王國成立；後逐漸成為德意志統一的主導力量。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Kingdom_of_Prussia\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"普魯士王國誕生\"\n  },\n  {\n    \"id\": \"we_frederick_great_1740\",\n    \"nameZh\": \"腓特烈大帝統治普魯士\",\n    \"nameEn\": \"Reign of Frederick the Great\",\n    \"start\": 1740,\n    \"end\": 1786,\n    \"type\": \"在位期間\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"腓特烈二世（腓特烈大帝）1740至1786年統治普魯士，憑西里西亞戰爭、七年戰爭及行政與文化措施提升普魯士國際地位。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Frederick_the_Great\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"腓特烈大帝\"\n  },\n  {\n    \"id\": \"we_seven_years_war_1756\",\n    \"nameZh\": \"七年戰爭\",\n    \"nameEn\": \"Seven Years' War\",\n    \"start\": 1756,\n    \"end\": 1763,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"germany\",\n      \"austria\",\n      \"france\",\n      \"uk\",\n      \"russia\",\n      \"north-america\",\n      \"india\"\n    ],\n    \"notes\": \"1756–1763年的跨洲戰爭，腓特烈大帝率普魯士抵抗奧地利、法國、俄羅斯等國；英法同時在北美及印度交戰，因此不僅是普魯士的局部戰爭。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Seven_Years%27_War\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"七年戰爭\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_francisII_1806\",\n    \"nameZh\": \"弗朗茨二世放棄神聖羅馬皇帝稱號\",\n    \"nameEn\": \"Dissolution of the Holy Roman Empire\",\n    \"start\": 1806,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"austria\",\n      \"germany\"\n    ],\n    \"notes\": \"1806年8月6日，法國拿破崙勢力擴張後，弗朗茨二世放棄神聖羅馬皇帝頭銜並宣布帝國解體；他仍以弗朗茨一世繼續擔任奧地利皇帝。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Dissolution_of_the_Holy_Roman_Empire\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"神聖羅馬帝國終結\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_bismarck_1862\",\n    \"nameZh\": \"俾斯麥的鐵血政策與執政時期\",\n    \"nameEn\": \"Otto von Bismarck in power\",\n    \"start\": 1862,\n    \"end\": 1890,\n    \"type\": \"在位期間\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"俾斯麥1862年出任普魯士首相並發表「鐵與血」演說，1871年成為德意志帝國首任宰相，直到1890年卸任。兩階段官職不同，此處以掌權期間統合呈現。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Otto_von_Bismarck\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"鐵血宰相俾斯麥\"\n  },\n  {\n    \"id\": \"we_heptarchy_600\",\n    \"nameZh\": \"英格蘭盎格魯－撒克遜七王國時期\",\n    \"nameEn\": \"Heptarchy in Anglo-Saxon England\",\n    \"start\": 600,\n    \"end\": 829,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"約6至9世紀英格蘭多個盎格魯－撒克遜王國並立，傳統概稱肯特、薩塞克斯、埃塞克斯、東盎格利亞、威塞克斯、麥西亞、諾森布里亞「七王國」，但並非同一時間恰好只有七國；以約600–829年便於圖像化。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Heptarchy\",\n    \"precision\": \"約\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"英格蘭七王國\"\n  },\n  {\n    \"id\": \"we_lindisfarne_viking_793\",\n    \"nameZh\": \"維京人襲擊林迪斯法恩\",\n    \"nameEn\": \"Viking raid on Lindisfarne\",\n    \"start\": 793,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"793年維京人襲擊英格蘭東北的林迪斯法恩修道院，是後世常用的維京時代開端象徵；但北歐人在此之前也有航海活動，且此後侵襲與移民逐漸擴大。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Lindisfarne\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"維京人入侵起點\"\n  },\n  {\n    \"id\": \"we_great_heathen_army_865\",\n    \"nameZh\": \"維京「異教徒大軍」入侵英格蘭\",\n    \"nameEn\": \"Great Heathen Army\",\n    \"start\": 865,\n    \"end\": 878,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"約865年大規模維京軍隊登陸英格蘭，陸續攻擊諾森布里亞、東盎格利亞與麥西亞，並與威塞克斯的阿佛列大帝對抗；878年後丹麥法區逐漸成形。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Great_Heathen_Army\",\n    \"precision\": \"約\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"維京大軍入侵\"\n  },\n  {\n    \"id\": \"we_england_united_927\",\n    \"nameZh\": \"埃塞爾斯坦統一英格蘭王國\",\n    \"nameEn\": \"Formation of the Kingdom of England\",\n    \"start\": 927,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"927年威塞克斯國王埃塞爾斯坦取得對諾森布里亞等地的控制，通常被視為統一英格蘭王國的重要年份；此前已有逐步統一的長期過程，後續王權亦曾反覆變動。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Kingdom_of_England\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"英格蘭王國誕生\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_norman_conquest_1066\",\n    \"nameZh\": \"諾曼第公爵威廉征服英格蘭\",\n    \"nameEn\": \"Norman conquest of England\",\n    \"start\": 1066,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\",\n      \"france\"\n    ],\n    \"notes\": \"1066年諾曼第公爵威廉率軍渡海，在黑斯廷斯戰役擊敗哈羅德二世，後加冕為英格蘭國王威廉一世；軍事征服與政治整合在其後數年持續。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Norman_Conquest\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"諾曼征服\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_magna_carta_1215\",\n    \"nameZh\": \"英王約翰簽署《大憲章》\",\n    \"nameEn\": \"Magna Carta\",\n    \"start\": 1215,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1215年6月15日英格蘭國王約翰在蘭尼米德接受《大憲章》，最初主要協調國王與貴族的權利義務，後成為限制王權與法治傳統的象徵；1215年版本並非立即穩定生效。\",\n    \"source\": \"https://commonslibrary.parliament.uk/research-briefings/cbp-11169/\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"《大憲章》\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_wars_roses_1455\",\n    \"nameZh\": \"英格蘭玫瑰戰爭\",\n    \"nameEn\": \"Wars of the Roses\",\n    \"start\": 1455,\n    \"end\": 1487,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1455–1487年英格蘭蘭開斯特與約克兩系王位繼承者爆發多次內戰；1485年博斯沃思原野之役亨利七世獲勝後都鐸王朝開始，部分殘餘衝突延至1487年。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Wars_of_the_Roses\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"玫瑰戰爭\"\n  },\n  {\n    \"id\": \"we_tudor_dynasty_1485\",\n    \"nameZh\": \"英格蘭都鐸王朝\",\n    \"nameEn\": \"House of Tudor\",\n    \"start\": 1485,\n    \"end\": 1603,\n    \"type\": \"朝代\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1485年亨利七世擊敗理查三世並即位，開始都鐸王朝，直到1603年伊莉莎白一世逝世。1485年是王朝起點，但玫瑰戰爭的最後一次主要戰鬥在1487年。\",\n    \"source\": \"https://en.wikipedia.org/wiki/House_of_Tudor\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"都鐸王朝\"\n  },\n  {\n    \"id\": \"we_spanish_armada_1588\",\n    \"nameZh\": \"英格蘭擊退西班牙無敵艦隊\",\n    \"nameEn\": \"Spanish Armada defeated\",\n    \"start\": 1588,\n    \"end\": null,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"uk\",\n      \"spain\"\n    ],\n    \"notes\": \"1588年西班牙艦隊計畫護送陸軍進攻英格蘭，但在海峽遭英國艦隊攻擊及風暴重創而失敗；不宜簡化為某一場海戰就摧毀全部艦隊。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Spanish_Armada\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"擊敗無敵艦隊\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_english_civil_war_1642\",\n    \"nameZh\": \"英國內戰（三次英格蘭內戰）\",\n    \"nameEn\": \"English Civil War\",\n    \"start\": 1642,\n    \"end\": 1651,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1642–1651年英格蘭王黨與議會派多次交戰，政治與宗教紛爭涉及蘇格蘭、愛爾蘭等地；查理一世在1649年被處死，事件另外標記。\",\n    \"source\": \"https://www.english-heritage.org.uk/learn/histories/the-english-civil-wars-history-and-stories/the-english-civil-wars/\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"英國內戰\"\n  },\n  {\n    \"id\": \"we_charlesI_execution_1649\",\n    \"nameZh\": \"英王查理一世被處死\",\n    \"nameEn\": \"Execution of Charles I\",\n    \"start\": 1649,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1649年1月30日英格蘭國王查理一世因與議會衝突、經審判後在倫敦被公開處決，隨後英格蘭進入共和與護國公時期。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Execution_of_Charles_I\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"查理一世被處死\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_glorious_rev_1688\",\n    \"nameZh\": \"英國光榮革命\",\n    \"nameEn\": \"Glorious Revolution\",\n    \"start\": 1688,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\",\n      \"netherlands\"\n    ],\n    \"notes\": \"1688年荷蘭奧蘭治親王威廉率軍登陸英格蘭，詹姆士二世逃亡；議會邀請威廉與瑪麗接受王位，1689年權利法案形成更明確的君權限制。\",\n    \"source\": \"https://www.parliament.uk/about/living-heritage/evolutionofparliament/parliamentaryauthority/revolution/\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"光榮革命\",\n    \"featured\": true\n  },\n  {\n    \"id\": \"we_bill_rights_1689\",\n    \"nameZh\": \"英國《權利法案》\",\n    \"nameEn\": \"Bill of Rights 1689\",\n    \"start\": 1689,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1689年英格蘭議會通過《權利法案》，規定君主權力與議會權利之界線，與1688年光榮革命共同奠定議會君主制的重要制度基礎。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Bill_of_Rights_1689\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"《權利法案》\"\n  },\n  {\n    \"id\": \"we_british_global_1815\",\n    \"nameZh\": \"英國「日不落帝國」全球霸權時期\",\n    \"nameEn\": \"Pax Britannica\",\n    \"start\": 1815,\n    \"end\": 1914,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"「日不落帝國」是形容全球殖民範圍的修辭，並無明確建立之日；本圖以拿破崙戰爭後至第一次世界大戰前約1815–1914年的「不列顛治世」作為便於比較的時期，英國帝國版圖實際延續到20世紀。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Pax_Britannica\",\n    \"precision\": \"約\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"shortName\": \"日不落帝國\"\n  }\n];\n\n\n// v7.9: Turkey, constitutional texts, modern France/Germany, and unified world-war events.\nconst MODERN_WORLD_SEED=[\n  {\n    \"id\": \"hist_hittite_kingdom_empire\",\n    \"nameZh\": \"西臺王國與帝國\",\n    \"nameEn\": \"Hittite Kingdom and Empire\",\n    \"start\": -1650,\n    \"end\": -1180,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"turkey\",\n      \"west-asia\"\n    ],\n    \"notes\": \"西臺王國約在前17世紀形成，前14世紀起成為強大的新王國／帝國。這裡將約前1650至前1180年畫成西臺政治文化發展的綜合時段，帝國盛期並非始自前1650年。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Hittites\",\n    \"precision\": \"約\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"西臺王國／帝國\"\n  },\n  {\n    \"id\": \"hist_hittite_late_bronze_collapse\",\n    \"nameZh\": \"西臺帝國崩潰（青銅時代崩潰）\",\n    \"nameEn\": \"Collapse of the Hittite Empire\",\n    \"start\": -1200,\n    \"end\": -1180,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"turkey\",\n      \"west-asia\"\n    ],\n    \"notes\": \"西臺帝國在前1200年前後逐步崩潰，與青銅時代晚期東地中海的戰亂、饑荒、政經危機及所謂「海上民族」活動有關。不能確認「海上民族直接消滅西臺」，也不應將此事件直接等同特洛伊戰爭。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse\",\n    \"precision\": \"約\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"西臺帝國崩潰\"\n  },\n  {\n    \"id\": \"hist_ottoman_empire\",\n    \"nameZh\": \"鄂圖曼帝國\",\n    \"nameEn\": \"Ottoman Empire\",\n    \"start\": 1299,\n    \"end\": 1922,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"turkey\",\n      \"west-asia\"\n    ],\n    \"notes\": \"傳統上以1299年奧斯曼一世政權形成為建國起點。帝國經歷歐亞非擴張，第一次世界大戰戰敗後逐步解體；1922年土耳其廢除蘇丹制，常作帝國終點。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Ottoman_Empire\",\n    \"precision\": \"約\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"鄂圖曼帝國\"\n  },\n  {\n    \"id\": \"hist_fall_constantinople_1453\",\n    \"nameZh\": \"君士坦丁堡陷落\",\n    \"nameEn\": \"Fall of Constantinople\",\n    \"start\": 1453,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"turkey\",\n      \"greece\",\n      \"italy\"\n    ],\n    \"notes\": \"1453年5月29日，鄂圖曼蘇丹穆罕默德二世攻陷君士坦丁堡，東羅馬帝國的首都失守，常用來標示拜占庭帝國的終結。與既有東羅馬帝國主軸1453年終點相互對照。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Fall_of_Constantinople\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"君士坦丁堡陷落\"\n  },\n  {\n    \"id\": \"hist_ottoman_dissolution\",\n    \"nameZh\": \"鄂圖曼帝國戰敗與解體\",\n    \"nameEn\": \"Dissolution of the Ottoman Empire\",\n    \"start\": 1918,\n    \"end\": 1922,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"turkey\",\n      \"west-asia\",\n      \"greece\",\n      \"uk\",\n      \"france\"\n    ],\n    \"notes\": \"1918年鄂圖曼帝國在第一次世界大戰中戰敗，隨後遭協約國占領並經歷土耳其獨立戰爭。1922年11月1日廢除蘇丹制，帝國政治制度終結；1923年共和國成立。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Dissolution_of_the_Ottoman_Empire\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"鄂圖曼解體\"\n  },\n  {\n    \"id\": \"hist_turkish_republic_1923\",\n    \"nameZh\": \"土耳其共和國建立\",\n    \"nameEn\": \"Proclamation of the Republic of Turkey\",\n    \"start\": 1923,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"turkey\"\n    ],\n    \"notes\": \"1923年10月29日宣布成立土耳其共和國，穆斯塔法・凱末爾出任首任總統。建國與改革是持續過程，不宜將全部世俗化措施視為1923年當年完成。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Proclamation_of_the_Republic_of_Turkey\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"土耳其共和國\"\n  },\n  {\n    \"id\": \"hist_ataturk_reforms\",\n    \"nameZh\": \"凱末爾世俗化與現代化改革\",\n    \"nameEn\": \"Atatürk reforms\",\n    \"start\": 1923,\n    \"end\": 1938,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"turkey\"\n    ],\n    \"notes\": \"凱末爾領導的共和國改革包含1924年廢除哈里發制、法律與教育制度世俗化、1928年字母改革等，並非單一年度的改革。這裡概括其建國至1938年逝世期間。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Atat%C3%BCrk%27s_reforms\",\n    \"precision\": \"約\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"凱末爾改革\"\n  },\n  {\n    \"id\": \"hist_hammurabi_code\",\n    \"nameZh\": \"《漢摩拉比法典》\",\n    \"nameEn\": \"Code of Hammurabi\",\n    \"start\": -1754,\n    \"end\": null,\n    \"type\": \"法典／文獻\",\n    \"regionIds\": [\n      \"west-asia\"\n    ],\n    \"notes\": \"古巴比倫王漢摩拉比在位晚期制定的法典石碑，通常概約標成前1754年；具體編年各學說有所差異。不是人類最早的法律文本。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Code_of_Hammurabi\",\n    \"precision\": \"約\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"漢摩拉比法典\"\n  },\n  {\n    \"id\": \"hist_justinian_corpus_529\",\n    \"nameZh\": \"《查士丁尼法典》與《民法大全》\",\n    \"nameEn\": \"Corpus Juris Civilis / Code of Justinian\",\n    \"start\": 529,\n    \"end\": 534,\n    \"type\": \"法典／文獻\",\n    \"regionIds\": [\n      \"turkey\",\n      \"italy\",\n      \"greece\"\n    ],\n    \"notes\": \"529年首次頒布《查士丁尼法典》，533年《學說彙纂》與《法學階梯》，534年修訂法典；此處以529–534年表示《民法大全》的核心編纂期。其法律傳統影響後世歐陸法系。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Corpus_Juris_Civilis\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"查士丁尼法典\"\n  },\n  {\n    \"id\": \"hist_tang_code_653\",\n    \"nameZh\": \"《唐律疏議》\",\n    \"nameEn\": \"Tang Code with Commentary\",\n    \"start\": 653,\n    \"end\": null,\n    \"type\": \"法典／文獻\",\n    \"regionIds\": [\n      \"china\"\n    ],\n    \"notes\": \"唐高宗永徽四年（653年）頒行《永徽律疏》，後稱《唐律疏議》，是研究中國及東亞傳統法制的重要文獻。\",\n    \"source\": \"https://zh.wikipedia.org/wiki/%E5%94%90%E5%BE%8B%E7%96%8F%E8%AD%B0\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"唐律疏議\"\n  },\n  {\n    \"id\": \"hist_us_declaration_1776\",\n    \"nameZh\": \"《美國獨立宣言》\",\n    \"nameEn\": \"United States Declaration of Independence\",\n    \"start\": 1776,\n    \"end\": null,\n    \"type\": \"法典／文獻\",\n    \"regionIds\": [\n      \"north-america\",\n      \"uk\"\n    ],\n    \"notes\": \"1776年7月4日大陸會議通過《獨立宣言》，宣告北美十三殖民地與英國分離；國家獨立仍須經歷獨立戰爭與外交承認。\",\n    \"source\": \"https://www.archives.gov/founding-docs/declaration\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"美國獨立宣言\"\n  },\n  {\n    \"id\": \"hist_us_constitution_1787\",\n    \"nameZh\": \"《美國憲法》制定\",\n    \"nameEn\": \"United States Constitution\",\n    \"start\": 1787,\n    \"end\": null,\n    \"type\": \"法典／文獻\",\n    \"regionIds\": [\n      \"north-america\"\n    ],\n    \"notes\": \"1787年9月17日在費城制憲會議簽署美國憲法；其制度於1789年開始運作。本時間軸只標制定年份1787，而非生效年份，也不是1987年。\",\n    \"source\": \"https://www.archives.gov/founding-docs/constitution\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"美國憲法\"\n  },\n  {\n    \"id\": \"hist_rights_man_1789\",\n    \"nameZh\": \"法國《人權與公民權宣言》\",\n    \"nameEn\": \"Declaration of the Rights of Man and of the Citizen\",\n    \"start\": 1789,\n    \"end\": null,\n    \"type\": \"法典／文獻\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1789年8月26日法國制憲國民議會通過《人權與公民權宣言》，成為法國大革命的重要政治文件。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Declaration_of_the_Rights_of_Man_and_of_the_Citizen\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"法國人權宣言\"\n  },\n  {\n    \"id\": \"hist_richelieu_1624\",\n    \"nameZh\": \"黎塞留樞機主政法國\",\n    \"nameEn\": \"Cardinal Richelieu as chief minister\",\n    \"start\": 1624,\n    \"end\": 1642,\n    \"type\": \"在位期間\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"黎塞留1624年至1642年間擔任路易十三的首席大臣，強化王權與中央集權，並以國家利益為考量涉入三十年戰爭。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Cardinal_Richelieu\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"黎塞留主政\"\n  },\n  {\n    \"id\": \"hist_first_french_empire_1804\",\n    \"nameZh\": \"法蘭西第一帝國（拿破崙）\",\n    \"nameEn\": \"First French Empire\",\n    \"start\": 1804,\n    \"end\": 1814,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1804年拿破崙稱帝至1814年首次退位的法蘭西第一帝國；1815年的百日王朝與滑鐵盧在原有時間軸另有獨立條目。\",\n    \"source\": \"https://en.wikipedia.org/wiki/First_French_Empire\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"拿破崙帝國\"\n  },\n  {\n    \"id\": \"hist_french_third_republic_1870\",\n    \"nameZh\": \"法國第三共和國\",\n    \"nameEn\": \"French Third Republic\",\n    \"start\": 1870,\n    \"end\": 1940,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1870年9月4日第二帝國在普法戰爭失敗後第三共和國宣告成立。1940年7月國民議會授予貝當全權，第三共和國的政治制度終結，維琪法國建立。\",\n    \"source\": \"https://en.wikipedia.org/wiki/French_Third_Republic\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"第三共和國\"\n  },\n  {\n    \"id\": \"hist_treaty_versailles_1919\",\n    \"nameZh\": \"《凡爾賽條約》\",\n    \"nameEn\": \"Treaty of Versailles\",\n    \"start\": 1919,\n    \"end\": null,\n    \"type\": \"條約\",\n    \"regionIds\": [\n      \"france\",\n      \"germany\",\n      \"uk\",\n      \"italy\",\n      \"north-america\",\n      \"japan\"\n    ],\n    \"notes\": \"1919年6月28日協約國與德國簽署《凡爾賽條約》，對德國領土、軍備、賠款等訂出規定。美國參與巴黎和會，但美國參議院沒有批准條約。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Treaty_of_Versailles\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"凡爾賽條約\"\n  },\n  {\n    \"id\": \"hist_munich_agreement_1938\",\n    \"nameZh\": \"《慕尼黑協定》\",\n    \"nameEn\": \"Munich Agreement\",\n    \"start\": 1938,\n    \"end\": null,\n    \"type\": \"條約\",\n    \"regionIds\": [\n      \"germany\",\n      \"uk\",\n      \"france\",\n      \"italy\",\n      \"czechia\"\n    ],\n    \"notes\": \"1938年9月29日至30日德國、英國、法國與義大利在未邀請捷克斯洛伐克代表參加的情況下達成協定，迫使其割讓蘇臺德地區。「捷克」在此標記為直接受影響方，而非締約談判方。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Munich_Agreement\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"慕尼黑協定\"\n  },\n  {\n    \"id\": \"hist_fall_france_1940\",\n    \"nameZh\": \"法國陷落\",\n    \"nameEn\": \"Fall of France\",\n    \"start\": 1940,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"france\",\n      \"germany\",\n      \"uk\",\n      \"italy\"\n    ],\n    \"notes\": \"1940年5月至6月，德軍攻勢使法軍潰敗，6月22日法德簽署停戰協定；法國第三共和國政治體制後於7月終結。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Battle_of_France\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"法國陷落\"\n  },\n  {\n    \"id\": \"hist_end_third_republic_1940\",\n    \"nameZh\": \"法國第三共和國終結\",\n    \"nameEn\": \"End of the French Third Republic\",\n    \"start\": 1940,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1940年7月10日法國國民議會投票授予貝當全權，導向維琪政權建立。這裡區分6月軍事上的法國陷落，以及7月第三共和國憲政體制的終結。\",\n    \"source\": \"https://en.wikipedia.org/wiki/French_Third_Republic\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"第三共和國終結\"\n  },\n  {\n    \"id\": \"hist_nazi_germany_1933\",\n    \"nameZh\": \"納粹德國時期\",\n    \"nameEn\": \"Nazi Germany\",\n    \"start\": 1933,\n    \"end\": 1945,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"1933年希特勒出任總理後納粹逐步建立一黨獨裁；1939年發動侵略引爆歐洲第二次世界大戰，1945年納粹政權戰敗瓦解。此處屬歷史事實編年，並非任何形式的讚揚。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Nazi_Germany\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"納粹德國\"\n  },\n  {\n    \"id\": \"hist_world_war_1\",\n    \"nameZh\": \"第一次世界大戰\",\n    \"nameEn\": \"World War I\",\n    \"start\": 1914,\n    \"end\": 1918,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"uk\",\n      \"france\",\n      \"germany\",\n      \"austria\",\n      \"italy\",\n      \"russia\",\n      \"turkey\",\n      \"belgium\",\n      \"czechia\",\n      \"serbia\",\n      \"romania\",\n      \"bulgaria\",\n      \"china\",\n      \"japan\",\n      \"india\",\n      \"north-america\",\n      \"oceania\",\n      \"egypt\",\n      \"west-asia\"\n    ],\n    \"notes\": \"1914–1918年第一次世界大戰，主要交戰陣營為協約國與同盟國；歐洲主要參戰或戰區包含英、法、德、奧匈、俄、義、比利時、巴爾幹等，此外還有鄂圖曼、日本、中國、美國、英屬印度、澳紐部隊及中東、埃及等戰區。地區勾選反映參戰或直接受到戰事影響，不代表每一地區當時皆為獨立國家或同一年參戰。\",\n    \"source\": \"https://en.wikipedia.org/wiki/World_War_I\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"第一次世界大戰\"\n  },\n  {\n    \"id\": \"hist_world_war_2\",\n    \"nameZh\": \"第二次世界大戰\",\n    \"nameEn\": \"World War II\",\n    \"start\": 1939,\n    \"end\": 1945,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"uk\",\n      \"france\",\n      \"germany\",\n      \"italy\",\n      \"austria\",\n      \"russia\",\n      \"czechia\",\n      \"poland\",\n      \"serbia\",\n      \"romania\",\n      \"bulgaria\",\n      \"greece\",\n      \"belgium\",\n      \"netherlands\",\n      \"china\",\n      \"japan\",\n      \"india\",\n      \"north-america\",\n      \"latin-america\",\n      \"oceania\",\n      \"egypt\",\n      \"west-asia\"\n    ],\n    \"notes\": \"1939–1945年第二次世界大戰，主要軸心國包含德、義、日；主要同盟國包含英、美、蘇、中、法等，另包括澳紐、英屬印度、波蘭、低地國家、巴爾幹等參戰或受占領地區；拉丁美洲標記巴西等參戰國。奧地利當時已併入納粹德國，並非獨立主要交戰國；西班牙和瑞典未勾選，土耳其直到1945年2月才宣戰，故不列為主要參戰區域。\",\n    \"source\": \"https://en.wikipedia.org/wiki/World_War_II\",\n    \"precision\": \"確定\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"第二次世界大戰\"\n  }\n];\n\n// v8.0 · Egypt political periods and 18 milestones of United States history.\nconst EGYPT_AMERICA_SEED=[\n  {\n    \"id\": \"eg_roman_rule\",\n    \"nameZh\": \"羅馬統治埃及\",\n    \"nameEn\": \"Roman Egypt\",\n    \"start\": -30,\n    \"end\": 395,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"egypt\",\n      \"italy\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://nmec.gov.eg/historical-timeline/\",\n    \"notes\": \"西元前30年屋大維兼併托勒密埃及後，埃及成為羅馬帝國行省。此處以395年東西宮廷分治作為銜接拜占庭段落的視覺界線，實際羅馬與東羅馬的制度具有連續性。\",\n    \"shortName\": \"羅馬統治\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"eg_byzantine_rule\",\n    \"nameZh\": \"拜占庭（東羅馬）統治埃及\",\n    \"nameEn\": \"Byzantine Egypt\",\n    \"start\": 395,\n    \"end\": 641,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"egypt\",\n      \"turkey\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://nmec.gov.eg/historical-timeline/\",\n    \"notes\": \"395–641年為便於和西羅馬／東羅馬分支比較的常用畫法。部分埃及史料將拜占庭／科普特時期上溯至330年或戴克里先統治時代；阿拉伯軍隊於639年開始入侵，約641–642年間取代東羅馬統治。\",\n    \"shortName\": \"東羅馬統治\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"eg_islamic_dynasties\",\n    \"nameZh\": \"埃及伊斯蘭王朝統治時期\",\n    \"nameEn\": \"Islamic dynasties in Egypt\",\n    \"start\": 641,\n    \"end\": 1517,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"egypt\",\n      \"west-asia\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://nmec.gov.eg/historical-timeline/\",\n    \"notes\": \"以7世紀阿拉伯／伊斯蘭征服為起點，後歷經正統、倭馬亞、阿拔斯、圖倫、法蒂瑪、阿尤布、馬穆魯克等王朝。1517年以鄂圖曼征服為下一個分期點；伊斯蘭文化與信仰並未於1517年終止。\",\n    \"shortName\": \"伊斯蘭王朝\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"eg_ottoman_direct\",\n    \"nameZh\": \"埃及鄂圖曼直接統治\",\n    \"nameEn\": \"Ottoman rule in Egypt\",\n    \"start\": 1517,\n    \"end\": 1805,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"egypt\",\n      \"turkey\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://egymonuments.gov.eg/en/historical-periods/ottoman-period\",\n    \"notes\": \"1517年塞利姆一世擊敗馬穆魯克、埃及納入鄂圖曼帝國。1798–1801年曾被法軍入侵占領，1805年穆罕默德阿里上台後高度自治；名義鄂圖曼宗主權延續至1914年。\",\n    \"shortName\": \"鄂圖曼統治\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"eg_muhammad_ali_dynasty\",\n    \"nameZh\": \"穆罕默德阿里王朝統治埃及\",\n    \"nameEn\": \"Muhammad Ali dynasty\",\n    \"start\": 1805,\n    \"end\": 1953,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"egypt\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://nmec.gov.eg/historical-timeline/\",\n    \"notes\": \"1805年穆罕默德阿里開始統治；王朝先後有總督、赫迪夫、蘇丹、國王等稱號，並與英國佔領、保護國及1922年後的埃及王國時期重疊。1953年埃及廢除君主制後終結。\",\n    \"shortName\": \"穆罕默德阿里王朝\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"eg_british_occupation\",\n    \"nameZh\": \"英國開始佔領埃及\",\n    \"nameEn\": \"British occupation of Egypt\",\n    \"start\": 1882,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"egypt\",\n      \"uk\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://en.wikipedia.org/wiki/History_of_Egypt_under_the_British\",\n    \"notes\": \"英軍1882年進入埃及，1882–1914年間雖名義上仍為鄂圖曼附屬的自治赫迪夫國，英國卻掌握實質控制；1914年正式宣布保護國，1922年承認埃及獨立但仍保有重要權力及駐軍。不是1882–1922年皆屬正式英國殖民地。\",\n    \"shortName\": \"英國佔領埃及\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"showPeriodCallout\": false\n  },\n  {\n    \"id\": \"eg_british_protectorate\",\n    \"nameZh\": \"英國宣布埃及為保護國\",\n    \"nameEn\": \"British protectorate over Egypt\",\n    \"start\": 1914,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"egypt\",\n      \"uk\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://en.wikipedia.org/wiki/Sultanate_of_Egypt\",\n    \"notes\": \"1914年12月英國正式宣布埃及為其保護國，與鄂圖曼帝國的法理關係終止；1922年2月英國單方面宣布承認埃及獨立，仍對蘇伊士運河、防務等保留權利。\",\n    \"shortName\": \"英國設保護國\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"showPeriodCallout\": false\n  },\n  {\n    \"id\": \"eg_suez_canal_open_1869\",\n    \"nameZh\": \"蘇伊士運河開通\",\n    \"nameEn\": \"Opening of the Suez Canal\",\n    \"start\": 1869,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"egypt\",\n      \"france\",\n      \"uk\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.suezcanal.gov.eg/English/About/SuezCanal/Pages/CanalHistory.aspx\",\n    \"notes\": \"1869年11月17日蘇伊士運河正式通航，連通地中海與紅海，大幅縮短歐亞海運航路；工程自1859年開挖。\",\n    \"shortName\": \"蘇伊士運河開通\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"eg_republic_1953\",\n    \"nameZh\": \"埃及廢除君主制並成立共和國\",\n    \"nameEn\": \"Abolition of the Egyptian monarchy and declaration of republic\",\n    \"start\": 1953,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"egypt\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://nmec.gov.eg/historical-timeline/\",\n    \"notes\": \"1953年6月18日埃及宣布廢除君主制，結束穆罕默德阿里王朝統治並成立共和國；1952年自由軍官革命為其前奏。\",\n    \"shortName\": \"埃及成立共和國\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"eg_british_withdrawal_1956\",\n    \"nameZh\": \"英軍撤離埃及完成\",\n    \"nameEn\": \"Final British troop withdrawal from Egypt\",\n    \"start\": 1956,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"egypt\",\n      \"uk\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://en.wikipedia.org/wiki/History_of_Egypt_under_the_British\",\n    \"notes\": \"依1954年英埃協議，最後一批英軍在1956年6月撤離蘇伊士運河區（常用日期6月18日）；同年10月至11月英法以蘇伊士危機再度軍事介入，因此「最後撤離」特指既有駐軍撤離完成。\",\n    \"shortName\": \"英軍撤離\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_boston_tea_1773\",\n    \"nameZh\": \"波士頓茶黨事件\",\n    \"nameEn\": \"Boston Tea Party\",\n    \"start\": 1773,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"usa\",\n      \"uk\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://home.nps.gov/articles/000/boston-tea-party-in-real-time.htm\",\n    \"notes\": \"1773年12月16日北美殖民者在波士頓港將東印度公司茶葉投入海中，抗議英國對殖民地課稅和貿易政策，成為美國革命前的重要事件。\",\n    \"shortName\": \"波士頓茶黨\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_louisiana_purchase_1803\",\n    \"nameZh\": \"路易斯安那購地\",\n    \"nameEn\": \"Louisiana Purchase\",\n    \"start\": 1803,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"usa\",\n      \"france\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.archives.gov/milestone-documents/louisiana-purchase-treaty\",\n    \"notes\": \"1803年4月30日美國與法國簽訂路易斯安那購地條約，以1500萬美元購得密西西比河以西廣闊土地，使當時美國國土面積大幅增加。\",\n    \"shortName\": \"路易斯安那購地\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_mexican_war_1846\",\n    \"nameZh\": \"美墨戰爭\",\n    \"nameEn\": \"Mexican–American War\",\n    \"start\": 1846,\n    \"end\": 1848,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"usa\",\n      \"mexico\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.whitehouse.gov/history/\",\n    \"notes\": \"1846–1848年美國與墨西哥因德克薩斯及邊界爭議爆發戰爭；瓜達盧佩—伊達爾戈條約使墨西哥割讓包括今日加州在內的大面積領土。\",\n    \"shortName\": \"美墨戰爭\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_gold_rush_1848\",\n    \"nameZh\": \"加州淘金熱\",\n    \"nameEn\": \"California Gold Rush\",\n    \"start\": 1848,\n    \"end\": 1855,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://www.nps.gov/cali/learn/historyculture/california-gold-rush.htm\",\n    \"notes\": \"1848年1月發現黃金，1849年起大規模移民湧入加州。常以1848–1855年作為淘金熱主要時段，對西部擴張、族群與原住民社會造成深遠影響。\",\n    \"shortName\": \"加州淘金熱\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_civil_war_1861\",\n    \"nameZh\": \"美國南北戰爭\",\n    \"nameEn\": \"American Civil War\",\n    \"start\": 1861,\n    \"end\": 1865,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/civil-war-and-reconstruction-1861-to-1877/\",\n    \"notes\": \"1861–1865年聯邦與南方邦聯交戰，核心爭議包括奴隸制度及各州退出聯邦問題；1865年邦聯敗亡，戰後展開重建。\",\n    \"shortName\": \"南北戰爭\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_emancipation_1863\",\n    \"nameZh\": \"林肯發布《解放奴隸宣言》\",\n    \"nameEn\": \"Emancipation Proclamation\",\n    \"start\": 1863,\n    \"end\": null,\n    \"type\": \"法典／文獻\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.archives.gov/milestone-documents/emancipation-proclamation\",\n    \"notes\": \"1863年1月1日《解放奴隸宣言》生效，適用於反叛州指定地區，並非立即解放美國所有奴隸；1865年第十三修正案廢除美國奴隸制度。\",\n    \"shortName\": \"解放奴隸宣言\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_gilded_age_1877\",\n    \"nameZh\": \"美國鍍金時代\",\n    \"nameEn\": \"Gilded Age\",\n    \"start\": 1877,\n    \"end\": 1900,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/rise-of-industrial-america-1876-to-1900/\",\n    \"notes\": \"常用約1870年代至1900年前後的歷史分期；本圖取重建時期結束的1877年至1900年，反映快速工業化、企業集中、財富不均及政治腐敗與改革呼聲。\",\n    \"shortName\": \"鍍金時代\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_great_depression_1929\",\n    \"nameZh\": \"經濟大蕭條\",\n    \"nameEn\": \"Great Depression\",\n    \"start\": 1929,\n    \"end\": 1939,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/great-depression-and-world-war-ii-1929-to-1945/\",\n    \"notes\": \"1929年股市崩盤後全球經濟陷入長期蕭條，美國出現高失業率與銀行危機。1939年前後為常見分期終點，但各國復甦時間並不一致。\",\n    \"shortName\": \"經濟大蕭條\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_new_deal_1933\",\n    \"nameZh\": \"羅斯福新政\",\n    \"nameEn\": \"New Deal\",\n    \"start\": 1933,\n    \"end\": 1939,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://en.wikipedia.org/wiki/New_Deal\",\n    \"notes\": \"1933年羅斯福總統上任後推動金融改革、公共工程、社會安全等政策，1930年代後期逐漸告一段落。新政與大蕭條同時存在，將以重疊的色帶標示。\",\n    \"shortName\": \"羅斯福新政\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_pearl_harbor_1941\",\n    \"nameZh\": \"珍珠港事件\",\n    \"nameEn\": \"Attack on Pearl Harbor\",\n    \"start\": 1941,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"usa\",\n      \"japan\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.nps.gov/perl/learn/historyculture/index.htm\",\n    \"notes\": \"1941年12月7日日本海軍突襲美國夏威夷珍珠港，促使美國於次日對日本宣戰，正式加入第二次世界大戰。\",\n    \"shortName\": \"珍珠港事件\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_cold_war_1947\",\n    \"nameZh\": \"冷戰\",\n    \"nameEn\": \"Cold War\",\n    \"start\": 1947,\n    \"end\": 1991,\n    \"type\": \"歷史時期\",\n    \"regionIds\": [\n      \"usa\",\n      \"russia\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://www.cfr.org/education/learn/timelines/history-us-foreign-policy\",\n    \"notes\": \"1947–1991年美國與蘇聯及各自盟國之間的全球性政治、軍事、意識形態競爭，並未爆發美蘇之間直接的全面戰爭；此處俄羅斯代表蘇聯主要地理與政治核心，不等於當時俄羅斯獨立國家。\",\n    \"shortName\": \"冷戰\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_korean_war_1950\",\n    \"nameZh\": \"韓戰\",\n    \"nameEn\": \"Korean War\",\n    \"start\": 1950,\n    \"end\": 1953,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"usa\",\n      \"korea\",\n      \"china\",\n      \"russia\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.cfr.org/education/learn/timelines/history-us-foreign-policy\",\n    \"notes\": \"1950年6月至1953年7月，北韓入侵南韓後，聯合國軍（以美軍為主）支持南韓，中國人民志願軍加入戰事，蘇聯提供支援；1953年停戰但未簽正式和平條約。\",\n    \"shortName\": \"韓戰\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_vietnam_war_1955\",\n    \"nameZh\": \"越戰\",\n    \"nameEn\": \"Vietnam War\",\n    \"start\": 1955,\n    \"end\": 1975,\n    \"type\": \"戰爭\",\n    \"regionIds\": [\n      \"usa\",\n      \"vietnam\",\n      \"china\",\n      \"russia\"\n    ],\n    \"precision\": \"約\",\n    \"source\": \"https://www.cfr.org/education/learn/resource-collections/contemporary-history-post-1945-introduction/essential-events-1945\",\n    \"notes\": \"常見廣義越戰分期為1955–1975年；美軍大規模地面作戰主要在1965年後，1973年巴黎協定後美軍撤離，1975年西貢陷落、越南統一進程加速。\",\n    \"shortName\": \"越戰\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_cuban_missile_1962\",\n    \"nameZh\": \"古巴飛彈危機\",\n    \"nameEn\": \"Cuban Missile Crisis\",\n    \"start\": 1962,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"usa\",\n      \"cuba\",\n      \"russia\",\n      \"turkey\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://history.state.gov/milestones/1961-1968/cuban-missile-crisis\",\n    \"notes\": \"1962年10月，美國發現蘇聯在古巴部署核飛彈後，美蘇對峙接近核戰；最終透過撤除古巴飛彈及秘密協商美國撤除土耳其飛彈等安排化解危機。\",\n    \"shortName\": \"古巴飛彈危機\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_king_dream_1963\",\n    \"nameZh\": \"金恩博士〈我有一個夢〉演說\",\n    \"nameEn\": \"I Have a Dream speech\",\n    \"start\": 1963,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.archives.gov/milestone-documents/official-program-for-the-march-on-washington\",\n    \"notes\": \"1963年8月28日馬丁・路德・金恩博士在華盛頓爭取工作與自由大遊行中發表〈我有一個夢〉演說，成為美國民權運動的重要象徵。\",\n    \"shortName\": \"我有一個夢\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_apollo11_1969\",\n    \"nameZh\": \"阿波羅11號登月\",\n    \"nameEn\": \"Apollo 11 Moon landing\",\n    \"start\": 1969,\n    \"end\": null,\n    \"type\": \"科技\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.nasa.gov/mission/apollo-11/\",\n    \"notes\": \"1969年7月20日阿波羅11號太空人阿姆斯壯與艾德林登上月球，成為人類首次載人登月任務，亦是冷戰太空競賽的重要成果。\",\n    \"shortName\": \"阿波羅11號\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_soviet_dissolution_1991\",\n    \"nameZh\": \"蘇聯解體\",\n    \"nameEn\": \"Dissolution of the Soviet Union\",\n    \"start\": 1991,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"russia\",\n      \"usa\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://history.state.gov/milestones/1989-1992/collapse-soviet-union\",\n    \"notes\": \"1991年12月蘇聯解體，成為冷戰結束的標誌。蘇聯不是今日俄羅斯的同義詞，俄羅斯聯邦是其主要繼承國之一；美國亦受國際政治格局轉變深刻影響。\",\n    \"shortName\": \"蘇聯解體\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_911_2001\",\n    \"nameZh\": \"九一一恐怖攻擊\",\n    \"nameEn\": \"September 11 attacks\",\n    \"start\": 2001,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"precision\": \"確定\",\n    \"source\": \"https://www.911memorial.org/learn/about-911\",\n    \"notes\": \"2001年9月11日恐怖組織蓋達襲擊紐約世界貿易中心及華盛頓周邊，造成重大人員傷亡，深刻改變美國國安與外交政策。\",\n    \"shortName\": \"九一一事件\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  }\n];\n// v8.1 · Continuous republican government since 1953, not a claim that its present\n// official state name was used throughout the entire period.  The official name\n// Arab Republic of Egypt only dates from 1971.\nconst EGYPT_REPUBLIC_SEED={\n id:'eg_republic_era_1953',\n nameZh:'埃及共和國（現阿拉伯埃及共和國）',\n shortName:'埃及共和國',\n nameEn:'Republican Egypt (now Arab Republic of Egypt)',\n start:1953,end:null,ongoing:true,type:'歷史時期',\n regionIds:['egypt'],precision:'確定',\n source:'https://www.un.org/en/about-us/member-states/egypt',\n notes:'1953年6月18日正式廢除君主制、成立埃及共和國，承接1805–1953年穆罕默德阿里王朝。1958–1971年國號為「阿拉伯聯合共和國」（1958–1961年曾與敘利亞合組聯合國家）；1971年9月正式改稱「阿拉伯埃及共和國」。為便於閱讀，主軸將1953年至今的共和政體合併顯示，不表示1953年當時就已使用現行國名。',\n sourceType:'historical_reference',isSeed:true\n};\n\n// The earlier versions used a single \"north-america\" location. New installs use country-specific IDs.\nfor(const seed of [...WEST_EUROPE_HISTORY_SEED,...MODERN_WORLD_SEED]){\n if(seed.regionIds?.includes('north-america'))seed.regionIds=seed.regionIds.map(x=>x==='north-america'?'usa':x);\n if(seed.id==='hist_world_war_1')seed.regionIds=[...new Set([...seed.regionIds,'canada'])];\n if(seed.id==='hist_world_war_2')seed.regionIds=[...new Set([...seed.regionIds,'canada','mexico'])];\n}\n// v8.3: French and British historical periods and milestone events.\nconst FRANCE_BRITAIN_SEED=[\n  {\n    \"id\": \"fr_roman_gaul_52bce\",\n    \"nameZh\": \"羅馬統治高盧（今法國地區）\",\n    \"shortName\": \"羅馬高盧\",\n    \"nameEn\": \"Roman Gaul\",\n    \"start\": -52,\n    \"end\": 486,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"羅馬自前58至前50年經由凱撒的高盧戰爭擴大控制，前52年阿萊西亞戰役常作為征服轉捩點。羅馬在高盧的權力於五世紀逐漸瓦解；486年蘇瓦松之戰後，最後的羅馬政權殘餘勢力結束。此色帶是大致分期，並不表示現今法國所有領土都被羅馬持續直接治理至486年。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Roman_Gaul\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"fr_capetian_dynasty_987\",\n    \"nameZh\": \"法國卡佩王朝（直系）\",\n    \"shortName\": \"卡佩王朝\",\n    \"nameEn\": \"Capetian dynasty (direct line)\",\n    \"start\": 987,\n    \"end\": 1328,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"987年于格・卡佩即位，開啟法國卡佩王朝直系統治；1328年查理四世去世後，王位轉由卡佩家族支系瓦盧瓦王朝承接。既有「于格・卡佩即位」事件另保留為起始年份標記。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Capetian_dynasty\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"fr_valois_dynasty_1328\",\n    \"nameZh\": \"法國瓦盧瓦王朝\",\n    \"shortName\": \"瓦盧瓦王朝\",\n    \"nameEn\": \"House of Valois\",\n    \"start\": 1328,\n    \"end\": 1589,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1328年腓力六世繼承法國王位，瓦盧瓦王朝開始。經歷百年戰爭、文藝復興與法國宗教戰爭。1589年亨利三世遇刺，王位由波旁王朝的亨利四世繼承。瓦盧瓦屬卡佩家族的支系。\",\n    \"source\": \"https://en.wikipedia.org/wiki/House_of_Valois\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"fr_avignon_papacy_1309\",\n    \"nameZh\": \"亞維儂教廷時期（阿維尼翁之囚）\",\n    \"shortName\": \"阿維尼翁之囚\",\n    \"nameEn\": \"Avignon Papacy\",\n    \"start\": 1309,\n    \"end\": 1377,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\",\n      \"italy\"\n    ],\n    \"notes\": \"1309年起教宗駐於亞維儂；1377年額我略十一世返回羅馬。慣稱「阿維尼翁之囚」，並非所有教宗均被實際囚禁。這與1378年起的西方教會大分裂是不同時期。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Avignon_Papacy\",\n    \"featured\": true,\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"fr_joan_of_arc_1429\",\n    \"nameZh\": \"聖女貞德（Joan of Arc）\",\n    \"shortName\": \"聖女貞德\",\n    \"nameEn\": \"Joan of Arc\",\n    \"start\": 1429,\n    \"end\": 1431,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\",\n      \"uk\"\n    ],\n    \"notes\": \"聖女貞德約1412年出生，1429年參與解圍奧爾良並促成查理七世加冕，成為百年戰爭的重要人物；1430年被俘，1431年在盧昂被處以火刑。此處標示其關鍵歷史活動1429–1431年，而非完整生卒年。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Joan_of_Arc\",\n    \"featured\": true,\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"fr_french_wars_religion_1562\",\n    \"nameZh\": \"法國胡格諾戰爭（宗教戰爭）\",\n    \"shortName\": \"胡格諾戰爭\",\n    \"nameEn\": \"French Wars of Religion\",\n    \"start\": 1562,\n    \"end\": 1598,\n    \"type\": \"戰爭\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1562至1598年間，法國天主教與胡格諾（加爾文宗新教徒）各派政治勢力爆發多次內戰；1589年波旁家族亨利四世繼位，1598年《南特敕令》成為重要收束節點。\",\n    \"source\": \"https://en.wikipedia.org/wiki/French_Wars_of_Religion\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"fr_st_bartholomew_1572\",\n    \"nameZh\": \"聖巴托羅謬日大屠殺\",\n    \"shortName\": \"聖巴托羅謬大屠殺\",\n    \"nameEn\": \"St. Bartholomew's Day massacre\",\n    \"start\": 1572,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"notes\": \"1572年8月24日前後，巴黎爆發對胡格諾新教徒的刺殺與屠殺，暴力迅速蔓延至法國其他城市，是法國宗教戰爭最惡名昭彰的重大事件之一。\",\n    \"source\": \"https://en.wikipedia.org/wiki/St._Bartholomew%27s_Day_massacre\",\n    \"featured\": true,\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"uk_norman_dynasty_1066\",\n    \"nameZh\": \"英格蘭諾曼王朝\",\n    \"shortName\": \"諾曼王朝\",\n    \"nameEn\": \"Norman dynasty of England\",\n    \"start\": 1066,\n    \"end\": 1154,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1066年威廉征服者取得英格蘭王位，諾曼王朝建立，1154年史蒂芬去世後王位轉由安茹的亨利二世繼承，開啟金雀花王朝。\",\n    \"source\": \"https://www.royal.uk/kings-and-queens-1066\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"uk_plantagenet_dynasty_1154\",\n    \"nameZh\": \"英格蘭金雀花王朝\",\n    \"shortName\": \"金雀花王朝\",\n    \"nameEn\": \"House of Plantagenet\",\n    \"start\": 1154,\n    \"end\": 1485,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1154年亨利二世即位至1485年理查三世戰死，王位由都鐸家族取得；涵蓋金雀花本支及其蘭開斯特、約克支系，1399年後王位繼承仍由金雀花後裔延續。\",\n    \"source\": \"https://en.wikipedia.org/wiki/House_of_Plantagenet\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"uk_stuart_first_1603\",\n    \"nameZh\": \"斯圖亞特王朝（前期）\",\n    \"shortName\": \"斯圖亞特\",\n    \"nameEn\": \"House of Stuart (first reign)\",\n    \"start\": 1603,\n    \"end\": 1649,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1603年蘇格蘭詹姆士六世繼承英格蘭王位為詹姆士一世，兩國共戴一君，但國家尚未正式合併。1649年查理一世被處死，英格蘭君主制中斷。\",\n    \"source\": \"https://www.royal.uk/stuarts\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"uk_interregnum_1649\",\n    \"nameZh\": \"英格蘭共和國與護國公時期\",\n    \"shortName\": \"共和／護國公\",\n    \"nameEn\": \"Interregnum (England)\",\n    \"start\": 1649,\n    \"end\": 1660,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1649年查理一世被處決後，英格蘭先後進入共和國（Commonwealth）與克倫威爾護國公時期；1660年查理二世復辟，君主制恢復。因此斯圖亞特王朝色帶不應連續穿越1649–1660年。\",\n    \"source\": \"https://www.royal.uk/united-kingdom-monarchs-1603-present\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"uk_stuart_restored_1660\",\n    \"nameZh\": \"斯圖亞特王朝（王政復辟）\",\n    \"shortName\": \"斯圖亞特\",\n    \"nameEn\": \"House of Stuart (Restoration)\",\n    \"start\": 1660,\n    \"end\": 1714,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1660年查理二世復辟至1714年安妮女王去世，斯圖亞特王朝再度統治。1688年光榮革命及1707年英格蘭與蘇格蘭議會合併成立大不列顛王國均發生在此期間。\",\n    \"source\": \"https://www.royal.uk/stuarts\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"uk_hanover_dynasty_1714\",\n    \"nameZh\": \"英國漢諾威王朝\",\n    \"shortName\": \"漢諾威\",\n    \"nameEn\": \"House of Hanover\",\n    \"start\": 1714,\n    \"end\": 1901,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1714年喬治一世依王位繼承法登上英國王位，漢諾威王朝開始；1901年維多利亞女王逝世後，由其子愛德華七世開啟薩克森－科堡－哥達王朝。\",\n    \"source\": \"https://en.wikipedia.org/wiki/House_of_Hanover\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"uk_saxe_coburg_1901\",\n    \"nameZh\": \"薩克森－科堡－哥達王朝\",\n    \"shortName\": \"薩克森科堡\",\n    \"nameEn\": \"House of Saxe-Coburg and Gotha\",\n    \"start\": 1901,\n    \"end\": 1917,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1901年愛德華七世即位，英國王室屬薩克森－科堡－哥達家族。第一次世界大戰期間，國王喬治五世於1917年將英國王室名稱改為「溫莎」。\",\n    \"source\": \"https://www.royal.uk/house-windsor\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"uk_windsor_1917\",\n    \"nameZh\": \"英國溫莎王朝\",\n    \"shortName\": \"溫莎王朝\",\n    \"nameEn\": \"House of Windsor\",\n    \"start\": 1917,\n    \"end\": null,\n    \"ongoing\": true,\n    \"type\": \"朝代\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"uk\"\n    ],\n    \"notes\": \"1917年喬治五世宣布將英國王室名稱由薩克森－科堡－哥達改為「溫莎」，至今延續；這是王室名稱變更，不是同年發生政權更替。\",\n    \"source\": \"https://www.royal.uk/house-windsor\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  }\n];\n\n// The British Empire's global influence is an event band rather than a ruling dynasty.\nconst empireSeed=WEST_EUROPE_HISTORY_SEED.find(e=>e.id==='we_british_global_1815');\nif(empireSeed)empireSeed.type='重大事件';\n\n\n// v8.7 · user-defined US periodization (9) and German political periods (4) + reunification.\nconst US_PERIOD_V87_IDS=new Set([\"us_era_early_colonial_1607\", \"us_era_revolution_founding_1763\", \"us_era_expansion_democracy_1800\", \"us_era_civil_war_reconstruction_1861\", \"us_era_gilded_progressive_1877\", \"us_era_worldwars_depression_1917\", \"us_era_coldwar_prosperity_1945\", \"us_era_conservatism_globalization_1980\", \"us_era_war_on_terror_polarization_2001\"]);\nconst US_EXISTING_MILESTONE_IDS=new Set([\"us_gold_rush_1848\", \"us_gilded_age_1877\", \"us_great_depression_1929\", \"us_new_deal_1933\", \"us_cold_war_1947\"]);\nconst HISTORY_V87_SEED=[\n  {\n    \"id\": \"us_era_early_colonial_1607\",\n    \"nameZh\": \"早期與殖民時期\",\n    \"shortName\": \"殖民早期\",\n    \"nameEn\": \"Early and Colonial America\",\n    \"start\": 1607,\n    \"end\": 1763,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"以1607年詹姆斯敦英國殖民據點建立為起點，至1763年七年戰爭後北美殖民地政治局勢轉變為止。這是方便學習的英屬北美分期；原住民族歷史及其他歐洲殖民活動遠早於1607年。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_era_revolution_founding_1763\",\n    \"nameZh\": \"革命與建國初期\",\n    \"shortName\": \"革命與建國\",\n    \"nameEn\": \"Revolution and Early Republic\",\n    \"start\": 1763,\n    \"end\": 1800,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"1763年後英國殖民政策與殖民地抗爭加劇，包含1776年獨立宣言、1787年憲法與早期聯邦政府的建立。1800年是為便於編排而採用的教學分界。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_era_expansion_democracy_1800\",\n    \"nameZh\": \"西進與民主轉型\",\n    \"shortName\": \"西進與民主\",\n    \"nameEn\": \"Westward Expansion and Democratization\",\n    \"start\": 1800,\n    \"end\": 1861,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"19世紀前半的領土西擴、傑克遜式民主、工業化與改革運動；民主參與主要擴展於白人男性，並伴隨原住民族被迫遷移與奴隸制度爭議。1861年內戰開始。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_era_civil_war_reconstruction_1861\",\n    \"nameZh\": \"南北內戰與重建\",\n    \"shortName\": \"內戰與重建\",\n    \"nameEn\": \"Civil War and Reconstruction\",\n    \"start\": 1861,\n    \"end\": 1877,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"1861–1865年南北戰爭，1865–1877年聯邦推動南方重建與憲政改革。該時期的種族與公民權衝突對之後歷史產生長遠影響。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_era_gilded_progressive_1877\",\n    \"nameZh\": \"鍍金與進步時代\",\n    \"shortName\": \"鍍金與進步\",\n    \"nameEn\": \"Gilded Age and Progressive Era\",\n    \"start\": 1877,\n    \"end\": 1917,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"約1877年至美國1917年參加第一次世界大戰，涵蓋鍍金時代的工業成長、財富集中，以及進步主義改革；各史學著作對分期起訖並不一致。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_era_worldwars_depression_1917\",\n    \"nameZh\": \"世界大戰與大蕭條\",\n    \"shortName\": \"大戰與蕭條\",\n    \"nameEn\": \"World Wars and the Great Depression\",\n    \"start\": 1917,\n    \"end\": 1945,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"美國1917年參加第一次世界大戰後，經歷1920年代、1929年經濟大蕭條、羅斯福新政及第二次世界大戰；美國1941年正式參戰，1945年戰爭結束。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_era_coldwar_prosperity_1945\",\n    \"nameZh\": \"冷戰與戰後繁榮\",\n    \"shortName\": \"冷戰與繁榮\",\n    \"nameEn\": \"Cold War and Postwar Prosperity\",\n    \"start\": 1945,\n    \"end\": 1980,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"戰後經濟成長、冷戰、美蘇對立、民權運動、韓戰、越戰與太空競賽。冷戰實際延續至1991年；1980年僅作為美國內政與經濟政策轉折的分期點。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_era_conservatism_globalization_1980\",\n    \"nameZh\": \"保守主義與全球化\",\n    \"shortName\": \"保守與全球化\",\n    \"nameEn\": \"Conservatism and Globalization\",\n    \"start\": 1980,\n    \"end\": 2001,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"涵蓋1980年代保守主義政治、冷戰晚期、1991年蘇聯解體、全球化與資訊產業蓬勃發展；2001年九一一事件為下一階段的代表性轉折。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"us_era_war_on_terror_polarization_2001\",\n    \"nameZh\": \"反恐戰爭與極化\",\n    \"shortName\": \"反恐與極化\",\n    \"nameEn\": \"War on Terror and Political Polarization\",\n    \"start\": 2001,\n    \"end\": null,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"usa\"\n    ],\n    \"notes\": \"2001年九一一事件後，美國展開反恐戰爭，伴隨長期的國內政治極化、金融危機及數位社群變遷。本分期持續至今，並非表示反恐作戰在所有時期皆持續。\",\n    \"source\": \"https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"ongoing\": true\n  },\n  {\n    \"id\": \"de_era_kingdom_prussia_1701\",\n    \"nameZh\": \"普魯士王國\",\n    \"shortName\": \"普魯士\",\n    \"nameEn\": \"Kingdom of Prussia\",\n    \"start\": 1701,\n    \"end\": 1918,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"1701年霍亨索倫統治者腓特烈一世在柯尼斯堡加冕為「在普魯士的國王」；1871年後普魯士仍作為德意志帝國的邦國存在，至1918年君主制度崩解。\",\n    \"source\": \"https://en.wikipedia.org/wiki/Kingdom_of_Prussia\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"de_era_german_empire_1871\",\n    \"nameZh\": \"德意志帝國\",\n    \"shortName\": \"德意志帝國\",\n    \"nameEn\": \"German Empire\",\n    \"start\": 1871,\n    \"end\": 1918,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"1871年1月18日在凡爾賽宮宣布成立的德意志帝國，為普魯士主導之聯邦制君主國，直到1918年德國革命與皇帝退位。與「普魯士王國」在1871–1918年間重疊，代表國家與邦國兩個不同層級。\",\n    \"source\": \"https://www.dhm.de/en/exhibitions/permanent-exhibition/the-german-empire-and-the-first-world-war/\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"de_era_federal_republic_1949\",\n    \"nameZh\": \"德意志聯邦共和國\",\n    \"shortName\": \"聯邦共和國\",\n    \"nameEn\": \"Federal Republic of Germany\",\n    \"start\": 1949,\n    \"end\": null,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"1949年成立於西部德國地區，史稱西德。1990年10月3日民主德國各邦依統一條約加入聯邦共和國，現今德國延續1949年建立的聯邦共和國法制。\",\n    \"source\": \"https://www.bundesregierung.de/breg-de/schwerpunkte/deutsche-einheit/die-einheit-ist-wirklichkeit-432814\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true,\n    \"ongoing\": true\n  },\n  {\n    \"id\": \"de_era_democratic_republic_1949\",\n    \"nameZh\": \"德意志民主共和國\",\n    \"shortName\": \"民主共和國\",\n    \"nameEn\": \"German Democratic Republic\",\n    \"start\": 1949,\n    \"end\": 1990,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"1949年於蘇聯占領區成立，史稱東德。1990年10月3日其邦加入德意志聯邦共和國，民主德國作為獨立國家不再存在。\",\n    \"source\": \"https://www.bundesregierung.de/breg-de/schwerpunkte/deutsche-einheit/die-einheit-ist-wirklichkeit-432814\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"de_reunification_1990\",\n    \"nameZh\": \"兩德統一\",\n    \"shortName\": \"兩德統一\",\n    \"nameEn\": \"German reunification\",\n    \"start\": 1990,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"germany\"\n    ],\n    \"notes\": \"1990年10月3日東德各邦依統一條約加入德意志聯邦共和國，標誌德國統一。此為單一年份重大事件，並非新建一個與1949年聯邦共和國無關的國家。\",\n    \"source\": \"https://www.bundesregierung.de/breg-de/schwerpunkte/deutsche-einheit/die-einheit-ist-wirklichkeit-432814\",\n    \"sourceType\": \"historical_reference\",\n    \"isSeed\": true\n  }\n];\n// Display these original 18-item US milestone records below the nine-period ribbon\n// even if their stored category is 歷史時期; no dates, titles or notes are changed.\nfor(const original of EGYPT_AMERICA_SEED){\n if(US_EXISTING_MILESTONE_IDS.has(original.id))original.timelineRole='event';\n}\n\n// v9.0 · simplified West Asian history; cross-region tags indicate historical impact,\n// not uninterrupted territorial control throughout a whole empire's lifespan.\nconst WEST_ASIA_V88_SEED=[\n  {\n    \"id\": \"wa_sumer_civilization\",\n    \"nameZh\": \"蘇美文明\",\n    \"shortName\": \"蘇美\",\n    \"nameEn\": \"Sumerian civilization\",\n    \"start\": -3500,\n    \"end\": -2000,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"mesopotamia\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/蘇美爾\",\n    \"notes\": \"約前3500至前2000年；以兩河流域南部的烏魯克、烏爾等城邦為核心。此處為文明總覽，不代表存在一個從頭到尾統一的蘇美王朝。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_old_babylonia\",\n    \"nameZh\": \"古巴比倫王國\",\n    \"shortName\": \"古巴比倫\",\n    \"nameEn\": \"Old Babylonian Empire\",\n    \"start\": -1894,\n    \"end\": -1595,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"mesopotamia\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/古巴比伦时期\",\n    \"notes\": \"依常見中期編年採前1894至前1595年；漢摩拉比時期強盛。年代依考古編年方案會有差異。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_assyrian_empire\",\n    \"nameZh\": \"亞述帝國\",\n    \"shortName\": \"亞述\",\n    \"nameEn\": \"Neo-Assyrian Empire\",\n    \"start\": -911,\n    \"end\": -609,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"mesopotamia\",\n      \"levant\",\n      \"turkey\",\n      \"egypt\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/新亚述帝国\",\n    \"notes\": \"這裡以新亞述帝國約前911至前609年作為「亞述」主軸，並非亞述文明全部歷史。對黎凡特、安那托利亞及部分埃及有不同時段的統治或軍事影響。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_neo_babylonia\",\n    \"nameZh\": \"新巴比倫帝國\",\n    \"shortName\": \"新巴比倫\",\n    \"nameEn\": \"Neo-Babylonian Empire\",\n    \"start\": -626,\n    \"end\": -539,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"mesopotamia\",\n      \"levant\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/新巴比倫王國\",\n    \"notes\": \"前626年建立，前539年遭阿契美尼德波斯征服；其與新亞述帝國有短暫重疊。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_hellenistic_period\",\n    \"nameZh\": \"希臘化時期（西亞）\",\n    \"shortName\": \"希臘化\",\n    \"nameEn\": \"Hellenistic period in Western Asia\",\n    \"start\": -330,\n    \"end\": -63,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"turkey\",\n      \"levant\",\n      \"mesopotamia\",\n      \"persia\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/希腊化时代\",\n    \"notes\": \"以亞歷山大征服波斯後到羅馬控制敘利亞附近的時代作概括分期；各地希臘化政權的實際存續不同，伊朗、兩河等地很早就有安息等勢力崛起，非單一政權統治整段期間。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_islam_emergence_610\",\n    \"nameZh\": \"伊斯蘭教的誕生\",\n    \"shortName\": \"伊斯蘭興起\",\n    \"shortName\": \"伊斯蘭教興起\",\n    \"nameEn\": \"Origin of Islam (Rise of Islam)\",\n    \"start\": 610,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"arabian-peninsula\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/伊斯蘭教歷史\",\n    \"notes\": \"約610年，穆罕默德開始在麥加宣示宗教啟示，通常以此作為伊斯蘭教興起的標記。622年遷徙麥地那（希吉拉）則是伊斯蘭曆元年；宗教形成是一段歷程，不是單一精確創立日。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_arab_caliphates\",\n    \"nameZh\": \"阿拉伯帝國（哈里發時代）\",\n    \"shortName\": \"阿拉伯帝國\",\n    \"nameEn\": \"Arab Caliphates (overview)\",\n    \"start\": 632,\n    \"end\": 1258,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"arabian-peninsula\",\n      \"levant\",\n      \"mesopotamia\",\n      \"persia\",\n      \"egypt\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/哈里發國\",\n    \"notes\": \"將632年後正統、倭馬亞、阿拔斯等哈里發政權合併為簡略主軸，至1258年蒙古攻陷巴格達作常用轉折；各王朝勢力範圍不同，也不是全程維持統一的阿拉伯帝國。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_seljuk_empire\",\n    \"nameZh\": \"塞爾柱突厥帝國\",\n    \"shortName\": \"塞爾柱\",\n    \"nameEn\": \"Great Seljuk Empire\",\n    \"start\": 1037,\n    \"end\": 1194,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"persia\",\n      \"mesopotamia\",\n      \"turkey\",\n      \"levant\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/塞尔柱帝国\",\n    \"notes\": \"採大塞爾柱帝國約1037至1194年總覽；安那托利亞的羅姆塞爾柱等繼承政權延續更久，後續需要可另補重大事件，不先細分。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_crusades_levant\",\n    \"nameZh\": \"十字軍東征（聖地戰役）\",\n    \"shortName\": \"十字軍東征\",\n    \"nameEn\": \"Crusades to the Holy Land\",\n    \"start\": 1096,\n    \"end\": 1291,\n    \"type\": \"戰爭\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\",\n      \"turkey\",\n      \"egypt\",\n      \"france\",\n      \"germany\",\n      \"italy\",\n      \"uk\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/十字軍東征\",\n    \"notes\": \"以1096年第一次十字軍出發至1291年阿卡陷落，概括以聖地／黎凡特為主的十字軍戰役；不是195年連續不停的單一戰爭，亦不涵蓋所有發生於歐洲境內的十字軍。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_mongol_khanates\",\n    \"nameZh\": \"蒙古汗國（總覽）\",\n    \"shortName\": \"蒙古汗國\",\n    \"nameEn\": \"Mongol Empire and successor khanates (overview)\",\n    \"start\": 1206,\n    \"end\": 1368,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"china\",\n      \"russia\",\n      \"persia\",\n      \"mesopotamia\",\n      \"turkey\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/蒙古帝国\",\n    \"notes\": \"依使用者需求先維持一個蒙古汗國總覽，不拆分伊兒汗、欽察等汗國；1206年成吉思汗建蒙古帝國，後來逐漸分裂，各汗國統治時間並不相同。1368年為元廷離開大都的重要節點，不代表所有蒙古後繼政權當年同時滅亡。未來可與中國元朝資料串接。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  },\n  {\n    \"id\": \"wa_post_wwi_modern\",\n    \"nameZh\": \"一戰後西亞國家形成\",\n    \"shortName\": \"戰後・現代西亞\",\n    \"nameEn\": \"Post-World War I state formation in Western Asia\",\n    \"start\": 1918,\n    \"end\": 1950,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"turkey\",\n      \"persia\",\n      \"mesopotamia\",\n      \"levant\",\n      \"arabian-peninsula\"\n    ],\n    \"source\": \"https://zh.wikipedia.org/wiki/中東現代史\",\n    \"notes\": \"以1918年至20世紀中葉作第一次世界大戰後西亞重組的概括時期。各地從帝國解體、託管制度到獨立建國的年份不同；不是另一個統一王朝，也不表示國家形成在1950年全部結束。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true\n  }\n];\nconst WEST_ASIA_REGION_OVERRIDES={\n  \"hist_hittite_kingdom_empire\": [\n    \"turkey\",\n    \"levant\"\n  ],\n  \"hist_hittite_late_bronze_collapse\": [\n    \"turkey\",\n    \"levant\"\n  ],\n  \"eg_kadesh\": [\n    \"egypt\",\n    \"turkey\",\n    \"levant\"\n  ],\n  \"hist_hammurabi_code\": [\n    \"mesopotamia\"\n  ],\n  \"ir_achaemenid\": [\n    \"persia\",\n    \"mesopotamia\",\n    \"levant\",\n    \"turkey\",\n    \"egypt\"\n  ],\n  \"ir_parthian\": [\n    \"persia\",\n    \"mesopotamia\",\n    \"turkey\"\n  ],\n  \"ir_sasanian\": [\n    \"persia\",\n    \"mesopotamia\",\n    \"turkey\",\n    \"levant\"\n  ],\n  \"gr_alexander_empire\": [\n    \"greece\",\n    \"persia\",\n    \"turkey\",\n    \"mesopotamia\",\n    \"levant\",\n    \"egypt\"\n  ],\n  \"al_conquer_egypt_332\": [\n    \"greece\",\n    \"egypt\",\n    \"levant\"\n  ],\n  \"al_achaemenid_defeat_330\": [\n    \"greece\",\n    \"persia\",\n    \"mesopotamia\"\n  ],\n  \"it_roman_empire\": [\n    \"italy\",\n    \"greece\",\n    \"turkey\",\n    \"levant\",\n    \"egypt\",\n    \"mesopotamia\"\n  ],\n  \"it_east_roman\": [\n    \"italy\",\n    \"greece\",\n    \"turkey\",\n    \"levant\",\n    \"egypt\"\n  ],\n  \"hist_ottoman_empire\": [\n    \"turkey\",\n    \"mesopotamia\",\n    \"levant\",\n    \"arabian-peninsula\",\n    \"egypt\",\n    \"greece\"\n  ],\n  \"hist_ottoman_dissolution\": [\n    \"turkey\",\n    \"mesopotamia\",\n    \"levant\",\n    \"arabian-peninsula\",\n    \"egypt\"\n  ],\n  \"eg_islamic_dynasties\": [\n    \"egypt\",\n    \"levant\"\n  ],\n  \"hist_world_war_1\": [\n    \"mesopotamia\",\n    \"levant\",\n    \"arabian-peninsula\",\n    \"persia\"\n  ],\n  \"hist_world_war_2\": [\n    \"mesopotamia\",\n    \"levant\",\n    \"persia\"\n  ],\n  \"eg_byzantine_rule\": [\n    \"egypt\",\n    \"turkey\"\n  ],\n  \"eg_ottoman_direct\": [\n    \"egypt\",\n    \"turkey\"\n  ]\n};\nconst WEST_ASIA_REGION_IDS=['turkey','persia','mesopotamia','levant','arabian-peninsula'];\nfunction normalizeWestAsiaRegions(dataset){\n const asia=dataset.continents.find(c=>c.id==='asia');\n if(asia){\n  asia.children=asia.children.filter(c=>c.id!=='west-asia');\n  const wanted=[['persia','伊朗／波斯'],['turkey','土耳其／安那托利亞'],['mesopotamia','兩河流域（伊拉克）'],['levant','黎凡特'],['arabian-peninsula','阿拉伯半島']];\n  for(const [id,label] of wanted){\n   const existing=asia.children.find(c=>c.id===id);\n   if(!existing)asia.children.push({id,name:label});\n   else if(id==='turkey'&&existing.name==='土耳其')existing.name=label;\n  }\n  const sortRank=new Map(wanted.map(([id],i)=>[id,i]));\n  const sorted=asia.children.filter(c=>sortRank.has(c.id)).sort((a,b)=>sortRank.get(a.id)-sortRank.get(b.id));\n  const place=asia.children.findIndex(c=>c.id==='persia');\n  asia.children=asia.children.filter(c=>!sortRank.has(c.id));\n  asia.children.splice(place<0?Math.min(5,asia.children.length):place,0,...sorted);\n }\n for(const event of dataset.events){\n  let ids=Array.isArray(event.regionIds)?event.regionIds:[];\n  const legacy=ids.includes('west-asia');\n  ids=ids.filter(id=>id!=='west-asia');\n  if(legacy && !WEST_ASIA_REGION_OVERRIDES[event.id]){\n   // Unknown user-authored item: preserve the original umbrella's coverage without guessing.\n   ids.push(...WEST_ASIA_REGION_IDS);\n   event.regionMigrationReview=true;\n  }\n  const additions=WEST_ASIA_REGION_OVERRIDES[event.id]||[];\n  event.regionIds=[...new Set([...ids,...additions])];\n }\n}\n\n\n// v9.0 — requested West Asian, European and French historical milestones; original Islam entry is renamed in place.\nconst HISTORY_V89_SEED=[\n  {\n    \"id\": \"wa_babylonian_exile_586\",\n    \"nameZh\": \"巴比倫之囚\",\n    \"nameEn\": \"Babylonian Captivity\",\n    \"start\": -586,\n    \"end\": -538,\n    \"type\": \"重大事件\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"levant\",\n      \"mesopotamia\"\n    ],\n    \"source\": \"https://www.britannica.com/event/Babylonian-Captivity\",\n    \"notes\": \"新巴比倫王尼布甲尼撒二世攻占耶路撒冷後，猶大菁英與居民分批被遷往巴比倫。首次重要流放發生在前597年，前586年聖殿被毀及更大規模流放；前539年波斯征服巴比倫，前538年居魯士允許流亡者返鄉。此處以主要流放期前586～前538年呈現。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"巴比倫之囚\"\n  },\n  {\n    \"id\": \"wa_christianity_emergence_30\",\n    \"nameZh\": \"基督教的誕生\",\n    \"nameEn\": \"Origins of Christianity\",\n    \"start\": 30,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://www.britannica.com/topic/Christianity\",\n    \"notes\": \"基督教源於西元1世紀羅馬統治下的猶太地區（今黎凡特）；耶穌去世後其追隨者逐步建立早期教會。以約西元30年作簡化標記，並非宗教有單一精確成立日，也不等於耶穌的出生年份。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"基督教興起\"\n  },\n  {\n    \"id\": \"wa_battle_talas_751\",\n    \"nameZh\": \"怛羅斯戰役\",\n    \"nameEn\": \"Battle of Talas\",\n    \"start\": 751,\n    \"end\": null,\n    \"type\": \"戰爭\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"china\",\n      \"mesopotamia\",\n      \"persia\"\n    ],\n    \"source\": \"https://en.wikipedia.org/wiki/Battle_of_Talas\",\n    \"notes\": \"751年唐朝將領高仙芝與阿拔斯王朝及其盟友在中亞怛羅斯河附近交戰，唐軍敗退；戰場約位於今吉爾吉斯及哈薩克交界一帶。因目前地區分類未另設「中亞」，這裡以唐朝、阿拔斯政權所屬區域作關聯標籤，而非表示戰事發生在伊朗或伊拉克境內。造紙術是否直接因該戰傳播仍有史學討論。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true,\n    \"shortName\": \"怛羅斯\"\n  },\n  {\n    \"id\": \"wa_seljuk_westward_islamization_960\",\n    \"nameZh\": \"塞爾柱突厥人西遷與改信伊斯蘭教\",\n    \"nameEn\": \"Seljuk Oghuz conversion to Islam and westward migration\",\n    \"start\": 960,\n    \"end\": 1055,\n    \"type\": \"重大事件\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"persia\",\n      \"mesopotamia\"\n    ],\n    \"source\": \"https://www.britannica.com/topic/Seljuq\",\n    \"notes\": \"約10世紀，來自中亞的烏古斯（Oghuz）突厥部落中，塞爾柱所屬群體逐步接受伊斯蘭教；11世紀勢力向呼羅珊、伊朗高原與巴格達推進，1055年圖格里勒進入巴格達。此為長期遷徙與改宗進程，不是單一日的事件；也不等同6–8世紀的「西突厥汗國」整體改信伊斯蘭教。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"突厥西遷與改宗\"\n  },\n  {\n    \"id\": \"wa_abbasid_baghdad_capital_762\",\n    \"nameZh\": \"阿拔斯王朝定都巴格達\",\n    \"nameEn\": \"Abbasid capital established in Baghdad\",\n    \"start\": 762,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"mesopotamia\"\n    ],\n    \"source\": \"https://www.khanacademy.org/humanities/art-islam/chronological-periods-islamic/islamic-art-medieval/a/the-founding-of-baghdad\",\n    \"notes\": \"762年，阿拔斯王朝哈里發曼蘇爾（al-Mansur）在底格里斯河畔興建巴格達圓城，逐步確立帝國政治中心。阿拔斯王朝成立於750年，建都巴格達不是其創建年份。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"阿拔斯定都\"\n  },\n  {\n    \"id\": \"wa_mongol_sack_baghdad_1258\",\n    \"nameZh\": \"蒙古攻陷巴格達\",\n    \"nameEn\": \"Mongol Siege of Baghdad\",\n    \"start\": 1258,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"mesopotamia\",\n      \"persia\"\n    ],\n    \"source\": \"https://en.wikipedia.org/wiki/Siege_of_Baghdad_(1258)\",\n    \"notes\": \"1258年旭烈兀率蒙古軍攻陷巴格達，阿拔斯王朝在巴格達的哈里發統治終結。這是兩河流域的重要轉折；不代表所有伊斯蘭政權在1258年同時消失，開羅的阿拔斯名義哈里發體系後來仍存在。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true,\n    \"shortName\": \"巴格達陷落\"\n  },\n  {\n    \"id\": \"wa_kingdom_jerusalem_1099\",\n    \"nameZh\": \"耶路撒冷王國\",\n    \"nameEn\": \"Kingdom of Jerusalem\",\n    \"start\": 1099,\n    \"end\": 1291,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://www.britannica.com/place/kingdom-of-Jerusalem\",\n    \"notes\": \"第一次十字軍於1099年攻取耶路撒冷後建立的拉丁十字軍王國。1187年薩拉丁奪回耶路撒冷城，但王國政權在沿海據點繼續存在，直到1291年阿卡陷落才結束。期間領土與實際首都曾多次變動。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"耶路撒冷王國\"\n  },\n  {\n    \"id\": \"wa_baldwin_iv_reign_1174\",\n    \"nameZh\": \"鮑德溫四世統治耶路撒冷王國\",\n    \"nameEn\": \"Reign of Baldwin IV of Jerusalem\",\n    \"start\": 1174,\n    \"end\": 1185,\n    \"type\": \"在位期間\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://en.wikipedia.org/wiki/Baldwin_IV_of_Jerusalem\",\n    \"notes\": \"耶路撒冷國王鮑德溫四世（Baldwin IV，俗稱「痲瘋國王」）於1174至1185年在位，面臨薩拉丁勢力擴張並曾於1177年蒙吉薩戰役獲勝；1185年病逝。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true,\n    \"shortName\": \"鮑德溫四世\"\n  },\n  {\n    \"id\": \"wa_saladin_jerusalem_1187\",\n    \"nameZh\": \"薩拉丁收復耶路撒冷\",\n    \"nameEn\": \"Saladin recaptures Jerusalem\",\n    \"start\": 1187,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\",\n      \"egypt\"\n    ],\n    \"source\": \"https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1187)\",\n    \"notes\": \"1187年薩拉丁在哈丁戰役擊敗十字軍主要軍力，並於10月2日重新奪回耶路撒冷城。這不是收復整個黎凡特所有十字軍據點；耶路撒冷王國後來仍以其他城市為中心存續。\",\n    \"sourceType\": \"wikipedia\",\n    \"isSeed\": true,\n    \"shortName\": \"薩拉丁收復聖城\"\n  },\n  {\n    \"id\": \"eu_black_death_1347\",\n    \"nameZh\": \"歐洲黑死病\",\n    \"nameEn\": \"Black Death in Europe\",\n    \"start\": 1347,\n    \"end\": 1353,\n    \"type\": \"重大事件\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"greece\",\n      \"italy\",\n      \"germany\",\n      \"france\",\n      \"austria\",\n      \"spain\",\n      \"uk\",\n      \"czechia\",\n      \"sweden\",\n      \"belgium\",\n      \"netherlands\",\n      \"poland\",\n      \"serbia\",\n      \"romania\",\n      \"bulgaria\"\n    ],\n    \"source\": \"https://www.encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/black-death\",\n    \"notes\": \"約1347至1353年鼠疫在歐洲廣泛流行，造成劇烈人口損失與社會經濟變化；實際流行年份和嚴重程度因各地而異，瘟疫同時波及西亞及北非。此處僅以「歐洲首波疫情」作主要時間軸範圍。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"黑死病\"\n  },\n  {\n    \"id\": \"fr_second_empire_1852\",\n    \"nameZh\": \"法蘭西第二帝國\",\n    \"nameEn\": \"Second French Empire\",\n    \"start\": 1852,\n    \"end\": 1870,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"source\": \"https://www.assemblee-nationale.fr/gouv_parl/regimes.asp\",\n    \"notes\": \"1852年拿破崙三世建立法蘭西第二帝國；1870年普法戰爭色當戰敗、皇帝被俘後帝制終結，接續第三共和國。與1804年拿破崙一世的第一帝國不同。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"第二帝國\"\n  },\n  {\n    \"id\": \"fr_normandy_landings_1944\",\n    \"nameZh\": \"諾曼第登陸（D-Day）\",\n    \"nameEn\": \"Normandy landings (D-Day)\",\n    \"start\": 1944,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\",\n      \"uk\",\n      \"usa\",\n      \"canada\",\n      \"germany\"\n    ],\n    \"source\": \"https://www.nationalww2museum.org/war/topics/d-day-and-normandy-campaign\",\n    \"notes\": \"1944年6月6日，盟軍在法國諾曼第展開大規模登陸，參與者包括美國、英國、加拿大及其他盟國部隊，目標是從西線解放德國占領下的西歐。時間軸僅精確至「年」，完整日期保存於此備註。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"諾曼第登陸\"\n  },\n  {\n    \"id\": \"fr_paris_liberation_1944\",\n    \"nameZh\": \"巴黎光復\",\n    \"nameEn\": \"Liberation of Paris\",\n    \"start\": 1944,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\",\n      \"usa\",\n      \"germany\"\n    ],\n    \"source\": \"https://www.defense.gouv.fr/actualites/25-aout-1944-paris-libere\",\n    \"notes\": \"1944年8月19日至25日巴黎抵抗力量起義，法國勒克萊爾第二裝甲師與美國第四步兵師等盟軍部隊進入巴黎；德軍於8月25日投降，巴黎光復。時間軸只顯示1944年，具體日期詳見備註。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"巴黎光復\"\n  },\n  {\n    \"id\": \"fr_fourth_republic_1946\",\n    \"nameZh\": \"法蘭西第四共和國\",\n    \"nameEn\": \"French Fourth Republic\",\n    \"start\": 1946,\n    \"end\": 1958,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"france\"\n    ],\n    \"source\": \"https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/quatrieme-republique\",\n    \"notes\": \"1946年10月27日第四共和國憲法公布施行；1958年第五共和國憲法通過、第四共和國體制告終。部分官方政治任期資料延至1959年總統交接，此處依通行憲政分期採1946至1958。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"第四共和國\"\n  }\n];\n\n\n// v9.0 — Levant: ancient Israel, Roman Judea, early Muslim period, mandate and independence.\nconst LEVANT_V90_SEED=[\n  {\n    \"id\": \"lv_united_kingdom_israel_1020\",\n    \"nameZh\": \"統一以色列王國（傳統記載）\",\n    \"nameEn\": \"United Monarchy of Israel (traditional chronology)\",\n    \"start\": -1020,\n    \"end\": -931,\n    \"type\": \"歷史時期\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://www.britannica.com/place/ancient-Israel\",\n    \"notes\": \"依《希伯來聖經》的傳統敘事，掃羅、大衛、所羅門先後統治一個聯合王國；所羅門去世後，傳統上約前930年分為北方以色列王國與南方猶大王國。統一王國的政治規模及史實程度是考古與史學爭論議題，這裡採傳統年代作對照，不視為無爭議的確定史實。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"統一以色列王國\"\n  },\n  {\n    \"id\": \"lv_david_reign_1010\",\n    \"nameZh\": \"大衛王在位\",\n    \"nameEn\": \"Reign of King David\",\n    \"start\": -1010,\n    \"end\": -970,\n    \"type\": \"在位期間\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://jewishvirtuallibrary.org/king-david\",\n    \"notes\": \"依傳統編年，大衛王約於前1010至前970年在位，與耶路撒冷作為政治中心的興起有關。文獻所述王國幅員與統治細節尚存考古學爭論；不同編年可相差數年。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"大衛王\"\n  },\n  {\n    \"id\": \"lv_solomon_reign_970\",\n    \"nameZh\": \"所羅門王在位\",\n    \"nameEn\": \"Reign of King Solomon\",\n    \"start\": -970,\n    \"end\": -931,\n    \"type\": \"在位期間\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://www.britannica.com/biography/Solomon\",\n    \"notes\": \"依傳統編年，所羅門王約前970至前931年在位。《列王紀》記載他興建耶路撒冷第一聖殿；關於其統治範圍及聖殿始建年代的考古證據與史料解讀仍有爭論。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"所羅門王\"\n  },\n  {\n    \"id\": \"lv_first_temple_960\",\n    \"nameZh\": \"所羅門興建第一聖殿（傳統記載）\",\n    \"nameEn\": \"Solomon’s First Temple (traditional dating)\",\n    \"start\": -960,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://www.biblegateway.com/resources/encyclopedia-of-the-bible/Jerusalem-Temple\",\n    \"notes\": \"據《列王紀》與《歷代志》，所羅門王在耶路撒冷興建第一聖殿。前960年左右是常用的傳統推定年代，並非經現代考古獨立確認的精確完工日期。第一聖殿傳統上在前586年新巴比倫攻陷耶路撒冷時毀壞。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"第一聖殿\"\n  },\n  {\n    \"id\": \"lv_rome_jerusalem_63bc\",\n    \"nameZh\": \"羅馬共和國征服耶路撒冷\",\n    \"nameEn\": \"Pompey captures Jerusalem\",\n    \"start\": -63,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://cojs.org/Judea_Under_Roman_Rule_-63_BCE-66_CE/\",\n    \"notes\": \"前63年，羅馬將領龐培攻佔耶路撒冷，猶太地進入羅馬勢力範圍；早期曾透過附庸王國間接控制，西元6年才開始作為猶太行省直接行政管理。此處是羅馬統治轉折節點，不表示猶太居民從此全部離開該地。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"羅馬征服聖城\"\n  },\n  {\n    \"id\": \"lv_herod_matthew_infants_4bc\",\n    \"nameZh\": \"希律王與《馬太福音》嬰孩事件\",\n    \"nameEn\": \"Herod and the infancy narrative in Matthew\",\n    \"start\": -4,\n    \"end\": null,\n    \"type\": \"宗教文獻記載\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://www.britannica.com/biography/Herod-king-of-Judaea\",\n    \"notes\": \"希律大帝約前37年至前4年統治猶太地，並在基督教形成前去世。《馬太福音》第二章記載他試圖殺害嬰兒耶穌、命令殺害伯利恆嬰孩；缺乏獨立同時代史料可確認事件真的發生。因此不可寫為「希律王迫害基督教」，年份僅是傳統故事的約略定位。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"希律與嬰孩事件\"\n  },\n  {\n    \"id\": \"lv_second_temple_destroyed_70\",\n    \"nameZh\": \"羅馬攻陷耶路撒冷與第二聖殿被毀\",\n    \"nameEn\": \"Destruction of the Second Temple\",\n    \"start\": 70,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://academic.oup.com/edited-volume/61673/chapter-abstract/548074399\",\n    \"notes\": \"西元66年爆發第一次猶太—羅馬戰爭；70年提圖斯率羅馬軍攻陷耶路撒冷，第二聖殿遭毀。造成大量死傷、奴役與流亡，對猶太教歷史影響深遠。但猶太離散社群此前已存在，且猶太居民也並非在70年全數離開本地。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"第二聖殿被毀\"\n  },\n  {\n    \"id\": \"lv_bar_kokhba_revolt_135\",\n    \"nameZh\": \"巴爾科赫巴起義失敗與猶太離散加劇\",\n    \"nameEn\": \"Bar Kokhba revolt and dispersal\",\n    \"start\": 132,\n    \"end\": 135,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://www.cambridge.org/core/books/abs/archaeology-of-the-holy-land/from-70-ce-to-the-barkokhba-revolt-132135136-ce/ECD07BCC94A112CA30E2B9B2C1C7F39B\",\n    \"notes\": \"132–135年間，猶太人反抗羅馬統治的巴爾科赫巴起義失敗，造成人口與聚落重大損失；羅馬改建耶路撒冷並限制猶太人進入。這加劇了既有的猶太離散，但不等同「羅馬使所有猶太人從此流亡」，當地仍持續存在猶太社群。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"巴爾科赫巴起義\"\n  },\n  {\n    \"id\": \"lv_muslim_capture_jerusalem_638\",\n    \"nameZh\": \"阿拉伯穆斯林征服耶路撒冷\",\n    \"nameEn\": \"Rashidun conquest of Jerusalem\",\n    \"start\": 638,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"約\",\n    \"regionIds\": [\n      \"levant\",\n      \"arabian-peninsula\"\n    ],\n    \"source\": \"https://academic.oup.com/edited-volume/61673/chapter-abstract/548074399\",\n    \"notes\": \"約637–638年，正統哈里發時期的阿拉伯穆斯林軍隊自東羅馬帝國取得耶路撒冷，傳統記載哈里發歐瑪接受城市投降。史料對投降年份有637或638年的差異，這裡用638年作標記。這是政治統治轉換，不代表居民立刻全部改宗伊斯蘭教。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"穆斯林征服聖城\"\n  },\n  {\n    \"id\": \"lv_british_take_jerusalem_1917\",\n    \"nameZh\": \"一戰英軍佔領耶路撒冷\",\n    \"nameEn\": \"British capture of Jerusalem in World War I\",\n    \"start\": 1917,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\",\n      \"uk\",\n      \"turkey\"\n    ],\n    \"source\": \"https://www.britannica.com/place/Palestine/The-British-mandate\",\n    \"notes\": \"1917年12月英軍從鄂圖曼帝國手中攻佔耶路撒冷。這屬第一次世界大戰的軍事佔領，不能直接視為國際聯盟託管制度已於1917年成立。同年11月英國發表《貝爾福宣言》，支持在巴勒斯坦建立猶太民族家園，但當地阿拉伯居民的政治前途成為重大爭議。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"英軍佔領聖城\"\n  },\n  {\n    \"id\": \"lv_british_mandate_palestine_1920\",\n    \"nameZh\": \"英國託管巴勒斯坦\",\n    \"nameEn\": \"British administration and Mandate for Palestine\",\n    \"start\": 1920,\n    \"end\": 1948,\n    \"type\": \"歷史時期\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\",\n      \"uk\"\n    ],\n    \"source\": \"https://www.britannica.com/place/Palestine/The-British-mandate\",\n    \"notes\": \"一戰後英國於1920年開始在巴勒斯坦實施文官統治；國際聯盟1922年批准託管文書，並於1923年正式生效；1948年5月英國統治終結。此處以1920–1948年概括英國文官治理至託管終止；1917年英軍佔領另列事件。此時期同時涵蓋猶太移民、阿拉伯巴勒斯坦民族運動及其間日益升高的衝突。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"英國託管巴勒斯坦\"\n  },\n  {\n    \"id\": \"lv_israel_independence_1948\",\n    \"nameZh\": \"以色列建國\",\n    \"nameEn\": \"Declaration of the State of Israel\",\n    \"start\": 1948,\n    \"end\": null,\n    \"type\": \"重大事件\",\n    \"precision\": \"確定\",\n    \"regionIds\": [\n      \"levant\"\n    ],\n    \"source\": \"https://www.britannica.com/place/Palestine/The-British-mandate\",\n    \"notes\": \"1948年5月14日，在英國託管即將結束之際，大衛·本-古里安宣布成立以色列國。同年爆發第一次阿以戰爭，造成廣泛人口流離失所，特別是大量巴勒斯坦阿拉伯人逃離或被逐離家園；建國與戰爭涉及不同民族的歷史記憶，應分別理解。時間軸僅顯示年份，完整日期見此備註。\",\n    \"sourceType\": \"reference\",\n    \"isSeed\": true,\n    \"shortName\": \"以色列建國\"\n  }\n];\n\n// v9.1 · Individual lifespans are historical annotations, NOT a dynasty/era bar.\n// Dates are approximate; no claim is made of an exact birth year for Jesus or Muhammad.\nconst RELIGIOUS_FIGURE_LIFESPAN_V91_SEED=[\n {id:'lv_jesus_lifespan_4bc_30',nameZh:'耶穌基督在世期間',shortName:'耶穌基督',nameEn:'Lifetime of Jesus of Nazareth',start:-4,end:30,type:'在世期間',source:'https://www.britannica.com/biography/Jesus-Christ',notes:'耶穌（拿撒勒人耶穌）的出生年代通常估計約西元前6至前4年，逝世時間約西元30年（另有約33年的研究估計）。時間軸為便於比較，以約前4年至西元30年畫出在世期間；出生與死亡均非可確定到單一年份的歷史日期。耶穌活動於羅馬統治下的猶太地區；基督教的形成與傳播是其去世前後逐步發展的歷史歷程，與既有「基督教的誕生」事件不同。',precision:'約',regionIds:['levant'],sourceType:'reference',isSeed:true},\n {id:'ar_muhammad_lifespan_570_632',nameZh:'先知穆罕默德在世期間',shortName:'先知穆罕默德',nameEn:'Lifetime of the Prophet Muhammad',start:570,end:632,type:'在世期間',source:'https://www.britannica.com/biography/Muhammad',notes:'先知穆罕默德一般記為約570年出生於麥加、632年卒於麥地那，出生年份並非完全確定；約610年開始傳達伊斯蘭教啟示，622年遷徙麥地那（希吉拉）。此條目標示人物一生，而既有約610年的「伊斯蘭教的誕生」是另一個宗教史事件，兩者不重複。',precision:'約',regionIds:['arabian-peninsula'],sourceType:'reference',isSeed:true}\n];\n\n\n// v9.2 · Only the missing history: two Hellenistic successor states,\n// Seljuk Anatolia, and two cross-cultural religious/diplomatic milestones.\nconst HISTORY_V92_SEED=[\n {id:'gr_hellenistic_macedon_323',nameZh:'馬其頓王國（希臘化時期）',shortName:'馬其頓王國',nameEn:'Kingdom of Macedon in the Hellenistic period',start:-323,end:-168,type:'歷史時期',precision:'約',regionIds:['greece'],source:'https://www.livius.org/articles/concept/diadochi/chronology-of-the-diadochi/',notes:'亞歷山大於前323年去世後，馬其頓本土仍有王國與繼業者政權延續。前277年起主要由安提柯王朝統治，前168年彼得那戰役後羅馬擊敗馬其頓。採前323至前168年作高中歷史簡化主線，並非同一王朝自始至終不變。',sourceType:'reference',isSeed:true},\n {id:'wa_seleucid_kingdom_312',nameZh:'塞琉古王國',shortName:'塞琉古王國',nameEn:'Seleucid Empire',start:-312,end:-63,type:'歷史時期',precision:'確定',regionIds:['mesopotamia','levant','persia','turkey'],source:'https://www.iranicaonline.org/articles/seleucid-empire/',notes:'前312年塞琉古一世奪取巴比倫，逐步建立希臘化帝國；西元前63年其在敘利亞的殘餘政權被羅馬併入。它與托勒密王國、馬其頓王國並稱亞歷山大死後三大希臘化繼業國。領土隨年代大幅縮小：伊朗及兩河流域部分地區較早被安息等政權取代，並非前312至前63年全程統治所列每個地區。',sourceType:'reference',isSeed:true},\n {id:'tr_seljuk_sultanate_rum_1077',nameZh:'塞爾柱土耳其（羅姆蘇丹國）',shortName:'塞爾柱土耳其',nameEn:'Sultanate of Rum (Seljuks of Anatolia)',start:1077,end:1308,type:'歷史時期',precision:'約',regionIds:['turkey'],source:'https://en.wikipedia.org/wiki/Sultanate_of_Rum',notes:'羅姆蘇丹國約1077至1308年，是塞爾柱突厥人在安那托利亞建立的政權，先後以尼西亞、科尼亞等地為重心；與以伊朗、兩河流域為中心的大塞爾柱帝國（1037–1194）應予區分。鄂圖曼帝國自1299年興起，兩者短暫重疊並無矛盾。',sourceType:'reference',isSeed:true},\n {id:'ir_zoroaster_zoroastrianism_1000bc',nameZh:'先知瑣羅亞斯德傳播祆教（拜火教）',shortName:'瑣羅亞斯德與祆教',nameEn:'Zoroaster and the emergence of Zoroastrianism',start:-1000,end:null,type:'重大事件',precision:'約',regionIds:['persia'],source:'https://www.iranicaonline.org/articles/zoroaster-ii-general-survey/',notes:'瑣羅亞斯德（Zarathustra / Zoroaster）是祆教（瑣羅亞斯德教；俗稱「拜火教」）的先知。學界對其活動年代及地點爭論甚多，部分研究推定約前1000年或更早，另有前7至前6世紀等看法。一般認為與古代伊朗語文化圈，可能偏東伊朗／中亞相關，未能確定其活動於今日伊朗的某個地點。本時間軸只以「約前1000年」作視覺參考，不表示該年確切創教；火在此信仰具有神聖象徵，不宜理解為單純崇拜火焰。',sourceType:'reference',isSeed:true},\n {id:'cn_zhangqian_parthia_deputies_119bc',nameZh:'張騫遣副使出使安息',shortName:'張騫副使通安息',nameEn:'Zhang Qian sends deputy envoys to Parthia',start:-119,end:-115,type:'重大事件',precision:'約',regionIds:['china','persia'],source:'https://ctext.org/shiji/da-wan-lie-zhuan/zhs',notes:'漢武帝時張騫第二次出使西域，約前119年再赴烏孫，後派副使分赴安息（帕提亞）、大宛、大夏等地。《史記·大宛列傳》明載「騫因分遣副使……安息」；約前115年前後張騫返漢並推動中西交通。副使何年確切抵達安息難以確認，故以約前119–前115年概括外交往來，而非聲稱張騫本人到達安息。',sourceType:'reference',isSeed:true}\n];\n\n// v9.2 Cloud 1.6 — historically sourced East-West contact, Mongol khanates, and early Sino-Japanese exchange (21 events).\nconst HISTORY_V16_SEED=[{\"id\":\"cn_roman_daqin_embassy_166\",\"nameZh\":\"大秦（羅馬）「使者」抵達東漢朝廷\",\"nameEn\":\"Reported Roman embassy to the Eastern Han court\",\"start\":166,\"end\":null,\"type\":\"重大事件\",\"precision\":\"確定\",\"regionIds\":[\"china\",\"italy\"],\"source\":\"https://contents.nahf.or.kr/id/NAHF.jo.d_0003_0118_0110_0010\",\"notes\":\"《後漢書·西域傳》記載漢桓帝延熹九年（166），自稱大秦王「安敦」所遣者由日南（今越南中部一帶）進入漢境，向東漢朝廷獻象牙、犀角、玳瑁。東漢都城為洛陽，通常概括為大秦使者赴洛陽；原文沒有逐字寫明使者進城地點。其是否奉羅馬皇帝正式派遣並無確證，也可能是以大秦使者名義來訪的商人，故標題保留引號。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"大秦使者訪漢\"},{\"id\":\"it_marco_polo_yuan_china_1275_1291\",\"nameZh\":\"馬可波羅旅居元朝中國\",\"nameEn\":\"Marco Polo in Yuan China\",\"start\":1275,\"end\":1291,\"type\":\"文化\",\"precision\":\"約\",\"regionIds\":[\"china\",\"italy\"],\"source\":\"https://www.iranicaonline.org/articles/polo-marco/\",\"notes\":\"威尼斯旅行者馬可波羅與父親、叔父約1275年在元朝與忽必烈見面，之後長期居留、旅行。據《伊朗百科全書》，一行約1291年從泉州循海路離開中國，1295年回到威尼斯；通俗年表也有將離華年記為約1292年者。此處採1275至約1291年作在華時段，遊記中部分經歷仍有史學討論。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"馬可波羅在元朝\"},{\"id\":\"cn_ricci_macao_1582\",\"nameZh\":\"利瑪竇抵達澳門，後進入明朝內地\",\"nameEn\":\"Matteo Ricci arrives in Macau and enters Ming China\",\"start\":1582,\"end\":null,\"type\":\"重大事件\",\"precision\":\"確定\",\"regionIds\":[\"china\",\"italy\"],\"source\":\"https://www.icm.gov.mo/rc/viewer/20021/1041\",\"notes\":\"耶穌會傳教士利瑪竇於1582年8月抵達澳門，開始學習漢語；1583年9月獲准在廣東肇慶居留並展開內地傳教，1601年進入北京。區分「抵達澳門（1582）」與「進入中國內地（1583）」，是早期中西科技、宗教與文化交流的重要里程碑。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"利瑪竇來華\"},{\"id\":\"cn_schall_macao_1619\",\"nameZh\":\"湯若望抵達澳門，後赴明朝北京\",\"nameEn\":\"Johann Adam Schall von Bell arrives in Macau\",\"start\":1619,\"end\":null,\"type\":\"重大事件\",\"precision\":\"確定\",\"regionIds\":[\"china\",\"germany\"],\"source\":\"https://www.deutsche-biographie.de/sfz77938.html\",\"notes\":\"德國耶穌會傳教士、天文學家湯若望於1619年7月到達澳門，1622年秋進入中國內地，1623年1月抵達北京；1630年參與修曆工作，明末清初對曆法與天文知識交流影響深遠。不要把1619年「到澳門」誤記為「到北京」。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"湯若望來華\"},{\"id\":\"mn_western_campaign_central_asia_1219\",\"nameZh\":\"蒙古第一次西征：征服中亞花剌子模\",\"nameEn\":\"Mongol conquest of Khwarazm and Central Asia\",\"start\":1219,\"end\":1225,\"type\":\"戰爭\",\"precision\":\"約\",\"regionIds\":[\"mongolia\",\"central-asia\",\"persia\"],\"source\":\"https://openclass.kl.edu.tw/plan/file/4850/%E6%AD%B7%E5%8F%B2%E7%AC%AC%E4%B8%89%E8%AA%B2%E5%AE%8B%E5%85%83%E6%99%82%E6%9C%9F%E7%9A%84%E6%B0%91%E6%97%8F%E4%BA%92%E5%8B%95.pdf\",\"notes\":\"成吉思汗率軍西征花剌子模（約1219—1225），攻取河中、中亞諸城，兵鋒擴及今日烏茲別克、土庫曼、哈薩克南部及伊朗、阿富汗部分地區。不同史書對西征起迄年界定略異；不是整個中亞在每一年都受同一政權直接統治。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"蒙古西征中亞\"},{\"id\":\"mn_batu_campaign_eastern_europe_1236\",\"nameZh\":\"蒙古第二次西征：拔都進軍東歐\",\"nameEn\":\"Batu Khan campaigns in Eastern Europe\",\"start\":1236,\"end\":1242,\"type\":\"戰爭\",\"precision\":\"約\",\"regionIds\":[\"russia\",\"eastern-europe\",\"central-asia\"],\"source\":\"https://openclass.kl.edu.tw/plan/file/4850/%E6%AD%B7%E5%8F%B2%E7%AC%AC%E4%B8%89%E8%AA%B2%E5%AE%8B%E5%85%83%E6%99%82%E6%9C%9F%E7%9A%84%E6%B0%91%E6%97%8F%E4%BA%92%E5%8B%95.pdf\",\"notes\":\"窩闊臺在位時由拔都等率軍西征（約1236—1242），征服伏爾加河流域、羅斯諸公國與欽察草原，進入波蘭、匈牙利等東歐地區；後形成欽察汗國／金帳汗國的統治基礎。三次西征的年份在教材與研究中略有差異。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"蒙古西征東歐\"},{\"id\":\"mn_hulegu_campaign_west_asia_1253\",\"nameZh\":\"蒙古第三次西征：旭烈兀征服西亞\",\"nameEn\":\"Hulagu campaigns in Western Asia\",\"start\":1253,\"end\":1260,\"type\":\"戰爭\",\"precision\":\"約\",\"regionIds\":[\"persia\",\"mesopotamia\",\"levant\",\"turkey\"],\"source\":\"https://openclass.kl.edu.tw/plan/file/4850/%E6%AD%B7%E5%8F%B2%E7%AC%AC%E4%B8%89%E8%AA%B2%E5%AE%8B%E5%85%83%E6%99%82%E6%9C%9F%E7%9A%84%E6%B0%91%E6%97%8F%E4%BA%92%E5%8B%95.pdf\",\"notes\":\"蒙哥命旭烈兀西征，約1253—1260年進入波斯與兩河流域；1258年攻陷巴格達，阿拔斯王朝在巴格達的統治結束。蒙古軍隊隨後進入敘利亞，1260年於艾因札魯特遭馬木留克擊敗，擴張受阻，西亞以伊兒汗國為重要繼承政權。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"蒙古西征西亞\"},{\"id\":\"mn_ogedei_khanate_1225\",\"nameZh\":\"窩闊臺汗國\",\"nameEn\":\"Ögedei Khanate\",\"start\":1225,\"end\":1309,\"type\":\"歷史時期\",\"precision\":\"約\",\"regionIds\":[\"central-asia\",\"china\"],\"source\":\"https://catweb.ncl.edu.tw/class2007/96-3-1-700.pdf\",\"notes\":\"窩闊臺家族受封地約始於1225年，核心在阿爾泰山西側、葉密立河流域（今新疆北部及哈薩克東部一帶）；13世紀後半海都勢力崛起，1260年代後逐漸形成與元朝抗衡的獨立政治集團，約1309年為元朝與察合臺系勢力瓜分。1225是受封地開端，不表示1225年即已有固定國界的獨立汗國。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"窩闊臺\"},{\"id\":\"mn_chagatai_khanate_1225\",\"nameZh\":\"察合臺汗國（中亞主幹）\",\"nameEn\":\"Chagatai Khanate in Central Asia\",\"start\":1225,\"end\":1370,\"type\":\"歷史時期\",\"precision\":\"約\",\"regionIds\":[\"central-asia\",\"china\"],\"source\":\"https://dict.revised.moe.edu.tw/dictView.jsp?ID=121722&la=0&powerMode=0\",\"notes\":\"成吉思汗次子察合臺受封中亞地區，主要控制河中、七河流域及今日新疆一帶；13至14世紀疆域、權力中心多次變化，14世紀分為東西系。此條以1225至約1370年代表中亞西部主幹的發展脈絡，並非整個察合臺後裔政權在1370年全部滅亡；東察合臺系仍延續更久。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"察合臺\"},{\"id\":\"mn_golden_horde_1242\",\"nameZh\":\"欽察汗國（金帳汗國）\",\"nameEn\":\"Golden Horde / Kipchak Khanate\",\"start\":1242,\"end\":1502,\"type\":\"歷史時期\",\"precision\":\"約\",\"regionIds\":[\"russia\",\"eastern-europe\",\"central-asia\"],\"source\":\"https://catweb.ncl.edu.tw/class2007/96-3-1-700.pdf\",\"notes\":\"拔都西征後形成的朮赤家族汗國，版圖主要位於欽察草原、伏爾加河流域、黑海北岸及俄羅斯諸公國上層宗主權範圍，亦影響克里米亞與東歐。約13世紀中葉形成、15世紀逐漸分裂，通常以1502年大帳汗國覆滅作統治結束標誌；各附屬地實際統治期間不同。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"欽察（金帳）\"},{\"id\":\"mn_ilkhanate_1256\",\"nameZh\":\"伊兒汗國（波斯／西亞）\",\"nameEn\":\"Ilkhanate of Persia\",\"start\":1256,\"end\":1335,\"type\":\"歷史時期\",\"precision\":\"約\",\"regionIds\":[\"persia\",\"mesopotamia\",\"turkey\",\"levant\"],\"source\":\"https://catweb.ncl.edu.tw/class2007/96-3-1-700.pdf\",\"notes\":\"旭烈兀於1256年前後在波斯建立伊兒汗國，核心今伊朗、伊拉克、亞塞拜然及安那托利亞東部，勢力隨年代起伏；1258年攻陷巴格達是重要里程碑。1335年汗王阿布·賽義德逝世後，中央集權崩解，殘餘伊兒系政權尚有短期延續，故本圖以主要汗國時期至1335年表示。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"伊兒汗國\"},{\"id\":\"jp_wa_na_king_gold_seal_57\",\"nameZh\":\"漢光武帝賜倭奴國王「漢委奴國王」金印\",\"nameEn\":\"Han confers the King of Na gold seal\",\"start\":57,\"end\":null,\"type\":\"重大事件\",\"precision\":\"確定\",\"regionIds\":[\"china\",\"japan\"],\"source\":\"https://dict.revised.moe.edu.tw/dictView.jsp?ID=82134&la=0&powerMode=0\",\"notes\":\"《後漢書·東夷列傳》記載建武中元二年（57），倭奴國遣使東漢，光武帝賜予印綬；日本福岡志賀島1784年出土刻有「漢委奴國王」的金印，通常視為漢倭早期官方交往的重要物證。印文的「委」一般讀作倭，金印現藏福岡市博物館。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"漢委奴國王金印\"},{\"id\":\"jp_himiko_wei_envoy_238\",\"nameZh\":\"卑彌呼遣使曹魏，受封「親魏倭王」\",\"nameEn\":\"Himiko receives the Wei title Queen of Wa\",\"start\":238,\"end\":null,\"type\":\"重大事件\",\"precision\":\"確定\",\"regionIds\":[\"japan\",\"china\"],\"source\":\"https://ctext.org/text.pl?if=gb&node=603372\",\"notes\":\"《三國志·魏書·倭人傳》記載景初二年（238），邪馬臺國女王卑彌呼遣難升米等經帶方郡赴魏都洛陽，魏明帝曹叡下詔封「親魏倭王」，賜金印紫綬等。部分後世記載作239年，本圖以《三國志》原文所載238年為主；賜物正式交付與使節返國另有時間差。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"卑彌呼通魏\"},{\"id\":\"jp_sui_sunrise_letter_607\",\"nameZh\":\"遣隋使國書：「日出處天子致書日沒處天子」\",\"nameEn\":\"Japanese letter to Emperor Yang of Sui\",\"start\":607,\"end\":null,\"type\":\"重大事件\",\"precision\":\"確定\",\"regionIds\":[\"japan\",\"china\"],\"source\":\"https://japanknowledge.com/introduction/keyword.html?i=1146\",\"notes\":\"607年倭國遣使隋朝，國書自稱「日出處天子，致書日沒處天子，無恙」；《隋書·倭國傳》記載隋煬帝對其以天子自稱感到不悅。使節一般與小野妹子連結，呈現7世紀日本試圖以較對等方式與中國王朝交往的外交姿態。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"日出處天子國書\"},{\"id\":\"jp_taika_reform_645\",\"nameZh\":\"日本大化改新開始\",\"nameEn\":\"Taika Reform begins in Japan\",\"start\":645,\"end\":null,\"type\":\"重大事件\",\"precision\":\"確定\",\"regionIds\":[\"japan\"],\"source\":\"https://repository.nabunken.go.jp/dspace/bitstream/11177/3923/1/AA12272648_1998_018_021.pdf\",\"notes\":\"645年中大兄皇子、中臣鎌足等發動乙巳之變，之後推動中央集權與土地、戶籍、官制改革；646年發布改新詔。它早於663年白江口之戰，因此白江口戰敗不是大化改新的起因；但戰敗後促進防務整備及後續律令制度發展。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"大化改新\"},{\"id\":\"jp_baekgang_battle_663\",\"nameZh\":\"白江口之戰：唐、新羅擊敗倭國與百濟復國軍\",\"nameEn\":\"Battle of Baekgang / Hakusukinoe\",\"start\":663,\"end\":null,\"type\":\"戰爭\",\"precision\":\"確定\",\"regionIds\":[\"japan\",\"korea\",\"china\"],\"source\":\"https://repository.nabunken.go.jp/dspace/bitstream/11177/3923/1/AA12272648_1998_018_021.pdf\",\"notes\":\"663年，倭國援助百濟復國勢力，在朝鮮半島白江口一帶與唐、新羅聯軍交戰而敗。戰後日本加強九州沿海防衛、城堡與軍事部署，並影響後續律令國家體制的整備。大化改新始於645年，不宜誤稱「663年才開始大化改新」。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"白江口之戰\"},{\"id\":\"jp_tang_envoys_630_894\",\"nameZh\":\"日本遣唐使與中日文化交流\",\"nameEn\":\"Japanese diplomatic missions to Tang China\",\"start\":630,\"end\":894,\"type\":\"文化\",\"precision\":\"確定\",\"regionIds\":[\"japan\",\"china\"],\"source\":\"https://kotobank.jp/word/%E9%81%A3%E5%94%90%E4%BD%BF-60954\",\"notes\":\"日本自630年派遣正式遣唐使赴唐，隨行留學生、學問僧傳入律令、佛教、典籍、藝術與都市制度。最後實際出航的遣唐使在838年；894年菅原道真建議停止新一次遣使計畫，傳統年表因此常用630—894年概括制度時段，並非每年都有使團或894年最後一次出航。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"遣唐使\"},{\"id\":\"jp_yuan_invasion_1274\",\"nameZh\":\"元朝第一次征日（文永之役）\",\"nameEn\":\"First Mongol-Yuan invasion of Japan\",\"start\":1274,\"end\":null,\"type\":\"戰爭\",\"precision\":\"確定\",\"regionIds\":[\"japan\",\"china\",\"korea\"],\"source\":\"https://www.archives.go.jp/about/activity/international/jp_mn50/english/ch01.html\",\"notes\":\"忽必烈命元、高麗聯軍於1274年攻擊對馬、壹岐及九州博多灣周邊，日本鎌倉幕府武士抵抗，遠征軍未能建立長期據點並撤退。當時海上遭遇風浪的細節仍有討論，不能把1274年與1281年都簡化為完全因颱風而失敗。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"文永之役\"},{\"id\":\"jp_yuan_invasion_1281\",\"nameZh\":\"元朝第二次征日（弘安之役），遭颱風重創\",\"nameEn\":\"Second Mongol-Yuan invasion and kamikaze storm\",\"start\":1281,\"end\":null,\"type\":\"戰爭\",\"precision\":\"確定\",\"regionIds\":[\"japan\",\"china\",\"korea\"],\"source\":\"https://www.archives.go.jp/about/activity/international/jp_mn50/english/ch01.html\",\"notes\":\"元軍於1281年再次攻日，日本沿海防壘與武士抗擊，加上大規模艦隊遭強烈風暴（一般視為颱風）重創，使第二次遠征失敗。後世稱護佑日本的「神風」，但不是唯一因素；應與1274年第一次征日分成兩筆。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"弘安之役與神風\"},{\"id\":\"cn_qi_jiguang_wokou_1559_1565\",\"nameZh\":\"戚繼光率戚家軍抗倭寇\",\"nameEn\":\"Qi Jiguang campaigns against wokou raiders\",\"start\":1559,\"end\":1565,\"type\":\"戰爭\",\"precision\":\"約\",\"regionIds\":[\"china\",\"japan\"],\"source\":\"https://www.dpm.org.cn/court/figure/104028.html\",\"notes\":\"明嘉靖年間，戚繼光約1559年編練戚家軍，1561年取得台州大捷，1562—1564年轉戰福建，與俞大猷、劉顯等協同打擊沿海倭寇；1565年前後仍有掃蕩。明代「倭寇」包含日本海上武裝、華人走私與其他海上勢力，不可一概視為日本國家正式軍隊。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"戚繼光抗倭\"},{\"id\":\"kr_imjin_war_1592_1598\",\"nameZh\":\"萬曆朝鮮之役：明、朝鮮抵抗日本侵朝\",\"nameEn\":\"Japanese invasions of Korea / Imjin War\",\"start\":1592,\"end\":1598,\"type\":\"戰爭\",\"precision\":\"確定\",\"regionIds\":[\"korea\",\"china\",\"japan\"],\"source\":\"https://academic.oup.com/edited-volume/61799/chapter-abstract/546328209\",\"notes\":\"豐臣秀吉於1592年發動侵朝戰爭（壬辰倭亂），明朝援軍與朝鮮陸海軍共同抵抗；1593年後停戰談判失敗，1597年日軍再侵。1598年豐臣秀吉病逝後日軍撤回，但戰爭結局也與朝鮮和明軍長期抗戰、補給困難及軍事挫折密切相關。此戰對中、日、朝三方造成重大影響。\",\"sourceType\":\"reference\",\"isSeed\":true,\"shortName\":\"萬曆朝鮮之役\"}];\n\nconst DEFAULT_DATA={version:19,continents:CONTINENTS.map(c=>({...c,children:c.children.map(a=>({id:a[0],name:a[1]}))})),events:[...SEED.map((r,i)=>({id:'cn_'+i,nameZh:r[0],nameEn:r[1],start:r[2],end:r[3],type:r[4],source:'https://zh.wikipedia.org/wiki/'+encodeURIComponent(r[5]),notes:r[6],precision:r[7],regionIds:['china'],sourceType:'wikipedia',isSeed:true})),...EGYPT_SEED,...EGYPT_EVENT_SEED,...PERSIAN_GREEK_SEED,...CLASSICAL_ROME_SEED,...ROMAN_MILESTONE_SEED,...WEST_EUROPE_HISTORY_SEED,...MODERN_WORLD_SEED,...EGYPT_AMERICA_SEED,EGYPT_REPUBLIC_SEED,...FRANCE_BRITAIN_SEED,...HISTORY_V87_SEED,...WEST_ASIA_V88_SEED,...HISTORY_V89_SEED,...LEVANT_V90_SEED,...RELIGIOUS_FIGURE_LIFESPAN_V91_SEED,...HISTORY_V92_SEED,...HISTORY_V16_SEED].filter(e=>e.id!=='wa_hellenistic_period')};\nnormalizeWestAsiaRegions(DEFAULT_DATA);\napplyHistoryRevisionsV92(DEFAULT_DATA,{addMissing:false});\nconst KEY='history-atlas-v1';\nconst DEFAULT_UI={view:'time',start:-3600,end:2026,zoom:'fit',timeScaleYears:200,selected:[],regionSelectionMode:'all',text:'',focus:'china',folded:[],centerYear:null};\nconst deepClone=obj=>JSON.parse(JSON.stringify(obj));\nlet data=deepClone(DEFAULT_DATA),ui=deepClone(DEFAULT_UI),wikiCandidates=[],toastTimer;\n// CLOUD: Supabase is authoritative. Never hydrate app data from localStorage.\n// For old downloaded HTMLs, the user exports JSON from that origin and imports once here.\nif(![500,200,100,50,20,10,5].includes(Number(ui.timeScaleYears)))ui.timeScaleYears=200;\n// Non-destructive legacy data migration: preserve existing edits, add v5 seeds, remove requested Exodus seed.\nfunction upgradeHistoryData(){\n const from=Number(data.version)||1;\n if(from>=5)return false;\n if(from<5){\n const africa=data.continents.find(c=>c.id==='africa');\n if(africa&&!africa.children.some(r=>r.id==='egypt'))africa.children.push({id:'egypt',name:'埃及'});\n if(from<4){\n  for(const seed of EGYPT_SEED){\n   const same=data.events.some(e=>e.id===seed.id||((e.nameZh||'').replace(/時期$/,'')===seed.nameZh.replace(/時期$/,'')&&e.regionIds?.includes('egypt')));\n   if(!same)data.events.push(deepClone(seed));\n  }\n  if(ui.start===-1650&&ui.end===1950)ui.start=-2800;\n }\n const knownAliases={\n  'eg_great_pyramid':['古夫金字塔','胡夫金字塔','吉薩大金字塔'],\n  'eg_hatshepsut':['哈特謝普蘇特'],\n  'eg_akhenaten_reform':['阿肯那頓宗教改革','阿肯那頓'],\n  'eg_tutankhamun':['圖坦卡門'],\n  'eg_kadesh':['卡迭石戰役','卡德士戰役','卡迭石'],\n  'eg_abu_simbel':['阿布辛貝']\n };\n for(const seed of EGYPT_EVENT_SEED){\n  const aliases=knownAliases[seed.id]||[];\n  const exists=data.events.some(e=>{\n   if(e.id===seed.id)return true;\n   if(!e.regionIds?.includes('egypt'))return false;\n   const title=(e.nameZh||'').trim();\n   return title===seed.nameZh||aliases.some(a=>title===a||title.startsWith(a+'（'));\n  });\n  if(!exists)data.events.push(deepClone(seed));\n }\n }\n // v5: keep original Persian region ID so existing assigned events are not orphaned.\n const asia=data.continents.find(c=>c.id==='asia');\n let persia=data.continents.flatMap(c=>c.children).find(r=>r.id==='persia');\n if(!persia && asia){persia={id:'persia',name:'伊朗／波斯'};asia.children.push(persia)}\n if(persia&&persia.name==='波斯')persia.name='伊朗／波斯';\n const europe=data.continents.find(c=>c.id==='europe');\n if(europe&&!data.continents.some(c=>c.children.some(r=>r.id==='greece')))europe.children.push({id:'greece',name:'希臘'});\n const oldCount=data.events.length;\n // This seeded Exodus event was explicitly removed by the user; do not remove unrelated user-created entries.\n data.events=data.events.filter(e=>e.id!=='eg_moses_exodus'&&!(e.isSeed&&/^(摩西出埃及)/.test(e.nameZh||'')));\n for(const seed of PERSIAN_GREEK_SEED){\n  const exists=data.events.some(e=>{\n    if(e.id===seed.id)return true;\n    if((e.nameZh||'').trim()!==seed.nameZh)return false;\n    return seed.regionIds.some(r=>e.regionIds?.includes(r));\n  });\n  if(!exists)data.events.push(deepClone(seed));\n }\n data.version=5;\n return true;\n}\nfunction upgradeHistoryDataV6(){\n const from=Number(data.version)||1;\n if(from>=6)return false;\n const eu=data.continents.find(c=>c.id==='europe');\n const as=data.continents.find(c=>c.id==='asia');\n if(eu){for(const [id,name] of [['greece','希臘'],['italy','義大利']]){\n  if(!data.continents.some(c=>c.children.some(r=>r.id===id)))eu.children.push({id,name});\n }}\n if(as&&!data.continents.some(c=>c.children.some(r=>r.id==='turkey')))as.children.push({id:'turkey',name:'土耳其'});\n for(const seed of CLASSICAL_ROME_SEED){\n  const exists=data.events.some(e=>e.id===seed.id||((e.nameZh||'').trim()===seed.nameZh&&seed.regionIds.some(id=>e.regionIds?.includes(id))));\n  if(!exists)data.events.push(deepClone(seed));\n }\n data.version=6;\n return true;\n}\n// One-time additive v7.5 migration: preserve user-created and user-edited records.\nfunction upgradeHistoryDataV7(){\n const from=Number(data.version)||1;\n if(from>=7)return false;\n const eu=data.continents.find(c=>c.id==='europe');\n const af=data.continents.find(c=>c.id==='africa');\n const as=data.continents.find(c=>c.id==='asia');\n const ensure=(parent,id,name)=>{\n  if(parent&&!data.continents.some(c=>c.children.some(r=>r.id===id)))parent.children.push({id,name});\n };\n ensure(eu,'italy','義大利');ensure(eu,'france','法國');ensure(eu,'uk','英國');\n ensure(af,'egypt','埃及');ensure(as,'turkey','土耳其');\n for(const seed of ROMAN_MILESTONE_SEED){\n  const aliases=ROMAN_MILESTONE_ALIASES[seed.id]||[];\n  const names=[seed.nameZh,...aliases];\n  const exists=data.events.some(e=>{\n   if(e.id===seed.id)return true;\n   const title=(e.nameZh||'').replace(/[（(].*?[）)]/g,'').trim();\n   return names.some(n=>n.replace(/[（(].*?[）)]/g,'').trim()===title)\n    && Math.abs((e.start??0)-seed.start)<=1\n    && seed.regionIds.some(id=>e.regionIds?.includes(id));\n  });\n  if(!exists)data.events.push(deepClone(seed));\n }\n data.version=7;\n return true;\n}\n// v7.8: add West-European records without resetting or overwriting any edited entry.\nfunction upgradeHistoryDataV8(){\n const from=Number(data.version)||1;\n if(from>=8)return false;\n const eu=data.continents.find(c=>c.id==='europe');\n const additions=[['czechia','捷克'],['sweden','瑞典'],['belgium','比利時'],['netherlands','荷蘭']];\n if(eu)for(const [id,name] of additions){\n  if(!data.continents.some(c=>c.children?.some(r=>r.id===id)))eu.children.push({id,name});\n }\n for(const seed of WEST_EUROPE_HISTORY_SEED){\n  const same=data.events.some(e=>e.id===seed.id||(e.nameZh?.trim()===seed.nameZh && Math.abs(e.start-seed.start)<=1 && seed.regionIds.some(id=>e.regionIds?.includes(id))));\n  if(!same)data.events.push(deepClone(seed));\n }\n data.version=8;\n return true;\n}\n// v7.9: additive import/migration, stable IDs, shared World War records, full French Third Republic span.\nfunction upgradeHistoryDataV9(){\n if((Number(data.version)||1)>=9)return false;\n const eu=data.continents.find(c=>c.id==='europe');\n const existing=id=>data.continents.some(c=>c.children?.some(r=>r.id===id));\n if(eu){\n  const cz=eu.children.find(r=>r.id==='czechia');\n  if(cz && cz.name==='捷克／波希米亞')cz.name='捷克';\n  if(!existing('czechia'))eu.children.push({id:'czechia',name:'捷克'});\n  for(const [id,name] of [['poland','波蘭'],['serbia','塞爾維亞'],['romania','羅馬尼亞'],['bulgaria','保加利亞']]){\n   if(!existing(id))eu.children.push({id,name});\n  }\n }\n const namesEq=(a,b)=>String(a||'').replace(/[\\s・·（）()《》\\[\\]]/g,'').trim()===String(b||'').replace(/[\\s・·（）()《》\\[\\]]/g,'').trim();\n for(const seed of MODERN_WORLD_SEED){\n  let prior=data.events.find(e=>e.id===seed.id);\n  if(!prior)prior=data.events.find(e=>namesEq(e.nameZh,seed.nameZh)&&Math.abs((e.start||0)-seed.start)<=1);\n  // Accept common manual aliases without adding duplicate timeline events.\n  if(!prior&&seed.id==='hist_first_french_empire_1804')prior=data.events.find(e=>/^(拿破崙帝國|法蘭西第一帝國)/.test(e.nameZh||'')&&e.start===1804);\n  if(!prior&&seed.id==='hist_french_third_republic_1870')prior=data.events.find(e=>/^(法國第三共和國建立|法國第三共和國)$/.test(e.nameZh||'')&&e.start===1870);\n  if(!prior&&seed.id==='hist_world_war_1')prior=data.events.find(e=>/^(第一次世界大戰|一戰)$/.test(e.nameZh||'')&&e.start===1914);\n  if(!prior&&seed.id==='hist_world_war_2')prior=data.events.find(e=>/^(第二次世界大戰|二戰)$/.test(e.nameZh||'')&&e.start===1939);\n  if(prior){\n   // User-requested region coverage: add missing participants but never strip manually selected ones.\n   if(['hist_world_war_1','hist_world_war_2'].includes(seed.id)){\n    prior.regionIds=[...new Set([...(prior.regionIds||[]),...seed.regionIds])];\n    if(prior.end==null)prior.end=seed.end;\n   }\n   if(seed.id==='hist_french_third_republic_1870'){\n    prior.nameZh='法國第三共和國';prior.type='歷史時期';prior.start=1870;prior.end=1940;\n    prior.regionIds=[...new Set([...(prior.regionIds||[]),'france'])];\n   }\n  }else data.events.push(deepClone(seed));\n }\n data.version=9;\n return true;\n}\n\n// v8.0 · non-destructive upgrade of country filters and new history entries.\nfunction upgradeHistoryDataV10(){\n if((Number(data.version)||1)>=10)return false;\n const am=data.continents.find(c=>c.id==='americas');\n const as=data.continents.find(c=>c.id==='asia');\n if(am){\n  am.children=am.children.filter(r=>r.id!=='north-america');\n  for(const [id,name] of [['usa','美國'],['mexico','墨西哥'],['canada','加拿大'],['cuba','古巴']]){\n   if(!am.children.some(r=>r.id===id))am.children.push({id,name});\n  }\n  const order=['usa','mexico','canada','latin-america','cuba'];\n  am.children.sort((a,b)=>{const ia=order.indexOf(a.id),ib=order.indexOf(b.id);return (ia<0?999:ia)-(ib<0?999:ib)});\n }\n if(as&&!as.children.some(r=>r.id==='vietnam'))as.children.push({id:'vietnam',name:'越南'});\n for(const e of data.events){\n  const ids=Array.isArray(e.regionIds)?e.regionIds:[];\n  // Legacy umbrella cannot identify a specific country. Existing milestones referred to the US;\n  // retain them under the US rather than leave an orphaned region tag.\n  e.regionIds=[...new Set(ids.map(id=>id==='north-america'?'usa':id))];\n  if(e.id==='hist_world_war_1')e.regionIds=[...new Set([...e.regionIds,'usa','canada'])];\n  if(e.id==='hist_world_war_2')e.regionIds=[...new Set([...e.regionIds,'usa','canada','mexico'])];\n }\n if(ui.selected?.includes('north-america'))ui.selected=ui.selected.map(x=>x==='north-america'?'usa':x);\n if(ui.focus==='north-america')ui.focus='usa';\n const normalized=s=>String(s||'').replace(/[\\s（）()《》・·]/g,'');\n for(const seed of EGYPT_AMERICA_SEED){\n  const same=data.events.some(e=>e.id===seed.id||(normalized(e.nameZh)===normalized(seed.nameZh)&&Math.abs(Number(e.start)-seed.start)<=1&&seed.regionIds.some(id=>e.regionIds?.includes(id))));\n  if(!same)data.events.push(deepClone(seed));\n }\n if(ui.start===-2800&&ui.end===1950&&!ui.selected?.length)ui.end=2026;\n data.version=10;\n return true;\n}\n\n// v8.1: British occupation and protectorate become year markers, not ruling\n// dynasties; extend Egypt's timeline with the ongoing republican government.\n// Only records bearing those seeded IDs are recategorized; notes and unrelated\n// user-created events are retained exactly as they were.\nfunction upgradeHistoryDataV11(){\n if((Number(data.version)||1)>=11)return false;\n const updates=[\n  {id:'eg_british_occupation',old:'英國佔領與實質統治埃及',name:'英國開始佔領埃及',year:1882,short:'英國佔領埃及'},\n  {id:'eg_british_protectorate',old:'英國正式保護國時期（埃及）',name:'英國宣布埃及為保護國',year:1914,short:'英國設保護國'}\n ];\n for(const update of updates){\n  const e=data.events.find(x=>x.id===update.id);\n  if(!e)continue; // Do not reinstate seed records the user deliberately removed.\n  if(e.nameZh===update.old)e.nameZh=update.name;\n  if(e.shortName==='英國佔領'||e.shortName==='英國保護國')e.shortName=update.short;\n  e.start=update.year;e.end=null;e.type='重大事件';\n  e.ongoing=false;e.showPeriodCallout=false;\n  delete e.candidateYears;delete e.temporalMode;\n }\n const aliases=['埃及共和國（現阿拉伯埃及共和國）','阿拉伯埃及共和國','埃及阿拉伯共和國','埃及共和國'];\n let republican=data.events.find(e=>e.id===EGYPT_REPUBLIC_SEED.id);\n if(!republican)republican=data.events.find(e=>e.start===1953&&e.regionIds?.includes('egypt')&&['朝代','歷史時期'].includes(e.type)&&aliases.includes(e.nameZh));\n if(republican){\n  republican.start=1953;republican.end=null;republican.ongoing=true;republican.type='歷史時期';\n }else data.events.push(deepClone(EGYPT_REPUBLIC_SEED));\n data.version=11;\n return true;\n}\n\n// v8.3 migration: preserve personal notes and added entries; augment missing seeds only.\nfunction upgradeHistoryDataV12(){\n if((Number(data.version)||1)>=12)return false;\n const normalized=s=>String(s||'').replace(/[\\s（()）・·－—\\-]/g,'').trim();\n for(const seed of FRANCE_BRITAIN_SEED){\n  let existing=data.events.find(e=>e.id===seed.id);\n  if(!existing)existing=data.events.find(e=>Math.abs(Number(e.start)-seed.start)<=1 &&\n    e.regionIds?.some(id=>seed.regionIds.includes(id)) &&\n    normalized(e.nameZh)===normalized(seed.nameZh));\n  if(!existing)data.events.push(deepClone(seed));\n  // If an existing custom record is found, leave its description, dates and selections untouched.\n }\n // A single existing seed is converted as requested; retain its original range and notes.\n for(const event of data.events){\n  if(event.id==='we_british_global_1815' || (event.isSeed&&event.start===1815&&/日不落帝國/.test(event.nameZh||''))){\n   event.type='重大事件';\n   event.showPeriodCallout=false;\n  }\n }\n data.version=12;\n return true;\n}\n\n\n// v8.7: Nine independent US chronology bands, four German state bands and one 1990 node.\n// Existing custom entries/notes survive unchanged. Existing US milestones keep their category\n// and historical content, but are rendered beneath the main period band as annotations.\nfunction upgradeHistoryDataV13(){\n if((Number(data.version)||1)>=13)return false;\n const normalized=s=>String(s||'').replace(/[\\s（()）・·－—\\-]/g,'').trim();\n for(const seed of HISTORY_V87_SEED){\n  const duplicate=data.events.some(e=>e.id===seed.id ||\n   (normalized(e.nameZh)===normalized(seed.nameZh) && Math.abs(Number(e.start)-seed.start)<=2 && e.regionIds?.some(id=>seed.regionIds.includes(id))));\n  if(!duplicate)data.events.push(deepClone(seed));\n }\n for(const event of data.events){\n  if(US_EXISTING_MILESTONE_IDS.has(event.id)){\n   // Only affects visual grouping; titles, years, notes, categories stay intact.\n   event.timelineRole='event';\n  }\n }\n data.version=13;return true;\n}\n\n\n// v9.0: keep users' self-authored notes and existing entries; add only simplified\n// periods and Crusades, then replace legacy umbrella region tags with five areas.\nfunction upgradeHistoryDataV14(){\n if((Number(data.version)||1)>=14)return false;\n normalizeWestAsiaRegions(data);\n for(const seed of WEST_ASIA_V88_SEED){\n  const exists=data.events.some(e=>e.id===seed.id ||\n   ((e.nameZh||'')===seed.nameZh && Math.abs(Number(e.start)-seed.start)<=2));\n  if(!exists)data.events.push(deepClone(seed));\n }\n if(Array.isArray(ui.selected)&&ui.selected.includes('west-asia')){\n  ui.selected=[...new Set([...ui.selected.filter(id=>id!=='west-asia'),...WEST_ASIA_REGION_IDS])];\n }\n if(ui.focus==='west-asia')ui.focus='mesopotamia';\n if(ui.start===-2800)ui.start=-3600;\n data.version=14;\n return true;\n}\n\n\n// v9.0: add requested markers without replacing personal notes/edits or creating duplicate Islam records.\n// The old seed is retitled only if it still bears the untouched default name.\nfunction upgradeHistoryDataV15(){\n if((Number(data.version)||1)>=15)return false;\n const islam=data.events.find(e=>e.id==='wa_islam_emergence_610');\n if(islam){\n  if(islam.nameZh==='伊斯蘭教興起'){\n   islam.nameZh='伊斯蘭教的誕生';\n   islam.shortName=islam.shortName||'伊斯蘭教興起';\n   if(islam.nameEn==='Rise of Islam')islam.nameEn='Origin of Islam (Rise of Islam)';\n   if(islam.notes==='約610年穆罕默德開始在麥加傳播宗教啟示；以宗教興起的起點作年份節點，不當作一個朝代。')\n    islam.notes='約610年，穆罕默德開始在麥加宣示宗教啟示，通常以此作為伊斯蘭教興起的標記。622年遷徙麥地那（希吉拉）則是伊斯蘭曆元年；宗教形成是一段歷程，不是單一精確創立日。';\n  }\n }else{\n  // A manual synonym already in the history is sufficient; do not re-create a second copy.\n  const alias=data.events.find(e=>e.start>=609&&e.start<=622&&/^(伊斯蘭教|伊斯蘭教)/.test(e.nameZh||'')&&/(誕生|興起|創立)/.test(e.nameZh||''));\n  if(!alias){\n   const canonical=DEFAULT_DATA.events.find(e=>e.id==='wa_islam_emergence_610');\n   if(canonical)data.events.push(deepClone(canonical));\n  }\n }\n const simplify=s=>String(s||'').normalize('NFKC').replace(/[\\s（()）・·－—\\-]/g,'').trim();\n const alternateNames={\n  wa_babylonian_exile_586:['巴比倫之囚','巴比倫流放'],\n  wa_christianity_emergence_30:['基督教誕生','基督教的誕生','基督教興起'],\n  wa_battle_talas_751:['怛羅斯戰役','怛邏斯戰役'],\n  wa_seljuk_westward_islamization_960:['突厥人西遷與改信伊斯蘭教','塞爾柱突厥人西遷與改宗伊斯蘭教'],\n  wa_abbasid_baghdad_capital_762:['阿拔斯王朝定都巴格達'],\n  wa_mongol_sack_baghdad_1258:['蒙古攻陷巴格達'],\n  wa_kingdom_jerusalem_1099:['耶路撒冷王國'],\n  wa_baldwin_iv_reign_1174:['鮑德溫四世統治耶路撒冷王國','鮑德溫四世在位'],\n  wa_saladin_jerusalem_1187:['薩拉丁收復聖地','薩拉丁收復耶路撒冷'],\n  eu_black_death_1347:['歐洲黑死病','黑死病'],\n  fr_second_empire_1852:['法蘭西第二帝國','法國第二帝國','第二帝國'],\n  fr_normandy_landings_1944:['諾曼第登陸','諾曼第登陸D-Day'],\n  fr_paris_liberation_1944:['巴黎光復'],\n  fr_fourth_republic_1946:['法蘭西第四共和國','法國第四共和國','第四共和國']\n };\n for(const seed of HISTORY_V89_SEED){\n  const aliases=[seed.nameZh,...(alternateNames[seed.id]||[])].map(simplify);\n  const exists=data.events.some(e=>e.id===seed.id||\n   (Math.abs(Number(e.start)-seed.start)<=2&&aliases.includes(simplify(e.nameZh))));\n  if(!exists)data.events.push(deepClone(seed));\n }\n data.version=15;\n return true;\n}\n\n\n// v9.0: preserve previously saved notes and regions; append the requested Levant historical\n// transitions and normalize older religious vocabulary in both seed and personal entries.\nfunction normalizeIslamicTermsV90(){\n let changed=false;\n for(const e of data.events){\n  for(const field of ['nameZh','shortName','notes']){\n   if(typeof e[field]!=='string')continue;\n   const old=e[field];\n   const next=old.replace(/\\u56de\\u6559\\u5f92/g,'穆斯林')\n     .replace(/伊斯蘭教（\\u56de\\u6559）/g,'伊斯蘭教')\n     .replace(/\\u56de\\u6559/g,'伊斯蘭教')\n     .replace(/伊斯蘭教（伊斯蘭教）/g,'伊斯蘭教');\n   if(next!==old){e[field]=next;changed=true;}\n  }\n }\n return changed;\n}\nfunction upgradeHistoryDataV16(){\n if((Number(data.version)||1)>=16)return false;\n const clean=s=>String(s||'').normalize('NFKC').replace(/[\\s（()）・·－—\\-]/g,'').trim();\n const aliases={\n  lv_united_kingdom_israel_1020:['以色列王國','統一以色列王國','以色列統一王國'],\n  lv_david_reign_1010:['大衛王在位','大衛王統治'],\n  lv_solomon_reign_970:['所羅門王在位','所羅門王統治'],\n  lv_first_temple_960:['第一聖殿','所羅門建立第一聖殿','所羅門聖殿建立'],\n  lv_rome_jerusalem_63bc:['羅馬征服耶路撒冷','羅馬統治猶太地'],\n  lv_herod_matthew_infants_4bc:['希律王與伯利恆嬰孩','希律王與嬰孩耶穌'],\n  lv_second_temple_destroyed_70:['第二聖殿被毀','羅馬人摧毀第二聖殿'],\n  lv_bar_kokhba_revolt_135:['巴爾科赫巴起義','第二次猶太起義'],\n  lv_muslim_capture_jerusalem_638:['阿拉伯征服耶路撒冷','穆斯林征服耶路撒冷'],\n  lv_british_take_jerusalem_1917:['英軍攻佔耶路撒冷','英國佔領耶路撒冷'],\n  lv_british_mandate_palestine_1920:['巴勒斯坦英國託管','英國託管巴勒斯坦'],\n  lv_israel_independence_1948:['以色列建國','以色列獨立']\n };\n for(const seed of LEVANT_V90_SEED){\n  const list=[seed.nameZh,...(aliases[seed.id]||[])].map(clean);\n  const exists=data.events.some(e=>e.id===seed.id||\n    (e.regionIds?.includes('levant')&&list.includes(clean(e.nameZh))&&\n      Math.abs(Number(e.start)-seed.start)<=7));\n  if(!exists)data.events.push(deepClone(seed));\n }\n data.version=16;\n return true;\n}\n\n// v9.1: Alexander remains one historical period, not a second event badge.\n// Append lifespans to old JSON/localStorage without overwriting custom notes or events.\nfunction upgradeHistoryDataV17(){\n if((Number(data.version)||1)>=17)return false;\n const alex=data.events.find(e=>e.id==='gr_alexander_empire');\n if(alex)alex.showPeriodCallout=false;\n const clean=s=>String(s||'').normalize('NFKC').replace(/[\\s（()）·・－—-]/g,'').trim();\n const aliases={\n  lv_jesus_lifespan_4bc_30:['耶穌基督在世期間','耶穌在世期間','耶穌基督生平','耶穌的一生'],\n  ar_muhammad_lifespan_570_632:['先知穆罕默德在世期間','穆罕默德在世期間','穆罕默德生平','先知穆罕默德的一生']\n };\n for(const seed of RELIGIOUS_FIGURE_LIFESPAN_V91_SEED){\n  const titles=(aliases[seed.id]||[seed.nameZh]).map(clean);\n  const already=data.events.some(e=>e.id===seed.id||(\n   e.regionIds?.some(id=>seed.regionIds.includes(id)) &&\n   Math.abs(Number(e.start)-seed.start)<=8 && e.end!=null &&\n   Math.abs(Number(e.end)-seed.end)<=6 && titles.includes(clean(e.nameZh))));\n  if(!already)data.events.push(deepClone(seed));\n }\n data.version=17;\n return true;\n}\n\n\n// v9.2 canonical revisions: edit seeded records by immutable IDs rather than re-create\n// them, and leave independently added personal records/notes alone.\nfunction applyHistoryRevisionsV92(target,{addMissing=true}={}){\n let changed=false;\n const records=target.events||[];\n const get=id=>records.find(e=>e.id===id);\n const regions=(id,remove=[],add=[])=>{\n  const e=get(id);if(!e)return;\n  const prev=Array.isArray(e.regionIds)?e.regionIds:[];\n  const next=[...new Set([...prev.filter(r=>!remove.includes(r)),...add])];\n  if(next.join('|')!==prev.join('|')){e.regionIds=next;changed=true;}\n };\n const rename=(id,fromNames,toName,fromShort,toShort)=>{\n  const e=get(id);if(!e)return;\n  if(fromNames.includes(e.nameZh)&&e.nameZh!==toName){e.nameZh=toName;changed=true;}\n  if(fromShort.includes(e.shortName)&&e.shortName!==toShort){e.shortName=toShort;changed=true;}\n };\n const addNote=(id,append)=>{\n  const e=get(id);if(!e||!e.isSeed)return;\n  const notes=String(e.notes||'');\n  if(!notes.includes(append)&&notes.length>30){e.notes=notes+' '+append;changed=true;}\n };\n // A Hellenistic *cultural* umbrella is not a fourth dynasty.\n const original=records.length;\n target.events=records.filter(e=>e.id!=='wa_hellenistic_period');\n if(target.events.length!==original)changed=true;\n // Roman governance in Egypt: only Egypt-specific regional eras remain on Egypt's lane.\n regions('it_roman_empire',['egypt']);\n regions('it_east_roman',['egypt']);\n regions('eg_roman_rule',['italy','turkey']);\n regions('eg_byzantine_rule',['italy','turkey']);\n // Achaemenid rule did cover large parts of Asia Minor. Parthian and Sasanian\n // control/contests at the frontier do NOT imply centuries-long Anatolian rule.\n regions('ir_achaemenid',[],['turkey']);\n regions('ir_parthian',['turkey']);\n regions('ir_sasanian',['turkey','levant']);\n // Split the Seljuks into Iranian-core Great Seljuks and Anatolian Sultanate of Rum.\n regions('wa_seljuk_empire',['turkey','levant'],['persia','mesopotamia']);\n rename('wa_seljuk_empire',['塞爾柱突厥帝國','大塞爾柱帝國'],'大塞爾柱帝國',['塞爾柱','大塞爾柱'],'大塞爾柱');\n // Rename existing Ottoman history instead of duplicating its timeline.\n rename('hist_ottoman_empire',['鄂圖曼帝國','鄂圖曼土耳其帝國'],'鄂圖曼土耳其帝國',['鄂圖曼','鄂圖曼帝國','鄂圖曼土耳其'],'鄂圖曼土耳其');\n addNote('ir_parthian','安息核心在伊朗與兩河流域；與羅馬長期爭奪亞美尼亞等邊境勢力，並不代表統治今日土耳其全境。');\n addNote('ir_sasanian','薩珊帝國核心在伊朗與兩河流域，與東羅馬在安那托利亞東部、黎凡特屢有戰爭；七世紀曾短暫占領埃及及黎凡特，但不視為全程統治。');\n addNote('wa_seljuk_empire','本圖區分大塞爾柱帝國（伊朗、兩河）與安那托利亞的羅姆塞爾柱蘇丹國，避免土耳其主線重複。');\n addNote('eg_byzantine_rule','約619–629年間薩珊波斯軍隊曾短暫占領埃及；此色帶採簡化分期，不代表東羅馬自始至終從未中斷統治。');\n addNote('eg_ptolemaic','此王朝與塞琉古王國及馬其頓王國並列為三大希臘化繼業國之一。');\n if(addMissing){\n  const compact=s=>String(s||'').normalize('NFKC').replace(/[\\s（）()·・－—-]/g,'');\n  for(const seed of HISTORY_V92_SEED){\n   const matches=target.events.some(e=>e.id===seed.id||(\n    compact(e.nameZh)===compact(seed.nameZh)&&Math.abs(Number(e.start)-seed.start)<=2&&\n    e.regionIds?.some(id=>seed.regionIds.includes(id))));\n   if(!matches){target.events.push(JSON.parse(JSON.stringify(seed)));changed=true;}\n  }\n }\n return changed;\n}\nfunction upgradeHistoryDataV18(){\n if((Number(data.version)||1)>=18)return false;\n applyHistoryRevisionsV92(data,{addMissing:true});\n data.version=18;\n return true;\n}\n\nif(normalizeIslamicTermsV90()|upgradeHistoryData()|upgradeHistoryDataV6()|upgradeHistoryDataV7()|upgradeHistoryDataV8()|upgradeHistoryDataV9()|upgradeHistoryDataV10()|upgradeHistoryDataV11()|upgradeHistoryDataV12()|upgradeHistoryDataV13()|upgradeHistoryDataV14()|upgradeHistoryDataV15()|upgradeHistoryDataV16()|upgradeHistoryDataV17()|upgradeHistoryDataV18()|normalizeIslamicTermsV90()){try{localStorage.setItem(KEY,JSON.stringify({...data,ui}))}catch(e){console.warn('無法儲存升級資料；請匯出備份',e)}}\n\nconst $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));\nconst esc=x=>String(x??'').replace(/[&<>\"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[ch]));\nconst safeUrl=u=>{try{let z=new URL(String(u));return z.protocol==='https:'||z.protocol==='http:'?z.href:''}catch{return ''}};\nconst isYear=x=>Number.isInteger(x)&&x!==0&&x>=-100000&&x<=100000;\nconst formatYear=(y,withNian=false)=>y<0?'前'+Math.abs(y)+(withNian?'年':''):'西元'+y+(withNian?'年':'');\nconst compactYear=y=>y<0?'前'+(-y):String(y);\nconst formatFocusYear=y=>y<0?'西元前 '+Math.abs(y)+' 年':'西元 '+y+' 年';\nfunction parseFocusYear(input){\n let t=String(input??'').normalize('NFKC').trim().replace(/[\\s，,]/g,'').replace(/年$/,'');\n let bc=/^(?:西元前|公元前|紀元前|前|BC|BCE)/i.test(t);\n t=t.replace(/^(?:西元前|公元前|紀元前|前|西元|公元|紀元|AD|CE|BCE|BC)/i,'');\n if(!/^[-+]?\\d{1,6}$/.test(t))return null;\n let year=Number(t);\n if(bc)year=-Math.abs(year);\n return isYear(year)?year:null;\n}\nconst effectiveEnd=e=>e.ongoing?Math.max(e.start,new Date().getFullYear()):(e.end??e.start);\nconst formatPeriod=e=>e.ongoing?((e.precision==='約'?'約':'')+compactYear(e.start)+' — 至今'):e.precision==='存疑'?(e.candidateYears?.length ? '年代假說：'+e.candidateYears.map(compactYear).join('／') : '年代存疑：'+compactYear(e.start)+(e.end!=null?'～'+compactYear(e.end):'')) : (e.precision==='約'?'約':'')+compactYear(e.start)+(e.end!=null&&e.end!==e.start?' — '+compactYear(e.end):'')+'年';\nconst astro=y=>y<0?y+1:y;const unAstro=y=>y<=0?y-1:y;\nconst findContinent=id=>data.continents.find(c=>c.id===id)||data.continents.find(c=>c.children.some(x=>x.id===id))||(HISTORY_EUROPE_GROUPS.some(g=>g.id===id)?data.continents.find(c=>c.id==='europe'):null);\n// These are presentation labels only. Never rewrite authoritative Supabase region IDs/names.\nconst HISTORY_ASIAN_REGION_LABELS=Object.freeze({persia:'伊朗／波斯',turkey:'土耳其／安那托利亞',mesopotamia:'伊拉克／兩河流域'});\nconst HISTORY_ASIAN_REGION_HINTS=Object.freeze({mesopotamia:'兩河流域以現今伊拉克為核心，亦包含敘利亞、土耳其部分地區；不等同現代國界。',turkey:'安那托利亞是歷史地理區域，與現代土耳其國界不完全相同。',persia:'波斯為歷史地理與文化稱呼，與現代伊朗並非所有時代都完全對應。'});\nconst nameFor=id=>{if(Object.prototype.hasOwnProperty.call(HISTORY_ASIAN_REGION_LABELS,id))return HISTORY_ASIAN_REGION_LABELS[id];let c=data.continents.find(c=>c.id===id);if(c)return c.name;for(let x of data.continents){let r=x.children.find(r=>r.id===id);if(r)return r.name}return HISTORY_EUROPE_GROUPS.find(g=>g.id===id)?.name||id};\nconst colorFor=e=>findContinent(e.regionIds?.[0])?.color||'#8fa69e';\nconst eraRegionShortName=id=>({turkey:'土耳其',mesopotamia:'兩河流域',persia:'伊朗／波斯','arabian-peninsula':'阿拉伯半島'}[id]||nameFor(id));\nfunction save(){if(historyReady&&historyOwner)historyScheduleCommit();}\nfunction notify(msg){const el=$('#toast');el.textContent=msg;el.classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.add('hidden'),3800)}\nfunction noRegionsSelected(){return !ui.selected.length&&ui.regionSelectionMode==='none'}\nfunction filtered(){const q=ui.text.trim().toLowerCase(),sel=ui.selected;\n return data.events.filter(e=>{\n  const valid=!noRegionsSelected()&&(!sel.length||sel.some(id=>e.regionIds.some(r=>historyRegionMatches(id,r))));\n  return valid&&(!q||[e.nameZh,e.nameEn,e.type,e.notes,...e.regionIds.map(nameFor)].join(' ').toLowerCase().includes(q));\n }).sort((a,b)=>a.start-b.start||(a.end??a.start)-(b.end??b.start));\n}\nfunction inWindow(e){return e.start<=ui.end&&effectiveEnd(e)>=ui.start}\nfunction toggleSelected(id){ui.selected=ui.selected.includes(id)?ui.selected.filter(a=>a!==id):[...ui.selected,id];ui.regionSelectionMode=ui.selected.length?'selected':'none';if(ui.view==='region')ui.focus=id;if(ui.selected.includes('egypt')&&ui.view==='time'&&ui.start>-2686)ui.start=-2800;if(window.innerWidth<=740){const side=document.querySelector('#regionSidebar');if(side)side.classList.remove('expanded');const toggle=document.querySelector('#mobileRegionToggle');if(toggle){toggle.setAttribute('aria-expanded','false');const arrow=toggle.querySelector('.mobile-region-arrow');if(arrow)arrow.textContent='展開 ▾'}}save();render()}\n// Europe macro-regions are view/filter aliases, NEVER database migrations.\nconst HISTORY_EUROPE_GROUPS=[\n {id:'uk',name:'英國',ids:['uk']},\n {id:'france',name:'法國',ids:['france']},\n {id:'germany',name:'德意志',ids:['germany']},\n {id:'italy',name:'義大利',ids:['italy']},\n {id:'spain',name:'西班牙',ids:['spain']},\n {id:'geo-lowlands',name:'低地國',ids:['netherlands','belgium']},\n {id:'geo-nordic',name:'北歐',ids:['sweden','norway','denmark','finland','iceland']},\n {id:'geo-central',name:'中歐',ids:['austria','czechia','poland','hungary','slovakia']},\n {id:'geo-eastern',name:'東歐',ids:['eastern-europe','estonia','latvia','lithuania','belarus','ukraine','moldova']},\n {id:'geo-balkans',name:'巴爾幹半島',ids:['greece','serbia','bosnia','romania','bulgaria','croatia','slovenia','montenegro','albania','north-macedonia','kosovo']}\n];\nconst HISTORY_GEO_HINTS={\n 'geo-lowlands':'荷蘭、比利時',\n 'geo-nordic':'瑞典、丹麥、挪威、芬蘭、冰島',\n 'geo-central':'奧地利、捷克、波蘭、匈牙利、斯洛伐克等中歐地區',\n 'geo-eastern':'波羅的海三國（愛沙尼亞、拉脫維亞、立陶宛）、白俄羅斯、烏克蘭、摩爾多瓦',\n 'geo-balkans':'塞爾維亞、波士尼亞、保加利亞、羅馬尼亞、希臘等巴爾幹地區'\n};\nfunction historyEuropeGroupForId(id){return HISTORY_EUROPE_GROUPS.find(g=>g.id===id||g.ids.includes(id))||null}\nfunction historyGeoLaneId(id){return historyEuropeGroupForId(id)?.id||id}\nfunction historyGeoDisplayName(id){return historyEuropeGroupForId(id)?.name||nameFor(id)}\nfunction historyGeoIsEuropeGroup(id){return HISTORY_EUROPE_GROUPS.some(g=>g.id===id)}\nfunction historyNormalizeGeoSelection(){\n const prev=Array.isArray(ui.selected)?ui.selected:[];\n const next=[...new Set(prev.map(historyGeoLaneId))];\n if(next.length!==prev.length||next.some((v,i)=>v!==prev[i]))ui.selected=next;\n}\nfunction historyRegionMatches(selectedId,regionId){\n if(selectedId===regionId)return true;\n const group=HISTORY_EUROPE_GROUPS.find(g=>g.id===selectedId);\n if(group)return group.ids.includes(regionId);\n const c=data.continents.find(c=>c.id===selectedId);\n if(c)return c.children.some(r=>r.id===regionId)||\n   (selectedId==='europe'&&HISTORY_EUROPE_GROUPS.some(g=>g.id===regionId||g.ids.includes(regionId)));\n const parent=findContinent(selectedId);\n return !!parent&&parent.id===regionId;\n}\nfunction historyEuropeRegionButton(g){\n const active=ui.selected.includes(g.id)||g.ids.some(id=>ui.selected.includes(id));\n return `<button type=\"button\" class=\"region-chip macro-chip ${active?'active':''}\" data-filter=\"${esc(g.id)}\" aria-pressed=\"${active}\" title=\"${esc(HISTORY_GEO_HINTS[g.id]||g.ids.filter(id=>data.continents.find(c=>c.id==='europe')?.children.some(r=>r.id===id)).map(nameFor).join('、')||g.name)}\">${esc(g.name)}</button>`;\n}\nfunction renderSidebar(){\n const n=$('#regionNav');\n n.innerHTML=data.continents.map(c=>{\n  const closed=ui.folded.includes(c.id);\n  let children=c.children.length?c.children.map(k=>`<button type=\"button\" class=\"region-chip ${ui.selected.includes(k.id)?'active':''}\" data-filter=\"${esc(k.id)}\" aria-pressed=\"${ui.selected.includes(k.id)}\" title=\"${esc(HISTORY_ASIAN_REGION_HINTS[k.id]||nameFor(k.id))}\">${esc(nameFor(k.id))}</button>`).join(''):'<span style=\"font-size:11px;color:#b2bcb6\">尚無子地區</span>';\n  if(c.id==='europe'){\n   const mapped=new Set(HISTORY_EUROPE_GROUPS.flatMap(g=>g.ids));\n   const extras=c.children.filter(k=>!mapped.has(k.id)).map(k=>`<button type=\"button\" class=\"region-chip ${ui.selected.includes(k.id)?'active':''}\" data-filter=\"${esc(k.id)}\">${esc(k.name)}</button>`).join('');\n   children=HISTORY_EUROPE_GROUPS.map(historyEuropeRegionButton).join('')+extras+\n    '<span class=\"geo-sidebar-note\">依歷史地理大區顯示；國家與古地名保留於事件詳情。</span>';\n  }\n  return `<div class=\"continent\"><div class=\"continent-top\"><button type=\"button\" class=\"fold\" data-fold=\"${esc(c.id)}\" aria-label=\"${closed?'展開':'收合'}${esc(c.name)}\">${closed?'▸':'▾'}</button><span class=\"dot\" style=\"background:${esc(c.color)}\"></span><button class=\"continent-name\" data-fold=\"${esc(c.id)}\" type=\"button\">${esc(c.name)}</button><button type=\"button\" data-filter=\"${esc(c.id)}\" class=\"select-continent ${ui.selected.includes(c.id)?'active':''}\">整洲</button></div><div class=\"region-items ${c.id==='europe'?'macro-region-items':''} ${closed?'hidden':''}\">${children}</div></div>`;\n }).join('');\n n.querySelectorAll('[data-filter]').forEach(el=>el.onclick=()=>toggleSelected(el.dataset.filter));\n n.querySelectorAll('[data-fold]').forEach(el=>el.onclick=()=>{const id=el.dataset.fold;ui.folded=ui.folded.includes(id)?ui.folded.filter(v=>v!==id):[...ui.folded,id];save();renderSidebar()});\n}\n\nfunction setQuickRegion(id){\n if(!data.continents.some(c=>c.children.some(r=>r.id===id)))return;\n ui.selected=ui.selected.includes(id)?ui.selected.filter(v=>v!==id):[...ui.selected,id];\n ui.regionSelectionMode=ui.selected.length?'selected':'none';\n save();render();\n}\nfunction syncQuickRegionButtons(){\n $$('[data-quick-region]').forEach(b=>{const on=ui.selected.includes(b.dataset.quickRegion);b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});\n const all=$('#clearFilter'),isAll=!ui.selected.length&&!noRegionsSelected();if(all){all.classList.toggle('active',isAll);all.setAttribute('aria-pressed',String(isAll))}\n}\nfunction selectedRegionSummary(){const picked=ui.selected.map(historyGeoDisplayName);if(!picked.length)return noRegionsSelected()?'未選取地區':'全部地區';if(picked.length<=2)return picked.join('、');return picked[0]+' 等 '+picked.length+' 個地區';}\nfunction render(){historyNormalizeGeoSelection();ui.view='time';renderSidebar();$('#totalNum').textContent=data.events.length;$('#textSearch').value=ui.text;const mobileToggle=$('#mobileRegionToggle');if(mobileToggle){const label=mobileToggle.querySelector('span');if(label)label.textContent='▤ 地區篩選 · '+selectedRegionSummary();}\n $$('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===ui.view);b.setAttribute('aria-selected',String(b.dataset.view===ui.view))});\n updateScaleUI();$('#timeControls').classList.remove('hidden');\n syncQuickRegionButtons();\n const selectionClear=$('#clearSelection');if(selectionClear)selectionClear.disabled=noRegionsSelected();\n const items=filtered();let visible=items.filter(inWindow);$('#viewTitle').textContent='世界歷史時間軸';$('#viewDescription').textContent='';$('#countLabel').textContent=`${visible.length} 個條目`;renderTime(visible)\n}\nfunction tickStep(span,width){const steps=[1,2,5,10,20,25,50,100,200,250,500,1000,2000,5000,10000,20000];let target=Math.max(3,Math.floor(width/116));return steps.find(s=>span/s<=target)||20000}\nconst ERA_PALETTE_CN=['#b18c79','#c8a978','#99ab90','#7c9d8c','#80a9b9','#9eabc5','#889bb0','#998caf','#b792a7','#d09b86','#bca589','#95a68a','#87a9a0','#84a7b9','#8092b2','#ab94ad'];\nconst ERA_PALETTE_EG=['#aa9b80','#a68c75','#83a8a4','#ae8b83'];\nconst ERA_PALETTE_IR=['#a18eab','#8a9fa5','#b79e88'];\nconst ERA_PALETTE_GR=['#879cad','#8aabc0','#9b99bd'];\nconst ERA_PALETTE_RO=['#aa9982','#8faaa0','#8f9fae','#bd9c83','#8ea4b1'];\nconst ERA_PALETTE_FR=['#ae9a8a','#91a7a0','#a9a1b5','#bba58c','#8da8ac','#b2999f','#a5b39e','#94a5ba'];\nconst ERA_PALETTE_UK=['#9cae9f','#a99b88','#91a8b1','#b5a2ad','#9db5a3','#ad9d8f','#99abb7','#a9a0b5','#8eaaa7'];\nconst SCALE_STEPS=[500,200,100,50,20,10,5];\nconst scaleLevel=()=>Math.max(0,SCALE_STEPS.indexOf(Number(ui.timeScaleYears)));\nconst getEraViewportWidth=()=>{\n const old=$('#eraScroll');if(old?.clientWidth)return old.clientWidth;\n const pane=$('#mainContent');const panelWidth=pane?.clientWidth||Math.max(350,window.innerWidth-80);\n return Math.max(185,panelWidth-(window.innerWidth<=740?69:104)-2);\n};\nconst eraCenturyPixels=()=>100*getEraViewportWidth()/Number(ui.timeScaleYears||200);\nconst eraTimelineStart=pane=>Number(pane?.dataset.start??ui.start);\nconst eraTimelineEnd=pane=>Number(pane?.dataset.end??ui.end);\nconst viewportYearFor=(pane,localX)=>eraTimelineStart(pane)+(pane.scrollLeft+localX-(Number(pane.dataset.pad)||0)-22)*100/(Number(pane.dataset.px)||eraCenturyPixels());\nconst scaleTickStep=()=>({500:100,200:50,100:20,50:10,20:5,10:2,5:1})[Number(ui.timeScaleYears)]||50;\nlet timelinePointerCount=0,timelineGestureWasPinch=false;\nfunction setTimelineScale(nextIndex, focalYear=null, focalX=null){\n const level=Math.max(0,Math.min(SCALE_STEPS.length-1,Math.round(nextIndex)));\n const nextYears=SCALE_STEPS[level];\n const pane=$('#eraScroll');const width=pane?.clientWidth||getEraViewportWidth();\n const anchorX=Number.isFinite(focalX)?focalX:width/2;\n const year=Number.isFinite(focalYear)?focalYear:pane?viewportYearFor(pane,anchorX):(Number(ui.centerYear)||ui.start);\n const previous=Number(ui.timeScaleYears);\n if(nextYears===previous)return;\n // Keep the historical year under the user's fingers at the same on-screen x.\n ui.timeScaleYears=nextYears;\n const newPx=width/nextYears;\n ui.centerYear=Math.min(ui.end,Math.max(ui.start,year+(width/2-anchorX)/newPx));\n const events=filtered().filter(inWindow);\n renderTime(events,{center:ui.centerYear});\n updateScaleUI();save();\n}\nfunction updateScaleUI(){\n const label=$('#scaleTriggerText');if(label)label.textContent=Number(ui.timeScaleYears)+' 年／畫面';\n const slider=$('#scaleSlider');if(slider)slider.value=String(scaleLevel());\n const value=$('#scaleValue');if(value)value.textContent=String(ui.timeScaleYears);\n const less=$('#scaleLess'),more=$('#scaleMore');\n if(less)less.disabled=scaleLevel()===0;\n if(more)more.disabled=scaleLevel()===SCALE_STEPS.length-1;\n}\nfunction closeScaleSheet(){const root=$('#scaleRoot');if(root)root.replaceChildren();document.body.classList.remove('scale-open')}\nfunction openScaleSheet(){\n const root=$('#scaleRoot');if(!root)return;\n root.innerHTML=`<div id=\"scaleBackdrop\" class=\"scale-backdrop\"><section class=\"scale-sheet\" role=\"dialog\" aria-modal=\"true\" aria-label=\"時間軸縮放\"><button type=\"button\" class=\"scale-close\" id=\"scaleClose\" aria-label=\"關閉\">×</button><h3>時間縮放</h3><div class=\"scale-status\"><strong id=\"scaleValue\">${ui.timeScaleYears}</strong><span>年／目前畫面</span></div><div class=\"scale-adjust\"><button class=\"scale-stepper\" id=\"scaleLess\" type=\"button\" aria-label=\"縮小時間軸\">−</button><input type=\"range\" id=\"scaleSlider\" class=\"scale-slider\" min=\"0\" max=\"${SCALE_STEPS.length-1}\" step=\"1\" value=\"${scaleLevel()}\" aria-label=\"選擇每畫面顯示的年數\"><button class=\"scale-stepper\" id=\"scaleMore\" type=\"button\" aria-label=\"放大時間軸\">+</button></div><div class=\"scale-marks\">${SCALE_STEPS.map(n=>`<span>${n}</span>`).join('')}</div></section></div>`;\n $('#scaleClose').onclick=closeScaleSheet;\n $('#scaleBackdrop').onclick=e=>{if(e.target.id==='scaleBackdrop')closeScaleSheet()};\n $('#scaleSlider').oninput=e=>setTimelineScale(Number(e.target.value));\n $('#scaleLess').onclick=()=>setTimelineScale(scaleLevel()-1);\n $('#scaleMore').onclick=()=>setTimelineScale(scaleLevel()+1);\n document.body.classList.add('scale-open');updateScaleUI();\n}\n\nfunction eraScrollYear(pane){\n const start=Number(pane.dataset.start),px=Number(pane.dataset.px)||eraCenturyPixels(),pad=Number(pane.dataset.pad)||0;\n return start+(pane.scrollLeft+pane.clientWidth/2-pad-22)*100/px;\n}\nfunction eraScrollTo(year,behavior='auto'){\n const pane=$('#eraScroll');if(!Number.isFinite(year))return;\n ui.centerYear=Math.max(ui.start,Math.min(ui.end,year));\n if(!pane||year<eraTimelineStart(pane)+ui.timeScaleYears/1.8||year>eraTimelineEnd(pane)-ui.timeScaleYears/1.8){\n  renderTime(filtered().filter(inWindow),{center:ui.centerYear});return;\n }\n const pad=Number(pane.dataset.pad)||0;\n const x=pad+22+(year-eraTimelineStart(pane))*eraCenturyPixels()/100;\n pane.scrollTo({left:Math.max(0,x-pane.clientWidth/2),behavior});\n if(behavior==='auto')pane.updateFocusUI?.();\n}\n// Jump without changing the year scale; expand bounds only when a typed year is outside them.\nfunction applyYearJump(year){\n if(!isYear(year))return false;\n if(year<ui.start||year>ui.end){\n  const newStart=year<ui.start?Math.floor((year-100)/100)*100:ui.start;\n  const newEnd=year>ui.end?Math.ceil((year+100)/100)*100:ui.end;\n  if(newEnd-newStart>20000){notify('檢視範圍最多 20,000 年');return false}\n  ui.start=newStart;ui.end=newEnd;ui.centerYear=year;save();render();\n }else ui.centerYear=year;\n eraScrollTo(year,'auto');\n save();\n return true;\n}\nfunction formatJumpLimit(year){return year<0?'前'+Math.abs(year):String(year)}\nlet inlineJumpTyping=false;\n// Slider bounds represent the complete stored history, independent of viewport and region filter.\nconst JUMP_SLIDER_END=2000;\nfunction getJumpSliderStart(){\n const start=data.events.reduce((earliest,e)=>isYear(e.start)?Math.min(earliest,e.start):earliest,Infinity);\n return Number.isFinite(start)?Math.min(start,JUMP_SLIDER_END-1):DEFAULT_UI.start;\n}\nfunction updateJumpSlider(year){\n const slider=$('#jumpSlider');if(!slider)return;\n const dataStart=getJumpSliderStart();\n if(String(slider.min)!==String(dataStart))slider.min=String(dataStart);\n if(String(slider.max)!==String(JUMP_SLIDER_END))slider.max=String(JUMP_SLIDER_END);\n const min=Number(slider.min),max=Number(slider.max);\n const clamped=Math.max(min,Math.min(max,Math.round(year)));\n slider.value=String(clamped===0?(year<0?-1:1):clamped);\n slider.style.setProperty('--jump-progress',Math.max(0,Math.min(100,100*(clamped-min)/Math.max(1,max-min)))+'%');\n const left=$('#jumpStart'),right=$('#jumpEnd');\n if(left)left.textContent=formatJumpLimit(dataStart);\n if(right)right.textContent=String(JUMP_SLIDER_END);\n}\nfunction syncInlineYear(year){\n const input=$('#jumpYearInput');\n if(input&&!inlineJumpTyping)input.value=String(Math.round(year));\n updateJumpSlider(year);\n}\nfunction bindInlineYearJump(){\n const input=$('#jumpYearInput'),slider=$('#jumpSlider'),go=$('#jumpGo');\n if(!input||!slider||!go)return;\n let debounce=null,frame=null;\n const commit=()=>{\n  clearTimeout(debounce);debounce=null;\n  const target=parseFocusYear(input.value);\n  if(target===null)return false;\n  if(applyYearJump(target)){inlineJumpTyping=false;input.value=String(target);updateJumpSlider(target);return true}\n  return false;\n };\n // Only commit after typing stops, so a negative-year prefix is not misread.\n input.addEventListener('input',()=>{\n  inlineJumpTyping=true;\n  clearTimeout(debounce);\n  if(parseFocusYear(input.value)!==null)debounce=setTimeout(commit,550);\n });\n input.addEventListener('keydown',ev=>{\n  if(ev.key==='Enter'){\n   ev.preventDefault();if(commit())input.blur();else notify('請輸入有效年份，例如 300 或 -221');\n  }\n });\n input.addEventListener('blur',()=>{\n  clearTimeout(debounce);\n  if(!commit()){const y=$('#eraScroll')?eraScrollYear($('#eraScroll')):ui.centerYear;input.value=String(Math.round(y||ui.start));}inlineJumpTyping=false;\n });\n go.addEventListener('click',()=>{if(commit())input.blur();else notify('請輸入有效年份，例如 300 或 -221')});\n // Dragging the bar moves the timeline immediately, without opening a dialog.\n slider.addEventListener('input',()=>{\n  let target=Number(slider.value);\n  if(target===0)target=ui.centerYear<0?-1:1;\n  inlineJumpTyping=false;input.value=String(target);updateJumpSlider(target);\n  if(frame!==null)cancelAnimationFrame(frame);\n  frame=requestAnimationFrame(()=>{frame=null;applyYearJump(target)});\n });\n updateJumpSlider(isYear(ui.centerYear)?ui.centerYear:ui.start);\n}\nfunction renderTime(items,opts={}){\n const pane=$('#mainContent');\n if(noRegionsSelected()){pane.innerHTML='<div class=\"empty\">目前沒有選取任何地區。點選「全部」、快速地區按鈕，或展開地區篩選，即可顯示時間軸。</div>';return}\n if(ui.end<=ui.start||!isYear(ui.start)||!isYear(ui.end)){pane.innerHTML='<div class=\"empty\">請輸入正確的起訖年份（不使用西元0年，且結束年須大於起始年）。</div>';return}\n const span=ui.end-ui.start;\n if(span>20000){pane.innerHTML='<div class=\"empty\">目前設定的年份範圍太廣；請將檢視範圍縮小到 20,000 年以內。</div>';return}\n const groups=new Map();\n const selectedLane=id=>!ui.selected.length||ui.selected.some(sel=>historyRegionMatches(sel,id));\n // Multiple historic country IDs within the SAME macro region appear once in its lane.\n // The original IDs remain available in the event detail and Supabase.\n for(const e of items){\n  const original=new Set(Array.isArray(e.regionIds)&&e.regionIds.length?e.regionIds:['other']);\n  const visible=new Set([...original].filter(selectedLane).map(historyGeoLaneId));\n  for(const id of visible){if(!groups.has(id))groups.set(id,[]);groups.get(id).push(e)}\n }\n const order=id=>{\n  const groupIndex=HISTORY_EUROPE_GROUPS.findIndex(g=>g.id===id);\n  if(groupIndex!==-1){\n   const euIndex=data.continents.findIndex(c=>c.id==='europe');\n   return euIndex*100+groupIndex+1;\n  }\n  const c=findContinent(id);if(!c)return 999;\n  const i=data.continents.indexOf(c),j=c.children.findIndex(r=>r.id===id);\n  return i*100+(j<0?0:j+1);\n };\n const lanes=[...groups].sort((a,b)=>order(a[0])-order(b[0])).map(([id,events])=>({id,events,periods:events.filter(e=>(e.type==='朝代'||e.type==='歷史時期')&&e.timelineRole!=='event'),points:events.filter(e=>e.timelineRole==='event'||(e.type!=='朝代'&&e.type!=='歷史時期'))}));\n if(!lanes.length){pane.innerHTML='<div class=\"empty\">這個期間沒有符合的歷史資料。可調整年份、地區或新增條目。</div>';return}\n const oldScroller=pane.querySelector('#eraScroll');\n const restoreYear=oldScroller?eraScrollYear(oldScroller):null;\n const explicitCenter=Number.isFinite(opts.center)?opts.center:null;\n const defaultCenter=window.innerWidth<=740&&ui.start<=-1650&&ui.end>=1900&&!ui.selected.length?-1650:ui.start;\n const center=Math.max(ui.start,Math.min(ui.end,explicitCenter??(isYear(ui.centerYear)?ui.centerYear:null)??restoreYear??defaultCenter));\n // Render a fixed number of nearby viewports: 20-year zoom must not create a 100,000px-wide SVG.\n const bufferYears=Number(ui.timeScaleYears)*6;\n let renderStart=Math.max(ui.start,Math.floor(center-bufferYears));\n let renderEnd=Math.min(ui.end,Math.ceil(center+bufferYears));\n if(renderEnd-renderStart<ui.timeScaleYears+2){renderStart=ui.start;renderEnd=ui.end}\n const px=eraCenturyPixels(),chartWidth=Math.max(getEraViewportWidth(),Math.ceil((renderEnd-renderStart)*px/100+44));\n const xFor=y=>22+(y-renderStart)*px/100;\n const eventW=166,eventGap=16,eventTrackH=82;\n // Arrange event cards in separate rows when their year markers are close together.\n // The layout uses screen-space widths, rather than a fixed alternation that overlaps at small gaps.\n const laneLayout=lanes.map(lane=>{\n  // Virtualize event annotations around the current viewport, not the full\n  // 12-viewport SVG buffer: off-screen dates must not consume vertical rows.\n  const eventHorizon=Number(ui.timeScaleYears)*0.8;\n  const isNear=e=>e.start<=center+eventHorizon&&effectiveEnd(e)>=center-eventHorizon;\n  const tinyPeriods=lane.periods.filter(e=>e.showPeriodCallout&&isNear(e)&&Math.abs(effectiveEnd(e)-e.start)*px/100<125).map(e=>({...e,__eraBadge:true}));\n  let pts=[...lane.points.filter(isNear),...tinyPeriods].sort((a,b)=>a.start-b.start||(effectiveEnd(a)-effectiveEnd(b))); // stable tie-break keeps source order\n  // Group dense milestones at 200- or 500-year overview. A cluster can be clicked to zoom in.\n  if(ui.timeScaleYears>=200&&pts.length>1){\n   const grouped=[],threshold=ui.timeScaleYears===500?126:112;\n   for(const e of pts){\n    const x=xFor((e.start+effectiveEnd(e))/2),prev=grouped[grouped.length-1];\n    if(prev&&x-prev.lastX<threshold){prev.items.push(e);prev.lastX=x}\n    else grouped.push({items:[e],lastX:x});\n   }\n   pts=grouped.map(g=>{\n    if(g.items.length===1)return g.items[0];\n    const representative=g.items.find(e=>e.featured)||g.items.find(e=>e.type==='戰爭')||g.items[0];\n    return {...representative,id:'cluster_'+lane.id+'_'+Math.round(g.items[0].start),__clusterIds:g.items.map(e=>e.id),__clusterSize:g.items.length,\n      start:Math.min(...g.items.map(e=>e.start)),end:Math.max(...g.items.map(e=>effectiveEnd(e))),\n      shortName:(representative.shortName||representative.nameZh||'事件'),nameZh:(representative.nameZh||'事件')};\n   });\n  }\n  // Stable chronological ordering: earlier starting events always sit higher when\n  // dates overlap, or when their 166px labels would collide at this zoom level.\n  // Reusing a lower track is allowed only when neither dates nor labels intersect.\n  const mapped=[];\n  for(const e of pts){\n   const isHyp=e.temporalMode==='hypothesis'||e.precision==='存疑'||e.type==='年代推測';\n   const candidate=e.candidateYears?.length?e.candidateYears:[e.start,e.end??e.start];\n   const years=isHyp?candidate:[e.start,e.end??e.start];\n   const timeA=Math.min(...years),timeB=Math.max(...years);\n   const anchor=years.reduce((sum,y)=>sum+y,0)/years.length;\n   const x=xFor(anchor);\n   const labelX=Math.max(24,Math.min(chartWidth-eventW-20,x-eventW/2));\n   let track=0;\n   for(const prev of mapped){\n    const datedOverlap=timeA<=prev.timeB&&timeB>=prev.timeA;\n    const labelOverlap=labelX<prev.labelX+eventW+eventGap&&prev.labelX<labelX+eventW+eventGap;\n    if(datedOverlap||labelOverlap)track=Math.max(track,prev.track+1);\n   }\n   mapped.push({e,x,track,labelX,isHyp,yearA:years[0],yearB:years[years.length-1],timeA,timeB});\n  }\n  const tracks=mapped.length?Math.max(...mapped.map(p=>p.track))+1:0;\n  const romanSplit=lane.id==='italy'&&lane.periods.some(e=>e.romanBranch==='west')&&lane.periods.some(e=>e.romanBranch==='east');\n  const periodTracks=new Map(),periodEnds=[];\n  if(!romanSplit)for(const e of lane.periods.slice().sort((a,b)=>a.start-b.start)){\n   let idx=periodEnds.findIndex(end=>end<=e.start);\n   if(idx<0)idx=periodEnds.length;\n   periodEnds[idx]=effectiveEnd(e);\n   periodTracks.set(e.id,idx);\n  }\n  const periodExtra=romanSplit?0:Math.max(0,periodEnds.length-1)*58;\n  return {...lane,romanSplit,pointLayouts:mapped,tracks,periodTracks,periodExtra,height:romanSplit?(tracks?294+(tracks-1)*eventTrackH:245):(tracks?171+(tracks-1)*eventTrackH:146)+periodExtra};\n });\n let currentTop=102;\n laneLayout.forEach(l=>{l.top=currentTop;l.y=currentTop+36;currentTop+=l.height});\n const height=currentTop+16;\n let markup=`<rect x=\"0\" y=\"0\" width=\"${chartWidth}\" height=\"${height}\" fill=\"#fff\"/>`;\n markup+=`<line x1=\"22\" y1=\"61\" x2=\"${chartWidth-18}\" y2=\"61\" stroke=\"#aebbc0\" stroke-width=\"2\"/>`;\n for(let yr=Math.ceil(renderStart/scaleTickStep())*scaleTickStep();yr<=renderEnd;yr+=scaleTickStep()){\n  if(yr===0)continue;\n  const x=xFor(yr),txt=yr<0?'前'+(-yr):String(yr);\n  markup+=`<line x1=\"${x.toFixed(1)}\" x2=\"${x.toFixed(1)}\" y1=\"76\" y2=\"${height-9}\" stroke=\"#eef1ee\" stroke-width=\"1\" stroke-dasharray=\"3 7\"/>`;\n  markup+=`<line x1=\"${x.toFixed(1)}\" x2=\"${x.toFixed(1)}\" y1=\"53\" y2=\"69\" stroke=\"#aebbc0\" stroke-width=\"1\"/>`;\n  markup+=`<circle cx=\"${x.toFixed(1)}\" cy=\"61\" r=\"3.4\" fill=\"#aebbc0\"/>`;\n  markup+=`<text x=\"${x.toFixed(1)}\" y=\"41\" text-anchor=\"middle\" class=\"era-tick-label\">${txt}</text>`;\n }\n for(let i=0;i<laneLayout.length;i++){\n  const lane=laneLayout[i],y=lane.y;\n  markup+=`<rect x=\"4\" y=\"${lane.top+2}\" width=\"${chartWidth-8}\" height=\"${lane.height-8}\" rx=\"12\" fill=\"${i%2?'#fbfbf8':'#f9faf9'}\"/>`;\n  markup+=`<line x1=\"20\" x2=\"${chartWidth-20}\" y1=\"${y}\" y2=\"${y}\" stroke=\"#dfe5e0\" stroke-width=\"2\"/>`;\n  const sorted=lane.periods.slice().sort((a,b)=>a.start-b.start);\n  // Roman succession: main line (Kingdom → Republic → Imperial period) splits in 395 CE.\n  const splitX=xFor(395);\n  if(lane.romanSplit&&renderStart<=395&&renderEnd>=395){\n   markup+=`<path d=\"M ${splitX.toFixed(1)} ${y+23} V ${y+125}\" stroke=\"#a6b3ad\" stroke-width=\"2\" fill=\"none\"/>`;\n   markup+=`<circle cx=\"${splitX.toFixed(1)}\" cy=\"${y}\" r=\"5\" fill=\"#fff\" stroke=\"#889c98\" stroke-width=\"2\"/>`;\n   markup+=`<text x=\"${(splitX+8).toFixed(1)}\" y=\"${y+46}\" class=\"era-roman-fork-label\">395 · 東西分治</text>`;\n  }\n  for(let j=0;j<sorted.length;j++){\n   const e=sorted[j],start=Math.max(e.start,renderStart),end=Math.min(effectiveEnd(e),renderEnd);\n   if(end<start)continue;\n   const left=xFor(start),right=xFor(end),width=Math.max(2,right-left);\n   const color=lane.id==='egypt'?ERA_PALETTE_EG[j%ERA_PALETTE_EG.length]:lane.id==='china'?ERA_PALETTE_CN[j%ERA_PALETTE_CN.length]:lane.id==='persia'?ERA_PALETTE_IR[j%ERA_PALETTE_IR.length]:lane.id==='greece'?ERA_PALETTE_GR[j%ERA_PALETTE_GR.length]:lane.id==='italy'?ERA_PALETTE_RO[j%ERA_PALETTE_RO.length]:lane.id==='france'?ERA_PALETTE_FR[j%ERA_PALETTE_FR.length]:lane.id==='uk'?ERA_PALETTE_UK[j%ERA_PALETTE_UK.length]:colorFor(e);\n   const name=e.nameZh||e.nameEn||'未命名',shortName=e.shortName||name.replace(/時期$/,'');\n   const isRomanBranch=lane.romanSplit&&Boolean(e.romanBranch);\n   const barY=isRomanBranch?(e.romanBranch==='west'?y+62:y+110):(y-26+(lane.periodTracks.get(e.id)||0)*58);\n   const barH=isRomanBranch?35:52;\n   const labelSize=width<32?12:width<90?13:16;\n   const maxChars=Math.floor((width-5)/(labelSize*0.95));\n   const label=maxChars>=shortName.length?shortName:(maxChars>=1?shortName.slice(0,Math.max(1,maxChars)):'');\n   const title=esc(`${name}｜${formatPeriod(e)}｜${historyGeoDisplayName(lane.id)}｜點擊查看／編輯`);\n   markup+=`<g class=\"era-period\" data-open=\"${esc(e.id)}\" role=\"button\" tabindex=\"0\" aria-label=\"${title}\"><title>${title}</title><rect class=\"era-period-fill\" x=\"${left.toFixed(1)}\" y=\"${barY}\" width=\"${width.toFixed(1)}\" height=\"${barH}\" rx=\"${isRomanBranch?6:3}\" fill=\"${color}\" stroke=\"#fff\" stroke-width=\"1.8\"/>`;\n   if(label)markup+=`<text x=\"${(left+width/2).toFixed(1)}\" y=\"${barY+barH/2+5}\" font-size=\"${labelSize}\" font-weight=\"720\" text-anchor=\"middle\" fill=\"#fff\" class=\"era-segment-text\" data-full-label=\"${esc(shortName)}\">${esc(label)}</text>`;\n   markup+='</g>';\n   if(isRomanBranch&&e.end<=renderEnd&&e.end>=renderStart){\n    const endLabel=e.romanBranch==='west'?'476 · 西羅馬亡':'1453 · 東羅馬亡';\n    markup+=`<circle cx=\"${right.toFixed(1)}\" cy=\"${barY+barH/2}\" r=\"4\" fill=\"#fff\" stroke=\"${color}\" stroke-width=\"2\"/><text x=\"${(right+9).toFixed(1)}\" y=\"${barY+barH/2+4}\" class=\"era-roman-end\">${endLabel}</text>`;\n   }\n  }\n  const connectors=[],eventCards=[];\n  for(const item of lane.pointLayouts){\n   const {e,x,track,labelX,isHyp,yearA,yearB}=item;\n   const cardY=y+(lane.romanSplit?198:72+lane.periodExtra)+track*eventTrackH;\n   const startX=xFor(yearA),endX=xFor(yearB),from=Math.min(startX,endX),to=Math.max(startX,endX);\n   const hasRange=!e.__clusterIds&&Math.abs(to-from)>4;\n   const isCluster=!!e.__clusterIds;\n   const title=esc(isCluster?`包含 ${e.__clusterSize} 個事件｜點擊放大檢視`:`${e.nameZh||e.nameEn}｜${formatPeriod(e)}｜${historyGeoDisplayName(lane.id)}｜點擊查看／編輯`);\n   const short=(e.shortName||e.nameZh||e.nameEn||'事件');\n   const labelText=(e.featured?'★ ':'')+short;\n   const label=isCluster?(labelText.length>10?labelText.slice(0,9)+'…':labelText):labelText.length>12?labelText.slice(0,11)+'…':labelText;\n   const small=isCluster?`另有 ${e.__clusterSize-1} 個事件 · 點擊放大`:(isHyp?(e.candidateYears?.map(compactYear).join('／')||'年代假說'):formatPeriod(e));\n   const shownSmall=small.length>23?small.slice(0,22)+'…':small;\n   const css=isHyp?' uncertain':e.featured?' featured':e.__eraBadge?' period-badge':'';\n   const segY=cardY-20;\n   let connector=`<g class=\"era-event-connector\" ${isCluster?`data-cluster=\"${esc(e.id)}\"`:`data-open=\"${esc(e.id)}\"`} role=\"button\" tabindex=\"0\" aria-label=\"${title}\"><title>${title}</title>`;\n   // A single year is a node; a dated interval is a solid connected line.\n   if(hasRange){\n    connector+=`<line x1=\"${from.toFixed(1)}\" y1=\"${segY}\" x2=\"${to.toFixed(1)}\" y2=\"${segY}\" class=\"event-range${css}\"/>`;\n    connector+=`<circle cx=\"${from.toFixed(1)}\" cy=\"${segY}\" r=\"3.6\" class=\"event-anchor${css}\"/><circle cx=\"${to.toFixed(1)}\" cy=\"${segY}\" r=\"3.6\" class=\"event-anchor${css}\"/>`;\n   }\n   // Never draw a vertical stem through earlier event cards or a Roman fork.\n   // Each short leader stays inside its own dedicated row below the history bars.\n   if(!hasRange)connector+=`<circle cx=\"${x.toFixed(1)}\" cy=\"${segY}\" r=\"4\" class=\"event-anchor${css}\"/>`;\n   const labelCenter=labelX+eventW/2;\n   connector+=`<path d=\"M ${x.toFixed(1)} ${segY} L ${x.toFixed(1)} ${(cardY-9).toFixed(1)} L ${labelCenter.toFixed(1)} ${(cardY-9).toFixed(1)} L ${labelCenter.toFixed(1)} ${cardY}\" class=\"event-leader${css}\" fill=\"none\"/>`;\n   connector+='</g>';connectors.push(connector);\n   let card=`<g class=\"${isCluster?'era-event-cluster':'era-event'}\" ${isCluster?`data-cluster=\"${esc(e.id)}\" data-cluster-year=\"${x.toFixed(1)}\"`:`data-open=\"${esc(e.id)}\"`} role=\"button\" tabindex=\"0\" aria-label=\"${title}\"><title>${title}</title>`;\n   card+=`<rect x=\"${labelX.toFixed(1)}\" y=\"${cardY}\" width=\"${eventW}\" height=\"37\" rx=\"9\" class=\"${isCluster?'cluster-tag':'event-tag'+css}\"/>`;\n   card+=`<text x=\"${(labelX+eventW/2).toFixed(1)}\" y=\"${cardY+15}\" text-anchor=\"middle\" class=\"${isCluster?'cluster-title':'event-tag-title'+css}\">${esc(label)}</text>`;\n   card+=`<text x=\"${(labelX+eventW/2).toFixed(1)}\" y=\"${cardY+29}\" text-anchor=\"middle\" class=\"${isCluster?'cluster-date':'event-tag-date'+css}\">${esc(shownSmall)}</text>`;\n   card+='</g>';eventCards.push(card);\n  }\n  markup+=connectors.join('')+eventCards.join('');\n }\n const laneLabels=laneLayout.map(lane=>{\n  const group=HISTORY_EUROPE_GROUPS.find(g=>g.id===lane.id);\n  const continent=group?data.continents.find(c=>c.id==='europe'):findContinent(lane.id);\n  const title=historyGeoDisplayName(lane.id);\n  const heading=group?group.name:eraRegionShortName(lane.id);\n  const sub=group?'歐洲 · 大區':continent?.name||'地區';\n  return `<button class=\"era-region-label ${group?'macro-lane-label':''}\" type=\"button\" data-focus-region=\"${esc(lane.id)}\" style=\"top:${lane.top+2}px\" title=\"篩選${esc(title)}的歷史事件\"><strong>${esc(heading)}</strong><small>${esc(sub)}</small></button>`;\n }).join('');\n const jumpOptions=[{year:-2600,name:'古夫金字塔'},{year:-1500,name:'新王國'},{year:-550,name:'波斯第一帝國'},{year:-525,name:'波斯征服埃及'},{year:-490,name:'馬拉松・溫泉關'},{year:-430,name:'伯羅奔尼撒戰爭'},{year:-334,name:'亞歷山大東征'},{year:-330,name:'亞歷山大帝國'},{year:-200,name:'羅馬共和'},{year:395,name:'羅馬分治'},{year:476,name:'西羅馬亡'},{year:1453,name:'東羅馬亡'},{year:650,name:'隋唐'},{year:1500,name:'明清'}];\n const eventCount=laneLayout.reduce((sum,l)=>sum+l.pointLayouts.filter(i=>!i.e.__eraBadge).length,0);\n pane.innerHTML=`<div class=\"era-view\"><div class=\"era-labels\" style=\"height:${height}px\"><span class=\"era-axis-label\">西元年</span>${laneLabels}</div><div class=\"era-viewport\"><div class=\"era-scroll\" id=\"eraScroll\" tabindex=\"0\" aria-label=\"可左右拖曳的歷史時間軸\"><svg class=\"era-svg\" width=\"${chartWidth}\" height=\"${height}\" viewBox=\"0 0 ${chartWidth} ${height}\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"各地區朝代與歷史事件時間軸\">${markup}</svg></div><div class=\"era-center-guide\" aria-hidden=\"true\"><span id=\"eraCenterYear\" class=\"era-center-badge\"></span><span class=\"era-center-dot\"></span><span class=\"era-center-line\"></span></div></div></div>`;\n const newScroller=pane.querySelector('#eraScroll');\n if(newScroller){\n  newScroller.dataset.start=String(renderStart);\n  newScroller.dataset.end=String(renderEnd);\n  newScroller.dataset.px=String(px);\n  const padding=Math.max(0,newScroller.clientWidth/2-22);\n  newScroller.style.paddingLeft=padding+'px';\n  newScroller.style.paddingRight=padding+'px';\n  newScroller.dataset.pad=String(padding);\n  const preferred=Number.isFinite(explicitCenter)?explicitCenter:(isYear(ui.centerYear)&&ui.centerYear>=ui.start&&ui.centerYear<=ui.end?ui.centerYear:null)??restoreYear;\n  const fallback=window.innerWidth<=740&&ui.start<=-1650&&ui.end>=1900&&!ui.selected.length?-1650:ui.start;\n  const targetYear=Math.max(ui.start,Math.min(ui.end,preferred??fallback));\n  newScroller.scrollLeft=Math.max(0,padding+22+(targetYear-renderStart)*px/100-newScroller.clientWidth/2);\n  let savedYearTimer=null;\n  const syncFocus=()=>{\n   const actual=eraScrollYear(newScroller);\n   let year=Math.round(Math.max(ui.start,Math.min(ui.end,actual)));\n   if(year===0)year=actual<0?-1:1;\n   $('#eraCenterYear').textContent=formatFocusYear(year);\n   ui.centerYear=year;\n   syncInlineYear(year);\n   clearTimeout(savedYearTimer);\n   savedYearTimer=setTimeout(()=>save(),380);\n  };\n  const syncLabels=()=>{\n   const l=newScroller.scrollLeft-padding,r=l+newScroller.clientWidth;\n   newScroller.querySelectorAll('.era-period').forEach(g=>{const box=g.querySelector('rect'),label=g.querySelector('.era-segment-text');if(!box||!label)return;\n    const x=Number(box.getAttribute('x')),w=Number(box.getAttribute('width')),left=Math.max(l,x),right=Math.min(r,x+w);\n    if(right<=left)return;\n    const size=Number(label.getAttribute('font-size'))||14,cap=Math.max(0,Math.floor((right-left-6)/(size*0.93)));\n    label.textContent=(label.dataset.fullLabel||'').slice(0,cap);\n    label.setAttribute('x',((left+right)/2).toFixed(1));\n   });\n   syncFocus();\n  };\n  newScroller.updateFocusUI=syncLabels;\n  newScroller.addEventListener('scroll',syncLabels,{passive:true});\n  newScroller.addEventListener('scroll',()=>{\n   clearTimeout(window._timelineWindowTimer);\n   window._timelineWindowTimer=setTimeout(()=>{\n    if(timelinePointerCount||$('#eraScroll')!==newScroller)return;\n    const cy=eraScrollYear(newScroller);\n    const nearLeft=(cy-renderStart)<1.7*ui.timeScaleYears&&renderStart>ui.start;\n    const nearRight=(renderEnd-cy)<1.7*ui.timeScaleYears&&renderEnd<ui.end;\n    // Once the visible era changes, repack nearby event rows. Defer during\n    // any active drag so the time axis never disappears under the pointer.\n    const moved=Math.abs(cy-center)>ui.timeScaleYears*0.26;\n    if(!newScroller.classList.contains('is-dragging')&&(nearLeft||nearRight||moved))renderTime(filtered().filter(inWindow),{center:cy});\n   },155);\n  },{passive:true});\n  enableTimelineDragging(newScroller);\n  syncLabels();\n }\n pane.querySelectorAll('[data-open]').forEach(el=>{el.addEventListener('click',()=>openEvent(el.dataset.open));el.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();openEvent(el.dataset.open)}})});\n pane.querySelectorAll('[data-cluster]').forEach(el=>{\n  const record=laneLayout.flatMap(l=>l.pointLayouts).find(item=>item.e.id===el.dataset.cluster);\n  const click=()=>{if(!record)return;setTimelineScale(Math.min(SCALE_STEPS.length-1,scaleLevel()+1),(record.e.start+record.e.end)/2)};\n  el.addEventListener('click',click);\n  el.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();click()}});\n });\n pane.querySelectorAll('[data-jump]').forEach(el=>el.addEventListener('click',()=>eraScrollTo(Number(el.dataset.jump))));\n pane.querySelectorAll('[data-focus-region]').forEach(el=>el.addEventListener('click',()=>{ui.selected=[el.dataset.focusRegion];save();render()}));\n}\nfunction enableTimelineDragging(scroller){\n let state=null,suppressClick=false;\n const end=ev=>{\n  if(!state||ev.pointerId!==state.id)return;\n  if(state.dragged){suppressClick=true;setTimeout(()=>{suppressClick=false},160)}\n  const hadDragged=state.dragged;\n  scroller.classList.remove('is-dragging');\n  if(scroller.hasPointerCapture?.(state.id)){try{scroller.releasePointerCapture(state.id)}catch{}}\n  state=null;\n  // A drag may end without another native scroll event. Check whether nearby\n  // event cards need a fresh chronological layout after the pointer is released.\n  if(hadDragged)setTimeout(()=>{if($('#eraScroll')===scroller)scroller.dispatchEvent(new Event('scroll'))},20);\n };\n scroller.addEventListener('pointerdown',ev=>{\n  if(ev.isPrimary===false||(ev.pointerType==='mouse'&&ev.button!==0))return;\n  state={id:ev.pointerId,x:ev.clientX,y:ev.clientY,left:scroller.scrollLeft,dragged:false,skip:false};\n });\n scroller.addEventListener('pointermove',ev=>{\n  if(!state||ev.pointerId!==state.id||state.skip||timelineGestureWasPinch||timelinePointerCount>1)return;\n  const dx=ev.clientX-state.x,dy=ev.clientY-state.y;\n  if(!state.dragged){\n   if(Math.abs(dx)<7)return;\n   if(ev.pointerType==='touch'&&Math.abs(dy)>Math.abs(dx)*1.1){state.skip=true;return}\n   state.dragged=true;\n   scroller.classList.add('is-dragging');\n   if(ev.pointerType==='mouse'||ev.pointerType==='pen'){try{scroller.setPointerCapture(ev.pointerId)}catch{}}\n  }\n  scroller.scrollLeft=state.left-dx;\n  if(ev.cancelable)ev.preventDefault();\n },{passive:false});\n for(const event of ['pointerup','pointercancel'])scroller.addEventListener(event,end);\n scroller.addEventListener('click',ev=>{if(suppressClick){ev.preventDefault();ev.stopImmediatePropagation();suppressClick=false}},true);\n scroller.addEventListener('keydown',ev=>{\n  if(ev.target!==scroller)return;\n  if(ev.key==='ArrowRight'||ev.key==='ArrowLeft'){\n   ev.preventDefault();scroller.scrollLeft+=(ev.key==='ArrowRight'?1:-1)*eraCenturyPixels()/10;\n  }\n });\n}\nfunction renderRegion(items){const pane=$('#mainContent');let options=data.continents.map(c=>`<optgroup label=\"${esc(c.name)}\"><option value=\"${esc(c.id)}\" ${ui.focus===c.id?'selected':''}>${esc(c.name)} · 全洲</option>${c.children.map(k=>`<option value=\"${esc(k.id)}\" ${ui.focus===k.id?'selected':''}>${esc(nameFor(k.id))}</option>`).join('')}</optgroup>`).join('');\n if(!data.continents.some(c=>c.id===ui.focus||c.children.some(k=>k.id===ui.focus)))ui.focus='china';\n const matching=items.filter(e=>{const c=data.continents.find(c=>c.id===ui.focus);return c?e.regionIds.some(r=>r===c.id||c.children.some(k=>k.id===r)):e.regionIds.includes(ui.focus)||(findContinent(ui.focus)&&e.regionIds.includes(findContinent(ui.focus).id))});\n $('#countLabel').textContent=`${matching.length} 個條目`;\n let html=`<div class=\"focus-select\"><span class=\"section-caption\">CURRENT FOCUS</span><select id=\"focusRegion\" aria-label=\"選擇地區\">${options}</select><span class=\"tag\">依年代由早到晚</span></div>`;\n if(!matching.length)html+=`<div class=\"empty\">「${esc(nameFor(ui.focus))}」目前還沒有收錄符合的事件。<br><button class=\"button small\" type=\"button\" id=\"emptyAdd\" style=\"margin-top:12px\">＋ 建立第一個事件</button></div>`;\n else{html+='<div class=\"flow-list\">';for(let e of matching){let moreRegions=e.regionIds.map(nameFor);let link=safeUrl(e.source);html+=`<div class=\"flow-item\"><div class=\"flow-date\">${e.precision==='存疑'?'推測':esc(compactYear(e.start))}<div style=\"font-size:10px;color:#a9b6ae\">${e.precision==='存疑'?esc(e.candidateYears?.map(compactYear).join('／')||'年代未確立'):e.ongoing?'至今':e.end!=null&&e.end!==e.start?'至 '+esc(compactYear(e.end)):''}</div></div><i class=\"flow-node\" style=\"--node:${esc(colorFor(e))}\"></i><div class=\"flow-card\"><div class=\"flow-card-title\"><span>${esc(e.nameZh||e.nameEn)}</span><button class=\"button small\" data-open=\"${esc(e.id)}\" type=\"button\">查看 / 編輯 ↗</button></div><div class=\"flow-sub\">${esc(e.nameEn||'')}${e.precision==='存疑'?' · 年代假說（未證實）':e.precision==='約'?' · 年代約數':''}</div><p class=\"flow-note\">${esc(e.notes||'尚未補充事件說明')}</p><div class=\"flow-tags\"><span class=\"flow-tag\">${esc(e.type||'事件')}</span>${moreRegions.map(k=>`<span class=\"flow-tag\">${esc(k)}</span>`).join('')}</div>${link?`<div class=\"flow-actions\"><a href=\"${esc(link)}\" target=\"_blank\" rel=\"noopener noreferrer\">來源：維基百科 / 外部連結 ↗</a></div>`:''}</div></div>`;}html+='</div>'}\n pane.innerHTML=html;$('#focusRegion').onchange=e=>{ui.focus=e.target.value;ui.selected=[ui.focus];save();render()};pane.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openEvent(b.dataset.open));if($('#emptyAdd'))$('#emptyAdd').onclick=()=>openEvent();}\nfunction openModal(title,subtitle,bodyHtml,footer){const root=$('#modalRoot');const hasHeader=!!(String(title||'').trim()||String(subtitle||'').trim());root.innerHTML=`<div class=\"backdrop\" id=\"modalBackdrop\"><section class=\"modal ${hasHeader?'':'no-header'}\" role=\"dialog\" aria-modal=\"true\" ${hasHeader?'aria-labelledby=\"modalTitle\"':'aria-label=\"對話視窗\"'}>${hasHeader?`<header class=\"modal-header\"><div><h2 id=\"modalTitle\">${esc(title)}</h2>${subtitle?`<p>${esc(subtitle)}</p>`:''}</div><button class=\"close-modal\" id=\"closeModal\" type=\"button\" aria-label=\"關閉\">×</button></header>`:`<div class=\"modal-minimal-top\"><button class=\"close-modal\" id=\"closeModal\" type=\"button\" aria-label=\"關閉\">×</button></div>`}<div class=\"modal-body\" id=\"modalBody\">${bodyHtml}</div>${footer?`<div class=\"modal-actions\" id=\"modalActions\">${footer}</div>`:''}</section></div>`;\n $('#closeModal').onclick=closeModal;$('#modalBackdrop').onclick=e=>{if(e.target.id==='modalBackdrop')closeModal()};}\nfunction closeModal(){cancelWikiLookup();$('#modalRoot').innerHTML='';wikiCandidates=[]}\nfunction historyResolveEditorRegionIds(checked,original=[]){\n const selected=new Set(checked),old=Array.isArray(original)?original:[];\n const out=[];\n for(const id of selected){\n  const group=HISTORY_EUROPE_GROUPS.find(g=>g.id===id);\n  if(!group){out.push(id);continue}\n  const originalMembers=old.filter(r=>group.ids.includes(r)||r===group.id);\n  // New events store the macro ID itself, never a falsely precise country ID.\n  out.push(...(originalMembers.length?originalMembers:[group.id]));\n }\n // Keep original ID order whenever the visible region choices have not changed.\n const resolved=new Set(out);\n return [...old.filter(id=>resolved.has(id)),...out.filter(id=>!old.includes(id))].filter((id,i,arr)=>arr.indexOf(id)===i);\n}\nfunction regionEditorHtml(selected){\n const chosen=new Set(selected||[]);\n const input=(id,label,extraClass='')=>`<label class=\"region-option ${extraClass}\"><input class=\"event-region\" type=\"checkbox\" value=\"${esc(id)}\" ${chosen.has(id)?'checked':''}><span>${esc(label)}</span></label>`;\n const sections=data.continents.map(c=>{\n  const whole=input(c.id,'整洲','region-whole');\n  const children=c.id==='europe'\n   ?HISTORY_EUROPE_GROUPS.map(g=>{\n      const active=chosen.has(g.id)||g.ids.some(id=>chosen.has(id));\n      return `<label class=\"region-option macro-region-option\" title=\"${esc(HISTORY_GEO_HINTS[g.id]||g.name)}\"><input class=\"event-region\" type=\"checkbox\" value=\"${esc(g.id)}\" ${active?'checked':''}><span>${esc(g.name)}</span></label>`;\n     }).join('')+\n     c.children.filter(r=>!HISTORY_EUROPE_GROUPS.some(g=>g.ids.includes(r.id))).map(r=>input(r.id,r.name)).join('')\n   :c.children.map(k=>input(k.id,nameFor(k.id))).join('');\n  return `<section class=\"region-check-group\"><h4><span class=\"dot\" style=\"background:${esc(c.color)}\"></span>${esc(c.name)}</h4><div class=\"region-check-group-options\">${whole}${children}</div></section>`;\n }).join('');\n const specific=(selected||[]).filter(id=>data.continents.some(c=>c.children.some(r=>r.id===id))).map(nameFor);\n return `<p class=\"geo-edit-help\">以大區域指定影響範圍；精確古地名、城市與當時的政權請寫在下方「歷史備註」。</p><div class=\"region-checklist\">${sections}</div>${specific.length? `<p class=\"geo-saved-details\">原始細部標記（保留不覆蓋）：${esc([...new Set(specific)].join('、'))}</p>`:''}`;\n}\nfunction openEvent(id=null){if(!id && !historyOwner){notify('僅管理者可以新增事件');return;}const e=id?data.events.find(e=>e.id===id):null;const item=e||{nameZh:'',nameEn:'',start:'',end:null,type:'事件',precision:'確定',notes:'',source:'',regionIds:ui.view==='region'?[ui.focus]:ui.selected.length?[ui.selected[0]]:['china']};\n let html=`<form id=\"eventForm\"><div class=\"form-grid\"><div class=\"field\"><label for=\"eventZh\">中文名稱</label><input id=\"eventZh\" required maxlength=\"180\" value=\"${esc(item.nameZh)}\" autocomplete=\"off\"><div class=\"wiki-inline\" id=\"wikiInline\"><div class=\"wiki-status\" id=\"wikiStatus\" role=\"status\" aria-live=\"polite\"></div><div id=\"wikiResults\" class=\"wiki-results\"></div></div></div><div class=\"field\"><label for=\"eventEn\">English name (optional)</label><input id=\"eventEn\" maxlength=\"230\" value=\"${esc(item.nameEn)}\"></div><div class=\"field force-half\"><label for=\"eventStart\">起始年</label><input id=\"eventStart\" required type=\"number\" step=\"1\" value=\"${item.start===''?'':esc(item.start)}\"></div><div class=\"field force-half\"><label for=\"eventEnd\">結束年</label><input id=\"eventEnd\" type=\"number\" step=\"1\" value=\"${item.end==null?'':esc(item.end)}\"></div><div class=\"field\"><label for=\"eventType\">類別</label><select id=\"eventType\">${['朝代','歷史時期','在位期間','在世期間','建造工程','重大事件','戰爭','法典／文獻','條約','年代推測','文化','科技','人物','其他','事件'].map(t=>`<option value=\"${t}\" ${item.type===t?'selected':''}>${t}</option>`).join('')}</select></div><div class=\"field\"><label for=\"eventPrecision\">年代精確度</label><select id=\"eventPrecision\"><option value=\"確定\" ${item.precision!=='約'&&item.precision!=='存疑'?'selected':''}>確定 / 常用紀年</option><option value=\"約\" ${item.precision==='約'?'selected':''}>約略年代</option></select></div><div class=\"field span-2\"><label>影響地區</label>${regionEditorHtml(item.regionIds)}</div><div class=\"field span-2\"><label for=\"eventNotes\">歷史備註</label><textarea id=\"eventNotes\" rows=\"3\">${esc(item.notes)}</textarea></div><div class=\"field span-2\"><label for=\"eventSource\">資料來源網址</label><input id=\"eventSource\" type=\"url\" value=\"${esc(item.source)}\"><p class=\"form-help\">維基年代並非總有機器可讀的日期，請對照原文確認，存檔前可以修正。</p></div></div></form>`;\n let footer=`${e?`<button class=\"button danger\" id=\"deleteEvent\" style=\"margin-right:auto\" type=\"button\">刪除事件</button>`:''}<button class=\"button\" id=\"cancelEvent\" type=\"button\">取消</button><button class=\"button primary\" id=\"saveEvent\" type=\"button\">儲存事件</button>`;\n openModal('','',html,historyOwner?footer:'<button class=\"button\" id=\"cancelEvent\" type=\"button\">關閉</button>');\n if(!historyOwner) $$('#eventForm input,#eventForm select,#eventForm textarea').forEach(field=>field.disabled=true);\n $('#cancelEvent').onclick=closeModal;if($('#saveEvent'))$('#saveEvent').onclick=()=>saveEvent(e?.id);$('#eventZh').addEventListener('input',()=>scheduleWikiLookup($('#eventZh').value));$('#eventZh').addEventListener('compositionstart',()=>{wikiComposing=true;cancelWikiLookup()});$('#eventZh').addEventListener('compositionend',()=>{wikiComposing=false;scheduleWikiLookup($('#eventZh').value)});\n if(e&&historyOwner)$('#deleteEvent').onclick=async()=>{if(!confirm(`確定刪除「${e.nameZh}」？此動作無法復原（除非已有備份）。`))return;data.events=data.events.filter(x=>x.id!==e.id);try{await historyCommitNow();closeModal();render();notify('已從 Supabase 刪除事件');}catch(err){notify('刪除失敗：'+err.message)}};\n setTimeout(()=>$('#eventZh')?.focus(),30);\n}\nasync function saveEvent(existing){if(!historyOwner||!historyReady){notify('雲端未就緒，不能儲存');return;}const get=id=>$('#'+id)?.value.trim()||'';const zh=get('eventZh'),en=get('eventEn'),start=Number(get('eventStart')),endRaw=get('eventEnd'),end=endRaw===''?null:Number(endRaw),regions=historyResolveEditorRegionIds($$('.event-region:checked').map(e=>e.value),existing?data.events.find(e=>e.id===existing)?.regionIds:[]);\n if(!zh){notify('請輸入中文名稱');$('#eventZh').focus();return}if(!isYear(start)||end!==null&&!isYear(end)){notify('請填寫正確的西元年份，年份不能為 0。');return}if(end!==null&&astro(end)<astro(start)){notify('結束年份不得早於起始年份');return}if(!regions.length){notify('至少指定一個影響地區');return}\n const orig=existing?data.events.find(x=>x.id===existing):null;\n const temporalHyp=get('eventPrecision')==='存疑'||get('eventType')==='年代推測';\n const record={...orig,ongoing:Boolean(orig?.ongoing&&end===null&&['朝代','歷史時期'].includes(get('eventType'))),shortName:orig?.nameZh===zh?orig?.shortName:null,temporalMode:temporalHyp?'hypothesis':null,candidateYears:temporalHyp?(end!==null?[start,end]:[start]):null,id:existing||'evt_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),nameZh:zh,nameEn:en,start,end,type:get('eventType'),precision:orig?.precision==='存疑'&&orig?.nameZh===zh&&get('eventPrecision')==='確定'?'存疑':get('eventPrecision'),notes:get('eventNotes'),source:safeUrl(get('eventSource')),regionIds:regions,sourceType:orig?.sourceType||'manual',isSeed:orig?.isSeed||false};\n if(existing){data.events=data.events.map(x=>x.id===existing?record:x)}else{data.events.push(record)}\n try{await historyCommitNow();closeModal();render();notify(existing?'已同步修改到 Supabase':'已新增至 Supabase');}catch(err){notify('儲存失敗：'+err.message)}}\nasync function fetchJson(url){const ctrl=new AbortController();const timeout=setTimeout(()=>ctrl.abort(),14000);try{let r=await fetch(url,{method:'GET',signal:ctrl.signal,credentials:'omit'});if(!r.ok)throw Error('HTTP '+r.status);return await r.json()}finally{clearTimeout(timeout)}}\n// v7.3: The only lookup box is the Chinese-name field. Never search mid-IME composition.\nlet wikiTimer=null,wikiSeq=0,wikiComposing=false;\nfunction cancelWikiLookup(){if(wikiTimer!==null)clearTimeout(wikiTimer);wikiTimer=null;wikiSeq++}\nfunction scheduleWikiLookup(value){\n if(wikiComposing)return;\n cancelWikiLookup();\n const q=String(value||'').trim();\n const status=$('#wikiStatus'),results=$('#wikiResults');\n if(status)status.textContent='';if(results)results.replaceChildren();\n wikiCandidates=[];\n if(q.length<2)return;\n const seq=wikiSeq;\n wikiTimer=setTimeout(()=>{wikiTimer=null;wikiSearch(q,seq)},750);\n}\n// Display Chinese Wikipedia's Traditional Chinese (Taiwan) variant, not raw zh/zh-cn content.\n// Wikidata is queried in Traditional Chinese first; do not use a zh-cn label as a translation.\nconst traditionalLabel=labels=>labels?.['zh-hant']?.value||labels?.['zh-tw']?.value||'';\nconst traditionalDescription=descs=>descs?.['zh-hant']?.value||descs?.['zh-tw']?.value||'';\nconst makeZhWikiUrl=title=>`https://zh.wikipedia.org/zh-tw/${encodeURIComponent(String(title).replace(/\\s+/g,'_'))}`;\nasync function localizeWikiCandidates(candidates,seq){\n const ids=[...new Set(candidates.map(w=>w.qid).filter(Boolean))];\n if(!ids.length)return;\n const p=new URLSearchParams({action:'wbgetentities',ids:ids.join('|'),props:'labels|descriptions|sitelinks',languages:'zh-hant|zh-tw|en',sitefilter:'zhwiki',format:'json',origin:'*'});\n try{\n  const j=await fetchJson('https://www.wikidata.org/w/api.php?'+p);\n  if(seq!==wikiSeq)return;\n  for(const w of candidates){\n   const wd=j.entities?.[w.qid];if(!wd)continue;\n   w.tradTitle=traditionalLabel(wd.labels)||'';\n   w.tradDescription=traditionalDescription(wd.descriptions)||'';\n   w.zhTitle=wd.sitelinks?.zhwiki?.title||'';\n  }\n }catch(e){/* Search can still work without Wikidata translations. */}\n}\nasync function wikiSearch(q,seq){\n if(seq!==wikiSeq||!$('#eventZh'))return;\n const status=$('#wikiStatus'),results=$('#wikiResults');\n status.textContent='正在查詢維基百科…';\n const lang=/[\\u3400-\\u9fff]/.test(q)?'zh':'en';\n const p=new URLSearchParams({action:'query',generator:'search',gsrsearch:q,gsrlimit:'5',prop:'pageprops|extracts',exintro:'1',exsentences:'2',explaintext:'1',format:'json',origin:'*',redirects:'1'});\n if(lang==='zh'){\n  p.set('variant','zh-tw');p.set('uselang','zh-tw');p.set('converttitles','1');\n }\n try{\n  const j=await fetchJson(`https://${lang}.wikipedia.org/w/api.php?${p}`);\n  if(seq!==wikiSeq||!$('#eventZh')||$('#eventZh').value.trim()!==q)return;\n  const pages=Object.values(j.query?.pages||{}).sort((a,b)=>(a.index||0)-(b.index||0));\n  wikiCandidates=pages.map(x=>({title:x.title,excerpt:(x.extract||'').replace(/\\s+/g,' ').slice(0,320),qid:x.pageprops?.wikibase_item||'',lang,pageid:x.pageid,tradTitle:'',tradDescription:'',zhTitle:''}));\n  if(!wikiCandidates.length){status.textContent='沒有找到相符條目，仍可手動填寫。';return}\n  await localizeWikiCandidates(wikiCandidates,seq);\n  if(seq!==wikiSeq||!$('#eventZh')||$('#eventZh').value.trim()!==q)return;\n  const clean=s=>String(s||'').trim().toLocaleLowerCase().replace(/[\\s·・‧]/g,'');\n  const exact=wikiCandidates.findIndex(w=>clean(w.title)===clean(q)||clean(w.tradTitle)===clean(q));\n  if(exact>=0&&wikiCandidates[exact].qid){\n   await selectWiki(exact,{auto:true,seq});\n   return;\n  }\n  status.textContent='找到相近條目，請點選正確的一筆：';\n  results.innerHTML=wikiCandidates.slice(0,4).map((w,i)=>{\n   const title=w.tradTitle||(w.lang==='zh'?w.title:'維基百科條目');\n   const description=w.lang==='zh'?(w.excerpt||w.tradDescription):(w.tradDescription||'可點選後讀取中文資料');\n   return `<div class=\"wiki-result\"><div class=\"wiki-result-main\"><b>${esc(title)}</b><small>${esc(description.slice(0,180))}</small></div><button type=\"button\" data-wiki=\"${i}\">套用</button></div>`;\n  }).join('');\n  results.querySelectorAll('[data-wiki]').forEach(el=>el.onclick=()=>selectWiki(Number(el.dataset.wiki),{auto:false,seq}));\n }catch(err){\n  if(seq!==wikiSeq||!$('#wikiStatus'))return;\n  status.textContent='維基百科暫時無法連線，仍可手動填寫。';\n }\n}\nasync function traditionalArticleSummary(w,seq){\n if(w.lang==='zh')return w.excerpt||w.tradDescription||'';\n if(!w.zhTitle)return w.tradDescription||'';\n const p=new URLSearchParams({action:'query',titles:w.zhTitle,prop:'extracts',exintro:'1',exsentences:'2',explaintext:'1',format:'json',origin:'*',redirects:'1',variant:'zh-tw',uselang:'zh-tw',converttitles:'1'});\n try{\n  const j=await fetchJson('https://zh.wikipedia.org/w/api.php?'+p);\n  if(seq!==wikiSeq)return '';\n  const page=Object.values(j.query?.pages||{})[0];\n  return (page?.extract||w.tradDescription||'').replace(/\\s+/g,' ').slice(0,320);\n }catch(e){return w.tradDescription||''}\n}\nfunction suggestYearsFromWikiIntro(text,lang){\n const intro=(text||'').slice(0,245);let dates=[];\n if(lang==='zh'){\n  let re=/(?:公元前|西元前|前)?[0-9]{1,4}年/g,match;\n  while((match=re.exec(intro))!==null&&dates.length<4){const raw=match[0];const n=Number(raw.match(/[0-9]+/)[0]);if(n===0)continue;dates.push({year:/前/.test(raw)?-n:n,index:match.index,end:re.lastIndex})}\n }else{\n  let re=/\\b([0-9]{3,4})\\s*(BC|BCE|AD|CE)?\\b/gi,match;\n  while((match=re.exec(intro))!==null&&dates.length<4){const n=Number(match[1]);if(n===0)continue;dates.push({year:/^BC/i.test(match[2]||'')?-n:n,index:match.index,end:re.lastIndex})}\n }\n if(!dates.length)return null;\n if(dates.length>=2){let between=intro.slice(dates[0].end,dates[1].index);if(between.length<=12&&/^[\\s\\u2013\\u2014\\-~～—－至到]+$/.test(between)&&dates[1].year>=dates[0].year)return {start:dates[0].year,end:dates[1].year};}\n return dates[0].index<=135?{start:dates[0].year,end:null}:null;\n}\nconst wikidataDate=cl=>{const ordered=[...(cl||[])].filter(x=>x.rank!=='deprecated').sort((a,b)=>(a.rank==='preferred'?-1:1)-(b.rank==='preferred'?-1:1));for(let x of ordered){const d=x.mainsnak?.datavalue?.value;if(d&&typeof d.time==='string'){let m=d.time.match(/^([+-])(\\d{1,16})-/);if(!m)continue;let y=Number(m[2]);if(!y&&m[1]==='-')y=1;if(m[1]==='-')y=-y;if(isYear(y))return {year:y,precision:d.precision||9,raw:d.time}}}return null};\nasync function selectWiki(index,{auto=false,seq=wikiSeq}={}){\n const w=wikiCandidates[index];if(!w||seq!==wikiSeq||!$('#eventZh'))return;\n const status=$('#wikiStatus'),query=$('#eventZh').value.trim();\n const setField=(id,value)=>{const field=$('#'+id);if(field&&value!=null&&!field.value.trim())field.value=String(value)};\n status.textContent='正在讀取維基年代…';\n const applyArticle=(tradTitle,summary,source)=>{\n  if(tradTitle){\n   // An explicit candidate selection can normalize the search keyword to a Chinese name.\n   if(!auto||w.lang==='en'||(w.lang==='zh'&&w.title===query&&tradTitle!==query)){\n    const f=$('#eventZh');if(f&&f.value.trim()===query)f.value=tradTitle;\n   }\n  }\n  setField('eventSource',source);\n  setField('eventNotes',String(summary||'').slice(0,210));\n };\n let wd=null;\n if(w.qid){\n  const p=new URLSearchParams({action:'wbgetentities',ids:w.qid,props:'claims|labels|descriptions|sitelinks',languages:'zh-hant|zh-tw|en',sitefilter:'zhwiki',format:'json',origin:'*'});\n  try{\n   const j=await fetchJson('https://www.wikidata.org/w/api.php?'+p);\n   wd=j.entities?.[w.qid]||null;\n   if(wd){\n    w.tradTitle=traditionalLabel(wd.labels)||w.tradTitle;\n    w.tradDescription=traditionalDescription(wd.descriptions)||w.tradDescription;\n    w.zhTitle=wd.sitelinks?.zhwiki?.title||w.zhTitle;\n   }\n  }catch(e){/* Continue to use the article when Wikidata is unavailable. */}\n }\n if(seq!==wikiSeq||!$('#eventZh')||$('#eventZh').value.trim()!==query)return;\n const tradTitle=w.tradTitle||(w.lang==='zh'?w.title:'');\n const source=(w.zhTitle||w.lang==='zh')?makeZhWikiUrl(w.zhTitle||w.title):`https://${w.lang}.wikipedia.org/?curid=${encodeURIComponent(w.pageid)}`;\n const summary=await traditionalArticleSummary(w,seq);\n if(seq!==wikiSeq||!$('#eventZh')||$('#eventZh').value.trim()!==query)return;\n applyArticle(tradTitle,summary,source);\n const c=wd?.claims||{};\n const start=wikidataDate(c.P580)||wikidataDate(c.P571)||wikidataDate(c.P585)||wikidataDate(c.P577);\n const end=wikidataDate(c.P582)||wikidataDate(c.P576);\n setField('eventEn',wd?.labels?.en?.value||((w.lang==='en')?w.title:null));\n if(start)setField('eventStart',start.year);\n if(end)setField('eventEnd',end.year);\n if(start&&start.precision<=8&&$('#eventPrecision')?.value==='確定'&&!$('#eventStart').dataset.manuallyEdited)$('#eventPrecision').value='約';\n const count=(start?1:0)+(end?1:0);\n if(count)status.textContent=`已帶入繁體中文維基資料${count===2?'與起訖年份':'；請確認年份'}，原有內容不會被覆蓋。`;\n else if(tradTitle||summary)status.textContent='已帶入繁體中文資訊；維基沒有可直接讀取的起訖年，請手動確認。';\n else status.textContent='找到維基條目，但沒有繁體中文資料或可讀取的年代，請手動填寫。';\n if(!auto)$('#wikiResults').replaceChildren();\n}\nfunction manageRegions(){if(!historyOwner){notify('僅管理者能修改地區');return;}let html=`<div class=\"section-caption\" style=\"margin-bottom:12px\">EDIT GEOGRAPHY · 自由編輯子地區</div><div id=\"manageRegionList\">${regionManagerRows()}</div><div class=\"add-region-row\"><select id=\"newParent\">${data.continents.map(c=>`<option value=\"${esc(c.id)}\">${esc(c.name)}</option>`).join('')}</select><input id=\"newRegionName\" placeholder=\"新國家 / 地區名稱\" maxlength=\"70\"><button type=\"button\" class=\"button small primary\" id=\"insertRegion\">＋ 加入</button></div><div class=\"manage-warning\">刪除地區時，已建立事件上的該地區標籤會同步移除；若事件沒有其他標籤，則會改歸原本的洲。五大洲主分類固定保留。</div>`;\n openModal('管理國家與地區','以五大洲為基礎，修改其下歷史文化區域。',html,'<button type=\"button\" class=\"button primary\" id=\"regionDone\">完成</button>');$('#regionDone').onclick=closeModal;$('#insertRegion').onclick=()=>{let name=$('#newRegionName').value.trim();let c=data.continents.find(c=>c.id===$('#newParent').value);if(!name||!c){notify('請輸入地區名稱');return}if(data.continents.some(z=>z.children.some(k=>k.name===name))){notify('已有同名地區');return}c.children.push({id:'geo_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6),name});save();refreshRegionModal();render();$('#newRegionName').value='';notify('已新增地區')};\n attachManageHandlers()}\nfunction regionManagerRows(){return data.continents.map(c=>`<section class=\"region-manage-group\"><h4><span class=\"dot\" style=\"background:${esc(c.color)}\"></span> ${esc(c.name)}</h4>${c.children.map(k=>`<div class=\"manage-row\" data-region-id=\"${esc(k.id)}\"><input aria-label=\"地區名稱\" value=\"${esc(k.name)}\" maxlength=\"70\"><select aria-label=\"所屬洲\">${data.continents.map(z=>`<option value=\"${esc(z.id)}\" ${z.id===c.id?'selected':''}>${esc(z.name)}</option>`).join('')}</select><button type=\"button\" data-save-region=\"${esc(k.id)}\" title=\"更新\">儲存</button><button type=\"button\" data-delete-region=\"${esc(k.id)}\" class=\"remove\" title=\"刪除\">×</button></div>`).join('')||'<div class=\"form-help\">尚未新增子地區</div>'}</section>`).join('')}\nfunction refreshRegionModal(){$('#manageRegionList').innerHTML=regionManagerRows();attachManageHandlers()}\nfunction attachManageHandlers(){$$('[data-save-region]').forEach(b=>b.onclick=()=>{const id=b.dataset.saveRegion,old=findContinent(id);if(!old)return;const row=b.closest('.manage-row'),name=row.querySelector('input').value.trim(),parent=row.querySelector('select').value;if(!name){notify('地區名稱不能空白');return}let r=old.children.find(k=>k.id===id);if(!r)return;let target=data.continents.find(c=>c.id===parent);r.name=name;if(old.id!==target.id){old.children=old.children.filter(x=>x.id!==id);target.children.push(r)}save();refreshRegionModal();render();notify('地區已更新')});\n $$('[data-delete-region]').forEach(b=>b.onclick=()=>{let id=b.dataset.deleteRegion,parent=findContinent(id),r=parent?.children.find(r=>r.id===id);if(!r)return;let assigned=data.events.filter(e=>e.regionIds.includes(id)).length;if(!confirm(`刪除「${r.name}」？${assigned?`\\n有 ${assigned} 個事件使用這個標籤，將改歸「${parent.name}」。`:''}`))return;parent.children=parent.children.filter(x=>x.id!==id);data.events.forEach(e=>{if(e.regionIds.includes(id)){e.regionIds=e.regionIds.filter(x=>x!==id);if(!e.regionIds.length)e.regionIds=[parent.id]}});ui.selected=ui.selected.filter(x=>x!==id);if(ui.focus===id)ui.focus=parent.id;save();refreshRegionModal();render();notify('地區已刪除')})}\nfunction exportData(){let payload=JSON.stringify({...data,ui,exportedAt:new Date().toISOString()},null,2);let blob=new Blob([payload],{type:'application/json;charset=utf-8'});let u=URL.createObjectURL(blob);let a=document.createElement('a');a.href=u;a.download='history-atlas-backup-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500);notify('已匯出 JSON 備份')}\nfunction validateImport(obj){if(!obj||!Array.isArray(obj.continents)||!Array.isArray(obj.events)||obj.continents.length!==5||obj.events.length>20000)throw Error('資料格式不正確');for(let c of obj.continents){if(typeof c.name!=='string'||!Array.isArray(c.children)||typeof c.color!=='string'||c.children.length>1000)throw Error('洲別資料不完整')}for(let e of obj.events){if(typeof e.id!=='string'||typeof e.nameZh!=='string'||!isYear(e.start)||e.end!=null&&!isYear(e.end)||!Array.isArray(e.regionIds))throw Error('有事件欄位不完整')}return true}\nasync function importData(file){\n if(!file)return;\n try{\n  if(!historyOwner||!historyReady)throw Error('需要先以 Owner 身分登入');\n  let str=await file.text();if(str.length>9000000)throw Error('備份檔案過大');\n  let obj=JSON.parse(str);validateImport(obj);\n  const existingIds=new Set(data.events.map(x=>x.id));\n  const additions=obj.events.filter(e=>!existingIds.has(e.id));\n  const modifications=obj.events.filter(e=>existingIds.has(e.id)&&JSON.stringify(data.events.find(x=>x.id===e.id))!==JSON.stringify(e));\n  const msg=`這次備份含 ${obj.events.length} 個歷史事件。將新增 ${additions.length} 筆、更新 ${modifications.length} 筆。\\n\\n不會刪除任何雲端已有但備份未包含的事件。你可先按「匯出備份」保留目前雲端資料。\\n\\n確定合併進 Supabase？`;\n  if(!confirm(msg))return;\n  const byId=new Map(data.events.map(e=>[e.id,e]));\n  // Preserve every existing cloud event not present in this backup.\n  for(const event of obj.events){byId.set(event.id,event)}\n  data.events=[...byId.values()];\n  // Merge added countries by region ID, never delete cloud-only regions.\n  for(const sourceCont of obj.continents){const current=data.continents.find(c=>c.id===sourceCont.id);if(!current)continue;const byRegion=new Map(current.children.map(c=>[c.id,c]));for(const item of sourceCont.children){byRegion.set(item.id,item)}current.children=[...byRegion.values()]}\n  normalizeIslamicTermsV90();\n  await historyCommitNow();render();notify(`已合併 ${obj.events.length} 筆備份內容至 Supabase`);\n }catch(e){notify('匯入失敗：'+e.message)}finally{$('#fileInput').value=''}\n}\nfunction choosePreset(k){const preset={egypt:[-2800,-1],persia:[-650,710],greek:[-610,-270],alexander:[-450,-280],rome:[-840,600],'rome-split':[180,1510],early:[-1100,250],middle:[500,1380],recent:[1500,2026]};if(k==='full'){let a=data.events.map(e=>e.start),b=data.events.map(e=>effectiveEnd(e));ui.start=Math.floor(Math.min(...a,-2750)/100)*100;ui.end=Math.max(...b,1950)}else [ui.start,ui.end]=preset[k]||[ui.start,ui.end];save();render();if(k==='rome-split')eraScrollTo(395,'auto');if(k==='alexander')eraScrollTo(-334,'auto')}\n$$('[data-view]').forEach(b=>b.onclick=()=>{ui.view='time';save();render()});\n$$('[data-zoom]').forEach(b=>b.onclick=()=>setTimelineScale(b.dataset.zoom==='large'?4:b.dataset.zoom==='medium'?2:0));\n$$('[data-preset]').forEach(b=>b.onclick=()=>choosePreset(b.dataset.preset));\n$$('[data-quick-region]').forEach(button=>button.addEventListener('click',()=>setQuickRegion(button.dataset.quickRegion)));\n$('#mobileRegionToggle').onclick=()=>{const side=$('#regionSidebar');const expanded=side.classList.toggle('expanded');$('#mobileRegionToggle').setAttribute('aria-expanded',String(expanded));$('#mobileRegionToggle .mobile-region-arrow').textContent=expanded?'收合 ▴':'展開 ▾'};\n$('#clearFilter').onclick=()=>{ui.selected=[];ui.regionSelectionMode='all';save();render()};$('#clearSelection').onclick=()=>{ui.selected=[];ui.regionSelectionMode='none';save();render()};$('#manageRegions').onclick=manageRegions;$('#addEventTop').onclick=()=>{if(historyOwner&&historyReady)openEvent();else notify('雲端資料尚未就緒或未登入 Owner');};$('#exportBtn').onclick=exportData;$('#importBtn').onclick=()=>$('#fileInput').click();$('#fileInput').onchange=e=>importData(e.target.files[0]);\nbindInlineYearJump();\n$('#textSearch').oninput=e=>{let pos=e.target.selectionStart;ui.text=e.target.value;save();render();$('#textSearch').focus();try{$('#textSearch').setSelectionRange(pos,pos)}catch{}};\n// Pinch-zoom uses a stable parent to keep receiving pointers while the SVG is re-rendered.\n(function enablePinchZoom(){\n const surface=$('#mainContent');if(!surface)return;\n const active=new Map();let pinch=null;\n const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);\n const localX=clientX=>{const r=$('#eraScroll')?.getBoundingClientRect();return r?clientX-r.left:getEraViewportWidth()/2};\n const within=target=>!!target?.closest?.('#eraScroll');\n surface.addEventListener('pointerdown',ev=>{\n  if(ev.pointerType!=='touch'||!within(ev.target))return;\n  active.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});timelinePointerCount=active.size;\n  if(active.size===2){\n   timelineGestureWasPinch=true;\n   const [a,b]=[...active.values()],x=localX((a.x+b.x)/2),current=$('#eraScroll');\n   pinch={distance:distance(a,b),initial:SCALE_STEPS[scaleLevel()],focalYear:current?viewportYearFor(current,x):ui.centerYear,midX:x};\n   try{for(const id of active.keys())surface.setPointerCapture(id)}catch{}\n  }\n },true);\n surface.addEventListener('pointermove',ev=>{\n  if(!active.has(ev.pointerId))return;\n  active.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});\n  if(!pinch||active.size<2)return;\n  const [a,b]=[...active.values()];const d=distance(a,b);\n  if(pinch.distance<15||d<15)return;\n  const desired=pinch.initial*pinch.distance/d;\n  // Nearest log-scaled preset; physical pinch movement determines how far to zoom.\n  const next=SCALE_STEPS.reduce((best,years,i)=>Math.abs(Math.log(years/desired))<Math.abs(Math.log(SCALE_STEPS[best]/desired))?i:best,0);\n  if(next!==scaleLevel())setTimelineScale(next,pinch.focalYear,localX((a.x+b.x)/2));\n  if(ev.cancelable)ev.preventDefault();\n },{passive:false});\n const done=ev=>{\n  if(!active.has(ev.pointerId))return;\n  active.delete(ev.pointerId);timelinePointerCount=active.size;\n  if(active.size<2)pinch=null;\n  if(active.size===0){timelinePointerCount=0;timelineGestureWasPinch=false}\n  try{if(surface.hasPointerCapture(ev.pointerId))surface.releasePointerCapture(ev.pointerId)}catch{}\n };\n surface.addEventListener('pointerup',done);\n surface.addEventListener('pointercancel',done);\n surface.addEventListener('wheel',ev=>{\n  if(!(ev.ctrlKey||ev.metaKey)||!within(ev.target))return;\n  ev.preventDefault();\n  const pane=$('#eraScroll');if(!pane)return;\n  const x=localX(ev.clientX);setTimelineScale(scaleLevel()+(ev.deltaY<0?1:-1),viewportYearFor(pane,x),x);\n },{passive:false});\n})();\n$('#openScale').onclick=openScaleSheet;\ndocument.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#scaleBackdrop'))closeScaleSheet();else if($('#modalBackdrop'))closeModal()}});\nwindow.addEventListener('resize',()=>{clearTimeout(window._eraResize);window._eraResize=setTimeout(()=>{if(ui.view==='time')renderTime(filtered().filter(inWindow),{center:ui.centerYear})},180)});\n\n// v9.2 Cloud 1.9: fail-closed, conflict-checked cloud persistence.\nconst HISTORY_PROJECT_URL='https://trkzxallyzaaoaexltwy.supabase.co';\nconst HISTORY_PUBLISHABLE_KEY='sb_publishable_rix3nkE5cfvhf66QChzrhg_ieG2Jvri';\nconst HISTORY_AUTH_STORAGE='history-timeline-owner-session-v1';\nconst HISTORY_DEVICE_STORAGE='history-timeline-device-v1';\nconst HISTORY_DEVICE_ENDPOINT=HISTORY_PROJECT_URL+'/functions/v1/history-device-access';\nlet historyDeviceToken=null;\nconst HISTORY_AUTH_REDIRECT_URL='https://history-timeline-cfb.pages.dev/';\nlet historyOwner=false,historyReady=false,historyRemoteVersion=0,historyShadow=null;\nlet historySession=null,historyCommitTimer=null,historyInFlight=null,historyLastError=null;\nconst historySleep=ms=>new Promise(r=>setTimeout(r,ms));\nfunction historyStatus(message,failed=false){const el=$('#historyCloudState');el.textContent=message;el.classList.toggle('error',!!failed)}\nfunction historyControls(){document.body.classList.toggle('history-owner',historyOwner&&historyReady);const btn=$('#historySettingsBtn');btn.title=historyOwner?'設定 · Owner 已登入':'設定 · 訪客唯讀';btn.setAttribute('aria-label',historyOwner?'開啟設定（Owner 已登入）':'開啟設定（訪客）')}\nfunction historyHeaders(session=historySession){const h={'apikey':HISTORY_PUBLISHABLE_KEY,'Accept':'application/json'};if(session?.access_token)h.Authorization='Bearer '+session.access_token;return h}\nasync function historyRequest(path,options={},requiresAuth=false){\n if(historyDeviceToken&&requiresAuth){\n  if(path.startsWith('/rest/v1/history_settings')){const r=await historyDeviceApi('settings');return r.payload?[{payload:r.payload}]:[]}\n  if(path==='/rest/v1/rpc/history_apply_changes'){const r=await historyDeviceApi('commit',{payload:JSON.parse(options.body)});return r.version}\n  throw Error('裝置登入只能操作 History Atlas 已授權功能');\n }\n const headers={...historyHeaders(),...(options.headers||{})};let result=await fetch(HISTORY_PROJECT_URL+path,{...options,headers,cache:'no-store'});if(result.status===401&&requiresAuth&&historySession?.refresh_token){try{await historyRefreshSession();headers.Authorization='Bearer '+historySession.access_token;result=await fetch(HISTORY_PROJECT_URL+path,{...options,headers,cache:'no-store'})}catch{}}if(!result.ok){let detail=await result.text().catch(()=>'');try{const err=JSON.parse(detail);detail=err.message||err.msg||detail}catch{}throw Error(`${result.status} ${String(detail).slice(0,230)}`)}if(result.status===204)return null;return await result.json()}\nasync function historyFetchPaged(table){let rows=[],offset=0,pageSize=200;while(true){const batch=await historyRequest(`/rest/v1/${table}?select=id,payload,revision&order=id.asc&limit=${pageSize}&offset=${offset}`);rows.push(...batch);if(batch.length<pageSize)break;offset+=pageSize;if(offset>20000)throw Error('資料過多，停止讀取以免取得部分備份');}return rows}\nasync function historyLoadSnapshot({preserveUi=false}={}){\n const before=await historyRequest('/rest/v1/history_version_state?select=revision&id=eq.true');if(before.length!==1)throw Error('找不到雲端版本資訊');\n const version=Number(before[0].revision);\n const [events,continents]=await Promise.all([historyFetchPaged('history_events'),historyFetchPaged('history_continents')]);const after=await historyRequest('/rest/v1/history_version_state?select=revision&id=eq.true');\n if(Number(after?.[0]?.revision)!==version)throw Error('載入期間資料已更新，請重新整理');\n if(!events.length||continents.length!==5)throw Error('雲端資料不完整，不允許用本機資料覆蓋');\n const savedUi=preserveUi?deepClone(ui):deepClone(DEFAULT_UI);\n data={version:19,events:events.map(r=>r.payload),continents:continents.map(r=>r.payload)};\n ui={...deepClone(DEFAULT_UI),...savedUi};\n historyRemoteVersion=version;\n historyShadow={events:deepClone(data.events),continents:deepClone(data.continents),ui:deepClone(ui)};\n if(historyOwner){await historyLoadOwnerSettings()}\n render();historyReady=true;historyControls();\n historyStatus(`${data.events.length} 筆歷史資料 · Supabase 已同步 · ${historyOwner?'Owner 可編輯':'訪客唯讀'} · v9.2 Cloud 1.9`);\n}\nasync function historyLoadOwnerSettings(){if(!historyOwner)return;const arr=await historyRequest('/rest/v1/history_settings?select=payload&limit=1',{},true);if(arr.length){ui={...deepClone(DEFAULT_UI),...arr[0].payload};historyShadow.ui=deepClone(ui)}}\nfunction historyScheduleCommit(){if(!historyOwner||!historyReady)return;clearTimeout(historyCommitTimer);historyCommitTimer=setTimeout(()=>historyCommitNow().catch(e=>notify('同步失敗：'+e.message)),950)}\nfunction historyDiff(){const oldEvents=new Map((historyShadow?.events||[]).map(e=>[e.id,e]));const currEvents=new Map(data.events.map(e=>[e.id,e]));const changed=[];const deleted=[];for(const [id,e] of currEvents){if(!oldEvents.has(id)||JSON.stringify(oldEvents.get(id))!==JSON.stringify(e))changed.push(e)}for(const id of oldEvents.keys()){if(!currEvents.has(id))deleted.push(id)}const continents=JSON.stringify(data.continents)!==JSON.stringify(historyShadow?.continents)?data.continents:null;const settings=JSON.stringify(ui)!==JSON.stringify(historyShadow?.ui)?ui:null;return {changed,deleted,continents,settings}}\nasync function historyCommitNow(){\n if(!historyOwner||!historyReady)throw Error('需要登入 Owner 並保持網路連線');\n clearTimeout(historyCommitTimer);\n if(historyInFlight)await historyInFlight;\n const diff=historyDiff();if(!diff.changed.length&&!diff.deleted.length&&!diff.continents&&!diff.settings)return historyRemoteVersion;\n const payload={p_expected_revision:historyRemoteVersion,p_events:diff.changed,p_deleted:diff.deleted,p_continents:diff.continents,p_settings:diff.settings};\n const work=(async()=>{\n  historyStatus('正在安全寫入 Supabase…');\n  try{\n   const newVersion=await historyRequest('/rest/v1/rpc/history_apply_changes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)},true);\n   historyRemoteVersion=Number(newVersion);\n   // Capture only the committed snapshot, so subsequent UI changes queued during fetch are not lost.\n   const prevEvents=new Map(historyShadow.events.map(e=>[e.id,e]));for(const id of diff.deleted)prevEvents.delete(id);for(const e of diff.changed)prevEvents.set(e.id,deepClone(e));\n   historyShadow.events=[...prevEvents.values()];\n   if(diff.continents)historyShadow.continents=deepClone(diff.continents);\n   if(diff.settings)historyShadow.ui=deepClone(diff.settings);\n   historyStatus(`${data.events.length} 筆歷史資料 · Supabase 已同步 · Owner 可編輯 · v9.2 Cloud 1.9`);\n   return historyRemoteVersion;\n  }catch(e){historyLastError=e;historyStatus('資料未儲存：'+e.message+'。將重新取得雲端資料。',true);throw e}\n })();\n historyInFlight=work;\n try{return await work}catch(e){try{await historyLoadSnapshot({preserveUi:true})}catch(e2){historyStatus('連線異常，請勿繼續修改。'+e2.message,true);historyReady=false;historyControls()}throw e}finally{historyInFlight=null}\n}\nasync function historyAuthApi(path,body){const r=await fetch(HISTORY_PROJECT_URL+'/auth/v1/'+path,{method:'POST',headers:{apikey:HISTORY_PUBLISHABLE_KEY,'Content-Type':'application/json'},body:JSON.stringify(body),cache:'no-store'});const j=await r.json();if(!r.ok)throw Error(j.msg||j.message||j.error_description||String(r.status));return j}\nfunction historySaveSession(s){historySession={access_token:s.access_token,refresh_token:s.refresh_token,expires_at:Math.floor(Date.now()/1000)+Number(s.expires_in||3500),user:s.user};try{localStorage.setItem(HISTORY_AUTH_STORAGE,JSON.stringify(historySession))}catch{}}\nasync function historyLoginWithAuthResponse(auth){\n if(!auth?.access_token||!auth?.refresh_token)throw Error('登入連結未回傳完整驗證憑證');\n historyDeviceToken=null;try{localStorage.removeItem(HISTORY_DEVICE_STORAGE)}catch{};historySaveSession(auth);\n try{await historyCheckOwner()}catch(e){\n  historySession=null;historyOwner=false;\n  try{localStorage.removeItem(HISTORY_AUTH_STORAGE)}catch{}\n  historyControls();throw e;\n }\n}\nasync function historyConsumeMagicLink(){\n const hash=new URLSearchParams(location.hash.replace(/^#/,''));\n const access_token=hash.get('access_token'),refresh_token=hash.get('refresh_token');\n if(!access_token||!refresh_token)return false;\n // Clean sensitive tokens from address bar before making any network requests.\n history.replaceState(null,'',location.pathname+location.search);\n try{\n  await historyLoginWithAuthResponse({access_token,refresh_token,expires_in:Number(hash.get('expires_in')||3600)});\n  notify('Owner 登入成功');return true;\n }catch(e){historyStatus('登入連結未完成 Owner 驗證：'+e.message,true);return false;}\n}\nasync function historyLoginFromCopiedLink(text){\n let u;try{u=new URL(String(text||'').trim())}catch{throw Error('請貼上 Gmail 裡 Sign in 按鈕的完整連結')}\n if(u.origin!==HISTORY_PROJECT_URL||u.pathname!=='/auth/v1/verify')throw Error('登入連結不是本專案的 Supabase 驗證網址');\n const token_hash=u.searchParams.get('token_hash')||u.searchParams.get('token');\n const type=u.searchParams.get('type');\n if(!token_hash||!['magiclink','email'].includes(type))throw Error('此連結沒有可用的電子郵件登入憑證');\n const response=await historyAuthApi('verify',{token_hash,type});\n await historyLoginWithAuthResponse(response);\n}\nasync function historyRefreshSession(){if(!historySession?.refresh_token)throw Error('登入憑證已過期');let r=await historyAuthApi('token?grant_type=refresh_token',{refresh_token:historySession.refresh_token});if(!r.access_token)throw Error('無法更新登入');historySaveSession(r);return r}\nasync function historyCheckOwner(){const authorized=await historyRequest('/rest/v1/rpc/history_is_owner',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'},true);if(authorized!==true)throw Error('這個帳號沒有 History Timeline 管理權限');historyOwner=true;await historyLoadOwnerSettings();historyShadow.ui=deepClone(ui);historyControls();render();historyStatus(`${data.events.length} 筆 · Supabase 已同步 · Owner 可編輯`)}\nasync function historyDeviceApi(action,body={}){\n const headers={'Content-Type':'application/json',apikey:HISTORY_PUBLISHABLE_KEY};\n if(historyDeviceToken)headers['X-History-Device']=historyDeviceToken;\n else if(historySession?.access_token){headers.Authorization='Bearer '+historySession.access_token;}\n const res=await fetch(HISTORY_DEVICE_ENDPOINT,{method:'POST',headers,body:JSON.stringify({action,...body}),cache:'no-store'});\n const j=await res.json().catch(()=>({error:'invalid_response'}));\n if(!res.ok||j?.ok===false){if(res.status===401&&historyDeviceToken&&action!=='redeem'){historyDeviceToken=null;historyOwner=false;try{localStorage.removeItem(HISTORY_DEVICE_STORAGE)}catch{};historyControls()}throw Error(j.error||String(res.status))}\n return j;\n}\nasync function historyRestoreDevice(){\n let token;try{token=localStorage.getItem(HISTORY_DEVICE_STORAGE)}catch{}\n if(!token)return;\n historyDeviceToken=token;\n try{await historyDeviceApi('status');historyOwner=true;await historyLoadOwnerSettings();historyShadow.ui=deepClone(ui);historyControls();render();historyStatus(`${data.events.length} 筆 · 裝置已授權 · Owner 可編輯`)}\n catch(e){historyDeviceToken=null;historyOwner=false;historyControls();try{localStorage.removeItem(HISTORY_DEVICE_STORAGE)}catch{}}\n}\nasync function historyDeviceRedeem(code,name){\n const j=await historyDeviceApi('redeem',{code,device_name:name});\n if(!j.token)throw Error('未收到授權憑證');\n historySession=null;historyDeviceToken=j.token;\n try{localStorage.setItem(HISTORY_DEVICE_STORAGE,j.token)}catch{}\n await historyDeviceApi('status');\n historyOwner=true;await historyLoadOwnerSettings();historyShadow.ui=deepClone(ui);historyControls();render();historyStatus(`${data.events.length} 筆 · 裝置已授權 · Owner 可編輯`);\n}\nfunction historyDeviceName(){return (/Android|iPhone|iPad/i.test(navigator.userAgent)?'手機／平板':'電腦')+' · '+(/Edg\\//.test(navigator.userAgent)?'Edge':/Chrome\\//.test(navigator.userAgent)?'Chrome':/Safari\\//.test(navigator.userAgent)?'Safari':'瀏覽器')}\nasync function historyManageDevices(){\n if(!historyOwner)return historyOwnerDialog();\n const [devs,codes]=await Promise.all([historyDeviceApi('list'),historyDeviceApi('codes')]);\n const devices=devs.devices||[];\n const codeRows=(codes.codes||[]).map(c=>`<div class=\"form-help\">有效至 ${new Date(c.expires_at).toLocaleString('zh-TW')} <button class=\"button small\" data-cancel-code=\"${c.id}\" type=\"button\">取消</button></div>`).join('');\n const deviceRows=devices.map(d=>`<div style=\"display:flex;align-items:center;justify-content:space-between;gap:6px;padding:9px 0;border-bottom:1px solid #bbb5\"><div style=\"min-width:0\"><b>${esc(d.name)}</b><div class=\"form-help\">${esc(d.user_agent).slice(0,95)}</div><div class=\"form-help\">最近使用：${new Date(d.last_seen_at).toLocaleString('zh-TW')}${d.revoked_at?' · 已撤銷':''}</div></div><div style=\"display:flex;gap:4px;flex-wrap:wrap\">${d.revoked_at?'':`<button class=\"button small\" data-rename-device=\"${d.id}\">更名</button><button class=\"button small\" data-revoke-device=\"${d.id}\">撤銷</button>`}</div></div>`).join('');\n const html=`<div class=\"form-grid\"><div class=\"field span-2\"><label>Owner Email</label><div class=\"form-help\">tsaititi@gmail.com · 全部裝置登出仍可收 Magic Link 恢復</div></div><div class=\"field span-2\"><label>核發新裝置登入碼</label><p class=\"form-help\">6 位數 · 60 分鐘 · 使用一次失效 · 最多同時 3 組</p><button class=\"button primary\" id=\"histIssueCode\">＋ 核發登入碼</button><div id=\"histIssuedCode\" style=\"font-size:23px;letter-spacing:4px;font-weight:700;text-align:center;margin:10px\"></div>${codeRows}</div><div class=\"field span-2\"><label>已授權裝置</label>${deviceRows||'<p class=\"form-help\">目前沒有使用登入碼授權的裝置。以 Email 登入的裝置不計入此清單。</p>'}</div></div>`;\n openModal('成員與裝置','History Atlas 專用授權，不影響 Wordbook',html,'<button class=\"button primary\" id=\"histDevicesClose\">返回設定</button>');\n $('#histDevicesClose').onclick=historySettingsDialog;\n $('#histIssueCode').onclick=async()=>{const b=$('#histIssueCode');b.disabled=true;try{const r=await historyDeviceApi('issue');$('#histIssuedCode').textContent=r.code;notify('已核發一次性登入碼，請在新裝置輸入')}catch(e){notify('核發失敗：'+e.message)}finally{b.disabled=false}};\n $$('[data-revoke-device]').forEach(b=>b.onclick=async()=>{if(!confirm('確定撤銷此裝置的 History Atlas 授權？'))return;try{await historyDeviceApi('revoke',{id:b.dataset.revokeDevice});notify('裝置已撤銷');historyManageDevices()}catch(e){notify(e.message)}});\n $$('[data-rename-device]').forEach(b=>b.onclick=async()=>{const name=prompt('輸入裝置名稱（最多 80 字）');if(!name?.trim())return;try{await historyDeviceApi('rename',{id:b.dataset.renameDevice,name:name.trim()});historyManageDevices()}catch(e){notify(e.message)}});\n $$('[data-cancel-code]').forEach(b=>b.onclick=async()=>{try{await historyDeviceApi('revoke_code',{id:b.dataset.cancelCode});historyManageDevices()}catch(e){notify(e.message)}});\n}\nasync function historyRestoreOwner(){let stored=null;try{stored=JSON.parse(localStorage.getItem(HISTORY_AUTH_STORAGE)||'null')}catch{}if(!stored?.refresh_token)return;historySession=stored;try{if(!stored.access_token||Date.now()/1000>stored.expires_at-100)await historyRefreshSession();await historyCheckOwner()}catch(e){historySession=null;historyOwner=false;try{localStorage.removeItem(HISTORY_AUTH_STORAGE)}catch{}historyControls();historyStatus('已連線 Supabase · 訪客唯讀；Owner 請重新登入')}}\nfunction historySettingsDialog(){\n const active=historyOwner&&historyReady;\n const accountType=historyDeviceToken?'裝置登入碼授權':'Email / Magic Link';\n const icon=(name)=>name==='shield'?'<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 2 4.5 5v6c0 5.2 3 8.7 7.5 11 4.5-2.3 7.5-5.8 7.5-11V5L12 2Z\"/><path d=\"m8.6 12 2.3 2.4 4.7-5\"/></svg>':name==='devices'?'<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"2.5\" y=\"4\" width=\"14.5\" height=\"11.5\" rx=\"2\"/><path d=\"M7 19h5.5M9.8 15.5V19\"/><rect x=\"18.5\" y=\"9.5\" width=\"3.5\" height=\"10\" rx=\"1\"/></svg>':name==='logout'?'<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4\"/><path d=\"M14 16l4-4-4-4M18 12H8\"/></svg>':'<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4\"/><path d=\"m14 8 4 4-4 4M18 12H8\"/></svg>';\n const item=(id,kind,title,caption,extra='')=>`<button class=\"history-settings-action ${extra}\" id=\"${id}\" type=\"button\"><span class=\"history-settings-action-icon\">${icon(kind)}</span><span class=\"history-settings-action-text\"><b>${title}</b><small>${caption}</small></span><span class=\"history-settings-chevron\" aria-hidden=\"true\">›</span></button>`;\n const status=active?`<strong>Owner 已登入</strong><p>${historySession?.user?.email?esc(historySession.user.email):'tsaititi@gmail.com'} · ${esc(accountType)}</p>`:'<strong>訪客模式</strong><p>瀏覽所有事件；登入 Owner 後可編輯與管理裝置</p>';\n const body=`<div class=\"history-settings-profile\"><span class=\"history-settings-profile-icon\">${icon('shield')}</span><div>${status}</div></div><div class=\"history-settings-menu\">${active?item('histSettingsDevices','devices','成員與裝置','核發登入碼、查看裝置、重新命名或撤銷授權')+item('histSettingsLogout','logout','登出','退出此裝置的 History Atlas 管理模式','logout'):item('histSettingsLogin','login','Owner 登入','使用裝置登入碼、Email Magic Link 或密碼登入')}</div>`;\n openModal('設定','History Atlas · 帳號與裝置管理',body,'');\n if(active){\n  $('#histSettingsDevices').onclick=async()=>{try{await historyManageDevices()}catch(e){notify('無法開啟成員與裝置：'+e.message)}};\n  $('#histSettingsLogout').onclick=()=>{historyOwnerDialog();if(!historyOwner)closeModal()};\n }else $('#histSettingsLogin').onclick=historyOwnerDialog;\n}\nfunction historyOwnerDialog(){\n if(historyOwner){if(!confirm('要登出 History Timeline 管理模式嗎？'))return;historySession=null;historyDeviceToken=null;historyOwner=false;try{localStorage.removeItem(HISTORY_AUTH_STORAGE);localStorage.removeItem(HISTORY_DEVICE_STORAGE)}catch{}historyControls();historyStatus('Supabase 已連線 · 訪客唯讀');return}\n const html=`<div class=\"form-grid\">\n <div class=\"field span-2\"><label for=\"histDeviceCode\">新裝置一次性登入碼（6 位）</label><input id=\"histDeviceCode\" type=\"text\" inputmode=\"numeric\" maxlength=\"6\" pattern=\"[0-9]{6}\" autocomplete=\"one-time-code\" placeholder=\"由已登入的 Owner 核發\"></div>\n <div class=\"field span-2\"><label for=\"histNewDeviceName\">裝置名稱</label><input id=\"histNewDeviceName\" maxlength=\"80\" value=\"${esc(historyDeviceName())}\"></div>\n <div class=\"field span-2\"><label for=\"histEmail\">Owner 電子郵件</label><input id=\"histEmail\" type=\"email\" autocomplete=\"username\" placeholder=\"email@example.com\"></div>\n <div class=\"field span-2\"><label for=\"histPassword\">密碼（如已設定）</label><input id=\"histPassword\" type=\"password\" autocomplete=\"current-password\" placeholder=\"可使用 Wordbook 既有 Supabase 帳號密碼\"></div>\n <p class=\"form-help span-2\">沒有密碼？按「寄送登入連結」，在郵件中點 Sign in 即可登入。</p>\n <div class=\"field span-2\"><label for=\"histMagicLink\">Sign in 連結（備用）</label><input id=\"histMagicLink\" type=\"url\" inputmode=\"url\" autocapitalize=\"off\" autocomplete=\"off\" spellcheck=\"false\" placeholder=\"若郵件仍跳 localhost，長按 Sign in 複製連結，貼在這裡\"></div>\n <p class=\"form-help span-2\">登入連結只能使用一次，請勿分享。Owner 與 Wordbook 共用 Supabase 帳號，但資料編輯權限獨立。</p>\n </div>`;\n openModal('管理者登入','訪客可以檢視全部歷史事件；僅 Owner 可修改。',html,'<button class=\"button primary\" type=\"button\" id=\"histRedeemCode\">登入碼登入</button><button class=\"button\" type=\"button\" id=\"histSendOtp\">寄送登入連結</button><button class=\"button\" type=\"button\" id=\"histLoginLink\">使用連結登入</button><button class=\"button primary\" type=\"button\" id=\"histLogin\">密碼登入</button>');\n $('#histRedeemCode').onclick=async()=>{const code=$('#histDeviceCode').value.trim(),name=$('#histNewDeviceName').value.trim();const b=$('#histRedeemCode');if(!/^\\d{6}$/.test(code))return notify('請輸入 6 位數登入碼');b.disabled=true;try{await historyDeviceRedeem(code,name);closeModal();notify('裝置登入成功')}catch(e){notify('裝置登入失敗：'+e.message)}finally{if($('#histRedeemCode'))b.disabled=false}};\n $('#histSendOtp').onclick=async()=>{const email=$('#histEmail').value.trim(),btn=$('#histSendOtp');if(!email)return notify('請先填入 Email');btn.disabled=true;try{\n  const dest='otp?redirect_to='+encodeURIComponent(HISTORY_AUTH_REDIRECT_URL);\n  await historyAuthApi(dest,{email,create_user:false});notify('已寄送 Sign in 登入連結，請查看信箱');\n }catch(e){notify('寄送失敗：'+e.message)}finally{if($('#histSendOtp'))$('#histSendOtp').disabled=false}};\n $('#histLoginLink').onclick=async()=>{const link=$('#histMagicLink').value,btn=$('#histLoginLink');if(!link.trim())return notify('請先貼上郵件中的 Sign in 完整連結');btn.disabled=true;try{\n  await historyLoginFromCopiedLink(link);closeModal();notify('Owner 登入成功');\n }catch(e){notify('連結登入失敗：'+e.message)}finally{if($('#histLoginLink'))$('#histLoginLink').disabled=false}};\n $('#histLogin').onclick=async()=>{const email=$('#histEmail').value.trim(),pass=$('#histPassword').value,btn=$('#histLogin');if(!email||!pass)return notify('請輸入 Email 與密碼；沒有密碼請使用登入連結');btn.disabled=true;try{\n  await historyLoginWithAuthResponse(await historyAuthApi('token?grant_type=password',{email,password:pass}));closeModal();notify('Owner 登入成功');\n }catch(e){notify('登入失敗：'+e.message)}finally{if($('#histLogin'))$('#histLogin').disabled=false}};\n}\nasync function historyBoot(){historyReady=false;historyControls();historyStatus('正在讀取 Supabase，暫時只顯示原始範例…');try{await historyLoadSnapshot();if(!await historyConsumeMagicLink()){await historyRestoreOwner();if(!historyOwner)await historyRestoreDevice()}}catch(e){historyStatus('無法連線 Supabase。畫面是本機範例，只供檢視，無法儲存。'+e.message,true);historyReady=false;historyOwner=false;historyControls()}}\nfunction historySearchDialog(){\n openModal('搜尋歷史事件','搜尋中文、英文、歷史年代或說明，點選結果即可前往事件。',`<div class=\"history-search-dialog\"><div class=\"history-search-input-row\"><input id=\"historySearchInput\" type=\"search\" autocomplete=\"off\" placeholder=\"例如：克里米亞、甲午戰爭、1851\" aria-label=\"搜尋歷史事件\"><button class=\"button small\" id=\"historySearchClear\" type=\"button\">清除</button></div><div class=\"history-search-results\" id=\"historySearchResults\" aria-live=\"polite\"></div></div>`,'<button class=\"button primary\" id=\"historySearchDone\" type=\"button\">完成</button>');\n const input=$('#historySearchInput'),results=$('#historySearchResults');\n input.value=ui.text||'';\n const matches=()=>{\n  const q=input.value.trim().toLowerCase();\n  if(!q)return [];\n  return data.events.filter(e=>[e.nameZh,e.nameEn,e.shortName,e.type,e.notes,formatPeriod(e),...e.regionIds.map(nameFor)].join(' ').toLowerCase().includes(q)).sort((a,b)=>a.start-b.start).slice(0,40);\n };\n function openResult(event){\n  ui.text='';ui.selected=[];ui.regionSelectionMode='all';closeModal();render();\n  if(!applyYearJump(event.start))eraScrollTo(event.start,'auto');\n  openEvent(event.id);\n }\n function refresh(){\n  ui.text=input.value;render();\n  const rows=matches();\n  if(!input.value.trim()){results.innerHTML='<p class=\"form-help\">輸入關鍵字後顯示符合的歷史事件。</p>';return}\n  if(!rows.length){results.innerHTML='<p class=\"form-help\">沒有找到符合的事件，請換個關鍵字。</p>';return}\n  results.innerHTML=rows.map(e=>`<button type=\"button\" class=\"history-search-result\" data-history-result=\"${esc(e.id)}\"><strong>${esc(e.nameZh||e.nameEn)}</strong><small>${esc(formatPeriod(e))} · ${esc(e.regionIds.map(nameFor).join('、'))}</small></button>`).join('')+(rows.length===40?'<p class=\"form-help\">顯示前 40 筆，請輸入更精確的名稱。</p>':'');\n  results.querySelectorAll('[data-history-result]').forEach(button=>button.onclick=()=>{const item=data.events.find(e=>e.id===button.dataset.historyResult);if(item)openResult(item)});\n }\n input.oninput=refresh;\n input.onkeydown=event=>{if(event.key==='Enter'){event.preventDefault();const first=matches()[0];if(first)openResult(first)}};\n $('#historySearchClear').onclick=()=>{input.value='';refresh();input.focus()};\n $('#historySearchDone').onclick=closeModal;\n refresh();input.focus();\n}\n$('#historySearchBtn').onclick=historySearchDialog;\n$('#historySettingsBtn').onclick=historySettingsDialog;\nwindow.addEventListener('focus',async()=>{if(!historyReady||document.querySelector('#eventForm')||historyInFlight||historyCommitTimer)return;try{const r=await historyRequest('/rest/v1/history_version_state?select=revision&id=eq.true');if(r?.length&&Number(r[0].revision)!==historyRemoteVersion)await historyLoadSnapshot({preserveUi:!historyOwner})}catch(e){historyStatus('同步檢查失敗：'+e.message,true)}});\nhistoryBoot();\n\n</script>\n</body>\n</html>\n";
function __compile_client_script_without_execution__(){

'use strict';
const CONTINENTS=[{id:'asia',name:'亞洲',color:'#8fa69e',children:[['china','中國'],['korea','韓國'],['japan','日本'],['russia','俄羅斯'],['india','印度'],['persia','伊朗／波斯'],['turkey','土耳其／安那托利亞'],['mesopotamia','兩河流域（伊拉克）'],['levant','黎凡特'],['arabian-peninsula','阿拉伯半島'],['vietnam','越南'],['central-asia','中亞'],['mongolia','蒙古高原']]},{id:'africa',name:'非洲',color:'#b8a58c',children:[['egypt','埃及']]},{id:'europe',name:'歐洲',color:'#8fa6b5',children:[['greece','希臘'],['italy','義大利'],['germany','德國'],['france','法國'],['austria','奧地利'],['spain','西班牙'],['uk','英國'],['czechia','捷克'],['sweden','瑞典'],['belgium','比利時'],['netherlands','荷蘭'],['poland','波蘭'],['serbia','塞爾維亞'],['romania','羅馬尼亞'],['bulgaria','保加利亞'],['eastern-europe','東歐（含烏克蘭）']]},{id:'americas',name:'美洲',color:'#bc9d98',children:[['usa','美國'],['mexico','墨西哥'],['canada','加拿大'],['latin-america','中南美洲'],['cuba','古巴']]},{id:'oceania',name:'大洋洲',color:'#aaa0b4',children:[]}];
const SEED=[
 ['商','Shang dynasty',-1600,-1046,'朝代','商朝','約前1600年建立，早期紀年有不同學說。','約'],
 ['西周','Western Zhou',-1046,-771,'朝代','西周','約前1046年牧野之戰後建立；西周終於前771年。','約'],
 ['東周','Eastern Zhou',-770,-256,'朝代','东周','周王室東遷後的時期，包含春秋與部分戰國；戰國延續到前221年。','確定'],
 ['秦','Qin dynasty',-221,-207,'朝代','秦朝','前221年秦統一六國；滅亡年份常見前207年或前206年的不同標法。','確定'],
 ['西漢','Western Han',-202,9,'朝代','西汉','前202年劉邦即皇帝位；王莽建立新朝於西元9年。','確定'],
 ['新','Xin dynasty',9,23,'朝代','新朝','王莽建立的政權；23年覆亡，後有更始政權過渡至東漢。','確定'],
 ['東漢','Eastern Han',25,220,'朝代','东汉','西元25年劉秀稱帝；220年曹丕代漢。','確定'],
 ['魏晉南北朝','Three Kingdoms, Jin and Northern and Southern dynasties',220,589,'歷史時期','魏晋南北朝','綜合時期而非單一朝代；包含三國（220–280）、晉（266–420）、南北朝（420–589），多個政權曾並存。','確定'],
 ['隋','Sui dynasty',581,618,'朝代','隋朝','581年楊堅建隋；618年唐建立。隋的終結也有以619年為準的標示。','確定'],
 ['唐','Tang dynasty',618,907,'朝代','唐朝','618年建立、907年終結；690–705年間有武周政權。','確定'],
 ['五代十國','Five Dynasties and Ten Kingdoms',907,979,'歷史時期','五代十国','五代以907–960年為常見界線；十國中北漢直到979年才滅亡，此處顯示整段分裂期。','確定'],
 ['北宋','Northern Song',960,1127,'朝代','北宋','960年宋建立，1127年靖康之變後轉入南宋。','確定'],
 ['南宋','Southern Song',1127,1279,'朝代','南宋','1127年建立，1279年宋亡；與元朝1271–1279年重疊。','確定'],
 ['元','Yuan dynasty',1271,1368,'朝代','元朝','1271年忽必烈定國號大元，1368年元廷退出大都；蒙古帝國於1206年即已建立。','確定'],
 ['明','Ming dynasty',1368,1644,'朝代','明朝','1368年朱元璋建立明朝；1644年北京明廷終結，南明政權延續至1662年。','確定'],
 ['清','Qing dynasty',1636,1912,'朝代','清朝','1636年改國號為大清，1644年入關定都北京；後金始於1616年，1912年清帝退位。','確定']
];
const EGYPT_SEED=[
 {id:'eg_old_kingdom',nameZh:'古王國時期',nameEn:'Old Kingdom of Egypt',start:-2686,end:-2181,type:'歷史時期',source:'https://zh.wikipedia.org/wiki/古王國時期',notes:'古埃及第三至第六王朝，約前2686年至前2181年；著名的金字塔建造時期。之後進入第一中間期，並非直接接續中王國。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'eg_middle_kingdom',nameZh:'中王國時期',nameEn:'Middle Kingdom of Egypt',start:-2055,end:-1650,type:'歷史時期',source:'https://zh.wikipedia.org/wiki/中王國時期',notes:'採維基百科古埃及歷史分期表的約前2055年至前1650年；不同史學分期可能採前2040年至前1782年或其他區間。之後進入第二中間期。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'eg_new_kingdom',nameZh:'新王國時期',nameEn:'New Kingdom of Egypt',start:-1550,end:-1069,type:'歷史時期',source:'https://zh.wikipedia.org/wiki/新王國時期',notes:'古埃及第十八、十九與二十王朝，約前1550年至前1069年；年代因分期及研究方法而略有差異。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'eg_ptolemaic',nameZh:'托勒密王朝',nameEn:'Ptolemaic Kingdom',start:-305,end:-30,type:'朝代',source:'https://zh.wikipedia.org/wiki/托勒密王國',notes:'托勒密一世於前305年稱王，托勒密埃及延續至前30年被羅馬吞併。與新王國相隔數個不同歷史時期，本圖不會將其誤接為同一時期。',precision:'確定',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true}
];

// Ancient Egyptian milestones; dates follow commonly used chronologies.
const EGYPT_EVENT_SEED=[
 {id:'eg_great_pyramid',nameZh:'古夫金字塔建造',shortName:'古夫金字塔',nameEn:'Construction of the Great Pyramid of Giza',start:-2580,end:-2560,type:'建造工程',source:'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza',notes:'約前2580至前2560年，古埃及第四王朝法老古夫（Khufu）在位期間興建吉薩大金字塔。這是常見估算，實際建造起訖年代因埃及編年法不同而有歧異。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'eg_hatshepsut',nameZh:'哈特謝普蘇特在位',shortName:'哈特謝普蘇特',nameEn:'Reign of Hatshepsut',start:-1479,end:-1458,type:'在位期間',source:'https://en.wikipedia.org/wiki/Hatshepsut',notes:'約前1479至前1458年，先以攝政身分協助圖特摩斯三世，後成為女法老並共同統治；部分研究將正式採用法老王號定在約前1473年，故請勿將整段誤解為獨立單獨在位。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'eg_akhenaten_reform',nameZh:'阿肯那頓宗教改革',shortName:'阿肯那頓改革',nameEn:'Religious reforms of Akhenaten',start:-1348,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Akhenaten',notes:'約前1348年（阿蒙霍特普四世／阿肯那頓在位第5年）開始大力推行阿頓崇拜，後續在位期間逐步排擠傳統諸神崇拜。阿肯那頓在位年代常採前1353–前1336年，也有前1351–前1334年的編年。時間軸以改革起點標為單一年份節點。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'eg_tutankhamun',nameZh:'圖坦卡門在位',shortName:'圖坦卡門',nameEn:'Reign of Tutankhamun',start:-1332,end:-1323,type:'在位期間',source:'https://en.wikipedia.org/wiki/Tutankhamun',notes:'常用埃及編年為約前1332至前1323年；其他學者採用前1336–前1327年等日期。其統治期間恢復阿蒙等傳統宗教與祭祀。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'eg_kadesh',nameZh:'拉美西斯二世與西臺的卡迭石戰役',shortName:'卡迭石戰役',nameEn:'Battle of Kadesh (Ramesses II and Hittites)',start:-1274,end:null,type:'戰爭',source:'https://en.wikipedia.org/wiki/Battle_of_Kadesh',notes:'前1274年（常用埃及編年），拉美西斯二世率領埃及軍與西臺王穆瓦塔里二世在卡迭石（今敘利亞一帶）交戰，結果無決定性勝負。不要與較晚的埃及－西臺和約（約前1259年）混為同一事件。',precision:'確定',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'eg_abu_simbel',nameZh:'阿布辛貝神殿建造',shortName:'阿布辛貝神殿',nameEn:'Construction of Abu Simbel temples',start:-1264,end:-1244,type:'建造工程',source:'https://en.wikipedia.org/wiki/Abu_Simbel',notes:'拉美西斯二世時期開鑿阿布辛貝大神殿及小神殿，常見估算為約前1264至前1244年（約20年）；另有前1244至前1224年的估計。神殿位於努比亞，古代埃及南方邊境地區。',precision:'約',regionIds:['egypt'],sourceType:'wikipedia',isSeed:true}
];


// v5 · Iranian imperial periods and cross-regional Greek/Persian events. IDs remain stable across imports/upgrades.
const PERSIAN_GREEK_SEED=[
 {id:'ir_achaemenid',nameZh:'波斯第一帝國（阿契美尼德）',shortName:'第一帝國・阿契美尼德',nameEn:'Achaemenid Empire',start:-550,end:-330,type:'朝代',source:'https://en.wikipedia.org/wiki/Achaemenid_Empire',notes:'前550年居魯士二世推翻米底王國，建立阿契美尼德帝國；前330年亞歷山大大帝攻滅此王朝。「第一帝國」是本時間軸對三個古代伊朗主要帝國的簡化排序，不是所有史學資料都使用的正式編號。',precision:'確定',regionIds:['persia'],sourceType:'wikipedia',isSeed:true},
 {id:'ir_parthian',nameZh:'波斯第二帝國（安息／帕提亞）',shortName:'第二帝國・安息',nameEn:'Parthian (Arsacid) Empire',start:-247,end:224,type:'朝代',source:'https://en.wikipedia.org/wiki/Parthian_Empire',notes:'傳統編年約前247年至西元224年，阿爾沙克王朝／安息（帕提亞）帝國從塞琉古勢力下興起，並在224年被薩珊帝國取代。第二帝國為本圖的概括排序，並非通用的正式史學名稱。',precision:'約',regionIds:['persia'],sourceType:'wikipedia',isSeed:true},
 {id:'ir_sasanian',nameZh:'波斯第三帝國（薩珊）',shortName:'第三帝國・薩珊',nameEn:'Sasanian Empire',start:224,end:651,type:'朝代',source:'https://en.wikipedia.org/wiki/Sasanian_Empire',notes:'西元224年阿爾達希爾一世擊敗安息，薩珊帝國興起；651年末代君主伊嗣俟三世身亡，波斯帝國終結。「第三帝國」是本圖排列用語；薩珊在其他史學論述中亦常稱「第二波斯帝國」。',precision:'確定',regionIds:['persia'],sourceType:'wikipedia',isSeed:true},
 {id:'ir_conquest_egypt_525',nameZh:'波斯第一帝國征服埃及',shortName:'波斯征服埃及',nameEn:'First Achaemenid conquest of Egypt',start:-525,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Battle_of_Pelusium',notes:'前525年，阿契美尼德波斯帝國岡比西斯二世（Cambyses II）於佩魯西姆之戰擊敗埃及第二十六王朝，後攻占孟菲斯並控制埃及，形成埃及第二十七王朝（第一次波斯統治）。同一事件會同時顯示在伊朗／波斯與埃及時間帶。',precision:'確定',regionIds:['persia','egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'gr_alexander_empire',nameZh:'亞歷山大帝國',shortName:'亞歷山大帝國',nameEn:'Empire of Alexander the Great',start:-336,end:-323,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Alexander_the_Great',notes:'前336年亞歷山大三世繼承馬其頓王位，前334年開始進攻波斯，前330年波斯阿契美尼德王朝覆亡；前323年亞歷山大去世，帝國隨後逐漸分裂為繼業者政權。此處以亞歷山大本人統治期間前336至前323年標示，不代表其死後立即完全瓦解。',precision:'確定',regionIds:['greece'],sourceType:'wikipedia',showPeriodCallout:false,isSeed:true},
 {id:'gr_persian_wars',nameZh:'希波戰爭',shortName:'希波戰爭',nameEn:'Greco-Persian Wars',start:-499,end:-449,type:'戰爭',source:'https://en.wikipedia.org/wiki/Greco-Persian_Wars',notes:'常見的希波戰爭廣義編年為前499至前449年，以小亞細亞愛奧尼亞起義為起點。兩次重要波斯入侵希臘本土分別發生於前490與前480–前479年；亦有資料只將前492至前449年列為主要戰爭期間。',precision:'約',regionIds:['greece','persia'],sourceType:'wikipedia',isSeed:true},
 {id:'gr_marathon',nameZh:'馬拉松戰役',shortName:'馬拉松戰役',nameEn:'Battle of Marathon',start:-490,end:null,type:'戰爭',source:'https://en.wikipedia.org/wiki/Battle_of_Marathon',notes:'前490年希波戰爭中，雅典與普拉提亞聯軍在馬拉松平原擊敗大流士一世派出的波斯軍隊；這場戰役不是斯巴達主導的戰役。設為醒目戰役標記，點選可自行補充內容。',precision:'確定',regionIds:['greece','persia'],sourceType:'wikipedia',featured:true,isSeed:true},
 {id:'gr_thermopylae',nameZh:'溫泉關戰役（斯巴達）',shortName:'斯巴達・溫泉關',nameEn:'Battle of Thermopylae',start:-480,end:null,type:'戰爭',source:'https://en.wikipedia.org/wiki/Battle_of_Thermopylae',notes:'前480年，斯巴達國王列奧尼達一世率領的希臘城邦聯軍於溫泉關抵抗薛西斯一世的波斯軍隊。著名的「三百斯巴達勇士」只是聯軍的一部分，還有底比斯、塞斯皮亞等其他希臘城邦參戰；最終波斯突破防線。',precision:'確定',regionIds:['greece','persia'],sourceType:'wikipedia',featured:true,isSeed:true}
];



// v6 · Classical Greece, Alexander's campaigns, and branching Roman history.
// Rome's 395 CE division is a conventional visual milestone, not the first administrative separation.
const CLASSICAL_ROME_SEED=[
 {id:'gr_peloponnesian_war',nameZh:'伯羅奔尼撒戰爭',shortName:'伯羅奔尼撒戰爭',nameEn:'Peloponnesian War',start:-431,end:-404,type:'戰爭',source:'https://en.wikipedia.org/wiki/Peloponnesian_War',notes:'前431至前404年，雅典領導的提洛同盟與斯巴達領導的伯羅奔尼撒同盟交戰，雅典於前404年戰敗。此處使用一般所稱的第二次伯羅奔尼撒戰爭，而非前460–前445年的早期衝突。',precision:'確定',regionIds:['greece'],sourceType:'wikipedia',featured:true,isSeed:true},
 {id:'gr_chaeronea_338',nameZh:'馬其頓擊敗雅典（喀羅尼亞戰役）',shortName:'馬其頓擊敗雅典',nameEn:'Battle of Chaeronea (Philip II and Alexander)',start:-338,end:null,type:'戰爭',source:'https://en.wikipedia.org/wiki/Battle_of_Chaeronea_(338_BC)',notes:'前338年，馬其頓國王腓力二世率軍擊敗雅典、底比斯等希臘城邦聯軍，亞歷山大參戰。雅典此後受到馬其頓霸權制約，並未被亞歷山大直接滅亡或摧毀。前336年亞歷山大繼位後延續馬其頓在希臘的主導地位。使用此名稱是對「亞歷山大滅雅典」的史實校正。',precision:'確定',regionIds:['greece'],sourceType:'wikipedia',featured:true,isSeed:true},
 {id:'al_conquer_egypt_332',nameZh:'亞歷山大征服埃及',shortName:'亞歷山大入埃及',nameEn:'Alexander the Great conquers Egypt',start:-332,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Alexander_the_Great',notes:'前332年冬，亞歷山大率軍進入埃及，當地波斯總督馬札克斯投降；這代表埃及脫離阿契美尼德帝國統治。此事件與前331年亞歷山大港建立分開標記。',precision:'確定',regionIds:['greece','egypt','persia'],sourceType:'wikipedia',isSeed:true},
 {id:'al_found_alexandria_331',nameZh:'亞歷山大建立亞歷山大港',shortName:'建立亞歷山大港',nameEn:'Founding of Alexandria',start:-331,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Alexandria',notes:'亞歷山大在征服埃及後於前331年建立亞歷山大港（部分舊資料將其籌畫日期標為前332年）；它後來成為托勒密埃及的首都以及希臘化時代的重要文化中心。',precision:'確定',regionIds:['greece','egypt'],sourceType:'wikipedia',isSeed:true},
 {id:'al_achaemenid_defeat_330',nameZh:'亞歷山大攻滅波斯第一帝國',shortName:'亞歷山大滅波斯',nameEn:'Fall of the Achaemenid Empire to Alexander',start:-330,end:null,type:'重大事件',source:'https://en.wikipedia.org/wiki/Achaemenid_Empire',notes:'前331年亞歷山大在高加米拉戰役擊敗大流士三世，前330年占領波斯波利斯；同年大流士三世遇害，阿契美尼德帝國走向終結。此處以王朝終結的前330年為單一標記，征服波斯帝國全境仍是較長的軍事過程。',precision:'確定',regionIds:['greece','persia'],sourceType:'wikipedia',featured:true,isSeed:true},
 {id:'it_roman_kingdom',nameZh:'羅馬王政時期',shortName:'羅馬王政',nameEn:'Roman Kingdom',start:-753,end:-509,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Roman_Kingdom',notes:'依羅馬傳統建城紀年，前753年羅慕路斯建羅馬，至前509年推翻塔克文王朝而建立共和。早期羅馬王政史含傳說成分，並非每一年都獲考古史料確證。',precision:'約',regionIds:['italy'],sourceType:'wikipedia',isSeed:true},
 {id:'it_roman_republic',nameZh:'羅馬共和時期',shortName:'羅馬共和',nameEn:'Roman Republic',start:-509,end:-27,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Roman_Republic',notes:'傳統年代自前509年王政終結至前27年屋大維獲元老院授予奧古斯都尊號，羅馬共和轉入帝政（元首制）。',precision:'確定',regionIds:['italy'],sourceType:'wikipedia',isSeed:true},
 {id:'it_roman_empire',nameZh:'羅馬帝國（分治前）',shortName:'羅馬帝國',nameEn:'Roman Empire before the final imperial court division',start:-27,end:395,type:'歷史時期',source:'https://zh.wikipedia.org/wiki/羅馬帝國',notes:'前27年屋大維成為奧古斯都，為羅馬帝國元首制時代的常用起點。東西區域早已有行政分治與共治，但本圖為直觀呈現，將帝國主軸畫到395年狄奧多西一世去世後東西宮廷分治的慣用分期點；不意味著395年前一直完全單一行政管理。',precision:'確定',regionIds:['italy'],sourceType:'wikipedia',isSeed:true},
 {id:'it_west_roman',nameZh:'西羅馬帝國',shortName:'西羅馬',nameEn:'Western Roman Empire',start:395,end:476,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Western_Roman_Empire',notes:'採395年作為東西宮廷分治後的西部帝國起點；西元476年羅慕路斯・奧古斯都被廢黜，通常視為西羅馬帝國結束。西部帝國的東西分治在395年之前已多次存在；其他政治或法律編年有不同終點。',precision:'確定',regionIds:['italy'],sourceType:'wikipedia',romanBranch:'west',isSeed:true},
 {id:'it_east_roman',nameZh:'東羅馬帝國（拜占庭）',shortName:'東羅馬',nameEn:'Eastern Roman (Byzantine) Empire',start:395,end:1453,type:'歷史時期',source:'https://en.wikipedia.org/wiki/Byzantine_Empire',notes:'395年作為羅馬帝國東西宮廷分治後的慣用時間節點；東部帝國以君士坦丁堡（今伊斯坦堡）為中心，延續至1453年鄂圖曼攻陷君士坦丁堡。實際帝國東部行政中心較早形成；「拜占庭帝國」是後世的史學稱呼，其居民自認羅馬人。為讓羅馬分支易讀，義大利主軸保留此傳承，同時將事件標到土耳其地區。',precision:'確定',regionIds:['italy','turkey'],sourceType:'wikipedia',romanBranch:'east',isSeed:true}
];


// v7.5: Roman Republic/Empire milestones and cross-regional impact; stable IDs for future upgrades.
const ROMAN_MILESTONE_SEED = [
  {
    "id": "it_caesar_gaul",
    "nameZh": "凱撒征服高盧（高盧戰爭）",
    "shortName": "凱撒征服高盧",
    "nameEn": "Gallic Wars (Caesar conquers Gaul)",
    "start": -58,
    "end": -50,
    "type": "戰爭",
    "source": "https://en.wikipedia.org/wiki/Gallic_Wars",
    "notes": "前58至前50年，凱撒率羅馬軍隊對高盧各部族展開連年征戰。前52年阿萊西亞戰役擊敗維欽托利，是關鍵勝利；高盧大致相當於今日法國、比利時及鄰近地區，征服並非一次完成。",
    "precision": "確定",
    "regionIds": [
      "italy",
      "france"
    ],
    "sourceType": "reference",
    "isSeed": true
  },
  {
    "id": "it_caesar_assassination",
    "nameZh": "凱撒遇刺",
    "shortName": "凱撒遇刺",
    "nameEn": "Assassination of Julius Caesar",
    "start": -44,
    "end": null,
    "type": "重大事件",
    "source": "https://en.wikipedia.org/wiki/Assassination_of_Julius_Caesar",
    "notes": "前44年3月15日（羅馬三月十五日，Ides of March），凱撒在羅馬龐培劇院的元老院會議場所遭一群元老刺殺，羅馬共和國陷入進一步的政治衝突。",
    "precision": "確定",
    "regionIds": [
      "italy"
    ],
    "sourceType": "reference",
    "isSeed": true
  },
  {
    "id": "it_octavian_conquest_egypt",
    "nameZh": "屋大維征服埃及（托勒密王朝終結）",
    "shortName": "屋大維滅埃及",
    "nameEn": "Octavian annexes Egypt",
    "start": -30,
    "end": null,
    "type": "重大事件",
    "source": "https://en.wikipedia.org/wiki/Octavian",
    "notes": "前31年亞克興海戰後，屋大維在前30年攻下亞歷山大港。安東尼與克麗奧佩脫拉七世相繼身亡，托勒密王國終結，埃及納入羅馬統治。請與前27年屋大維獲封奧古斯都分開看待。",
    "precision": "確定",
    "regionIds": [
      "italy",
      "egypt"
    ],
    "sourceType": "reference",
    "isSeed": true
  },
  {
    "id": "it_augustus_27",
    "nameZh": "屋大維獲封奧古斯都（羅馬帝國開端）",
    "shortName": "屋大維稱帝",
    "nameEn": "Octavian receives the title Augustus",
    "start": -27,
    "end": null,
    "type": "重大事件",
    "source": "https://en.wikipedia.org/wiki/Augustus",
    "notes": "前27年羅馬元老院授予屋大維「奧古斯都」稱號，常用作羅馬共和轉入帝國元首制的起點；這不是後世君主式的單日加冕。前30年征服埃及是另一筆事件。",
    "precision": "確定",
    "regionIds": [
      "italy"
    ],
    "sourceType": "reference",
    "isSeed": true
  },
  {
    "id": "it_claudius_britain_43",
    "nameZh": "克勞迪烏斯入侵不列顛",
    "shortName": "征服不列顛",
    "nameEn": "Roman invasion of Britain under Claudius",
    "start": 43,
    "end": null,
    "type": "重大事件",
    "source": "https://www.english-heritage.org.uk/learn/story-of-england/romans/invasion",
    "notes": "西元43年，羅馬皇帝克勞迪烏斯下令入侵不列顛，首先控制今英格蘭東南部並建立羅馬不列顛行省。往後數十年才逐步擴張到英格蘭與威爾斯更廣區域，因此43年不代表整個英格蘭當年已完全被征服。",
    "precision": "確定",
    "regionIds": [
      "italy",
      "uk"
    ],
    "sourceType": "reference",
    "isSeed": true
  },
  {
    "id": "it_hadrians_wall_122",
    "nameZh": "哈德良長城建造",
    "shortName": "哈德良長城",
    "nameEn": "Construction of Hadrian's Wall",
    "start": 122,
    "end": 128,
    "type": "建造工程",
    "source": "https://www.english-heritage.org.uk/visit/places/hadrians-wall/hadrians-wall-history-and-stories/history/",
    "notes": "哈德良在西元122年到訪不列顛期間下令興建長城。主要建造工程至少持續六年，這裡以約122–128年表示；完整防禦工事在約130年時已大致完成。長城位於今日英格蘭北部，而非現代英格蘭與蘇格蘭的精確邊界。",
    "precision": "約",
    "regionIds": [
      "italy",
      "uk"
    ],
    "sourceType": "reference",
    "isSeed": true
  },
  {
    "id": "it_end_roman_britain_410",
    "nameZh": "羅馬結束對不列顛的統治",
    "shortName": "羅馬撤離不列顛",
    "nameEn": "End of Roman rule in Britain",
    "start": 410,
    "end": null,
    "type": "重大事件",
    "source": "https://production.english-heritage.org.uk/visit/inspire-me/why-did-the-romans-leave-britain/",
    "notes": "西元410年是羅馬在不列顛統治結束的常用分期：軍隊及中央行政的退出是四世紀末至五世紀初逐漸發生的過程。英國地方勢力於410年前後需自力防衛；羅馬居民並非在這一年集體離開。",
    "precision": "約",
    "regionIds": [
      "italy",
      "uk"
    ],
    "sourceType": "reference",
    "isSeed": true
  },
  {
    "id": "it_edict_milan_313",
    "nameZh": "米蘭敕令（君士坦丁與李錫尼）",
    "shortName": "米蘭敕令",
    "nameEn": "Edict of Milan",
    "start": 313,
    "end": null,
    "type": "重大事件",
    "source": "https://en.wikipedia.org/wiki/Edict_of_Milan",
    "notes": "西元313年，君士坦丁一世與李錫尼在米蘭達成宗教寬容政策，保障基督徒宗教實踐並允許歸還部分教會財產。常稱「米蘭敕令」，但實際文本與法律形式較複雜；313年並非基督教成為帝國國教的年份（傳統上以380年為關鍵）。",
    "precision": "確定",
    "regionIds": [
      "italy"
    ],
    "sourceType": "reference",
    "isSeed": true
  },
  {
    "id": "it_constantinople_330",
    "nameZh": "君士坦丁啟用新都君士坦丁堡",
    "shortName": "君士坦丁堡建都",
    "nameEn": "Dedication of Constantinople as new capital",
    "start": 330,
    "end": null,
    "type": "重大事件",
    "source": "https://blog.oup.com/2012/05/constantine-dedicates-constantinople/",
    "notes": "西元324年前後，君士坦丁開始將古城拜占庭擴建為「新羅馬」；西元330年5月11日舉行君士坦丁堡啟用典禮。此處將330年作為正式建都節點，並在義大利的羅馬歷史脈絡與今日土耳其所在地同步顯示。",
    "precision": "確定",
    "regionIds": [
      "italy",
      "turkey"
    ],
    "sourceType": "reference",
    "isSeed": true
  }
];
const ROMAN_MILESTONE_ALIASES = {
  "it_caesar_gaul": [
    "凱撒征服高盧",
    "高盧戰爭"
  ],
  "it_caesar_assassination": [
    "凱撒遇刺",
    "凱撒遇刺事件"
  ],
  "it_octavian_conquest_egypt": [
    "屋大維滅埃及",
    "屋大維征服埃及"
  ],
  "it_augustus_27": [
    "屋大維稱帝",
    "屋大維獲封奧古斯都",
    "奧古斯都建立羅馬帝國"
  ],
  "it_claudius_britain_43": [
    "克勞迪烏斯征服不列顛",
    "克勞迪烏斯入侵不列顛"
  ],
  "it_hadrians_wall_122": [
    "哈德良長城",
    "哈德良興建長城",
    "哈德良修長城"
  ],
  "it_end_roman_britain_410": [
    "羅馬撤離不列顛",
    "羅馬撤離英國",
    "羅馬退出不列顛"
  ],
  "it_edict_milan_313": [
    "米蘭敕令",
    "君士坦丁的米蘭敕令"
  ],
  "it_constantinople_330": [
    "君士坦丁堡建都",
    "君士坦丁營建新都",
    "君士坦丁建立新都"
  ]
};

const WEST_EUROPE_HISTORY_SEED=[
  {
    "id": "we_east_west_schism_1054",
    "nameZh": "東西教會大分裂",
    "nameEn": "East–West Schism",
    "start": 1054,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "italy",
      "greece"
    ],
    "notes": "1054年羅馬教廷與君士坦丁堡教會代表互相絕罰，常被視為天主教與東正教分裂的象徵性年份。教會疏離是數百年的過程，並非1054年才突然完全分裂。",
    "source": "https://en.wikipedia.org/wiki/East%E2%80%93West_Schism",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "東西教會分裂"
  },
  {
    "id": "we_luther_theses_1517",
    "nameZh": "馬丁・路德《九十五條論綱》",
    "nameEn": "Ninety-five Theses",
    "start": 1517,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "germany"
    ],
    "notes": "1517年，馬丁・路德提出對贖罪券等教會問題的九十五條神學論題，開啟宗教改革的重要爭議。「將文書釘在威登堡教堂門上」是傳統敘事，細節在史學上有討論。",
    "source": "https://www.britannica.com/topic/Lutheranism",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "九十五條論綱",
    "featured": true
  },
  {
    "id": "we_act_supremacy_1534",
    "nameZh": "英格蘭《至尊法案》與英國國教",
    "nameEn": "Act of Supremacy and Church of England",
    "start": 1534,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk"
    ],
    "notes": "1534年亨利八世時期英格蘭國會通過《至尊法案》，確認國王為英格蘭教會在地上的最高元首，英國宗教改革由此制度化；伊莉莎白一世1559年重新確立國教安排。",
    "source": "https://en.wikipedia.org/wiki/Acts_of_Supremacy",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "英國國教確立"
  },
  {
    "id": "we_jesuits_1540",
    "nameZh": "耶穌會獲教宗核准成立",
    "nameEn": "Founding of the Society of Jesus",
    "start": 1540,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "italy",
      "spain"
    ],
    "notes": "依納爵・羅耀拉等人於1534年在巴黎結盟立願，1540年9月27日教宗保祿三世正式核准耶穌會成為修會，成為天主教改革、教育及海外傳教的重要力量。",
    "source": "https://www.jesuits.global/2021/09/26/on-27-september-1540-the-society-of-jesus-received-papal-approval/",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "耶穌會成立"
  },
  {
    "id": "we_pilgrims_mayflower_1620",
    "nameZh": "新教徒乘五月花號抵達北美",
    "nameEn": "Pilgrims arrive on the Mayflower",
    "start": 1620,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk",
      "north-america"
    ],
    "notes": "1620年來自英格蘭的分離派清教徒及其他移民乘五月花號抵達北美，建立普利茅斯殖民地；並非所有乘客都是出於宗教理由而移居。",
    "source": "https://en.wikipedia.org/wiki/Mayflower",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "五月花號赴北美"
  },
  {
    "id": "we_puritan_migration_1630",
    "nameZh": "英國清教徒大遷徙至新英格蘭",
    "nameEn": "Puritan Great Migration",
    "start": 1630,
    "end": 1640,
    "type": "重大事件",
    "regionIds": [
      "uk",
      "north-america"
    ],
    "notes": "約1630至1640年，數以萬計的清教徒移民由英格蘭前往新英格蘭地區，波士頓與麻薩諸塞灣殖民地因此快速發展；與1620年的五月花號事件分開標示。",
    "source": "https://en.wikipedia.org/wiki/Puritans",
    "precision": "約",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "清教徒大遷徙"
  },
  {
    "id": "we_charlemagne_empire_800",
    "nameZh": "查理曼的加洛林帝國",
    "nameEn": "Carolingian Empire under Charlemagne",
    "start": 800,
    "end": 814,
    "type": "歷史時期",
    "regionIds": [
      "france",
      "germany"
    ],
    "notes": "查理曼768年即位法蘭克國王，800年在羅馬被教宗加冕為皇帝，814年去世。此色帶使用其「皇帝」任期800–814年，不等於法蘭克帝國於814年立即消失。",
    "source": "https://www.britannica.com/biography/Charlemagne",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "查理曼帝國"
  },
  {
    "id": "we_charlemagne_coronation_800",
    "nameZh": "查理曼在羅馬受教宗加冕",
    "nameEn": "Coronation of Charlemagne as emperor",
    "start": 800,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "italy",
      "france",
      "germany"
    ],
    "notes": "800年聖誕節，教宗良三世在羅馬加冕法蘭克國王查理曼為皇帝，重建西歐皇帝頭銜的政治象徵；他自768年起便統治法蘭克王國。",
    "source": "https://en.wikipedia.org/wiki/Charlemagne",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "查理曼加冕"
  },
  {
    "id": "we_treaty_verdun_843",
    "nameZh": "《凡爾登條約》瓜分法蘭克帝國",
    "nameEn": "Treaty of Verdun",
    "start": 843,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "france",
      "germany",
      "italy"
    ],
    "notes": "843年查理曼的三位孫子瓜分法蘭克帝國，形成西、中、東法蘭克。西法蘭克與東法蘭克是後來法國、德國的重要政治源頭，但不等於843年出現現代民族國家。",
    "source": "https://en.wikipedia.org/wiki/Treaty_of_Verdun",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "凡爾登條約",
    "featured": true
  },
  {
    "id": "we_west_francia_843",
    "nameZh": "西法蘭克王國",
    "nameEn": "West Francia",
    "start": 843,
    "end": 987,
    "type": "歷史時期",
    "regionIds": [
      "france"
    ],
    "notes": "843年凡爾登條約後形成西法蘭克，逐步發展為後世的法蘭西王國。987年于格・卡佩繼位是常用的政治史轉折點，並非當年才首次存在法蘭克王國。",
    "source": "https://en.wikipedia.org/wiki/West_Francia",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "西法蘭克"
  },
  {
    "id": "we_capet_987",
    "nameZh": "于格・卡佩即位與卡佩王朝開始",
    "nameEn": "Hugh Capet becomes King of the Franks",
    "start": 987,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "france"
    ],
    "notes": "987年于格・卡佩成為西法蘭克國王，開啟卡佩王朝。此事件常作為後世法國王權發展的關鍵年份，不意味現代法國國家瞬間成立。",
    "source": "https://en.wikipedia.org/wiki/Hugh_Capet",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "卡佩王朝開始"
  },
  {
    "id": "we_hundred_years_war_1337",
    "nameZh": "英法百年戰爭",
    "nameEn": "Hundred Years' War",
    "start": 1337,
    "end": 1453,
    "type": "戰爭",
    "regionIds": [
      "france",
      "uk"
    ],
    "notes": "1337–1453年間英格蘭與法蘭西王室及其盟友長期爭奪法國王位與領土，戰爭間有多次休戰。名稱「百年戰爭」為後人概稱，實際約116年。",
    "source": "https://en.wikipedia.org/wiki/Hundred_Years%27_War",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "百年戰爭",
    "featured": true
  },
  {
    "id": "we_war_three_henrys_1585",
    "nameZh": "三亨利之戰",
    "nameEn": "War of the Three Henrys",
    "start": 1585,
    "end": 1589,
    "type": "戰爭",
    "regionIds": [
      "france"
    ],
    "notes": "1585–1589年的法國宗教戰爭後期，法王亨利三世、吉斯公爵亨利、納瓦拉王亨利角逐權力。納瓦拉亨利於1589年繼位為亨利四世。部分論述以1587年起稱「三亨利之戰」。",
    "source": "https://en.wikipedia.org/wiki/War_of_the_Three_Henrys",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "三亨利之戰"
  },
  {
    "id": "we_bourbon_dynasty_1589",
    "nameZh": "法國波旁王朝（革命前）",
    "nameEn": "Bourbon dynasty in France before the Revolution",
    "start": 1589,
    "end": 1792,
    "type": "歷史時期",
    "regionIds": [
      "france"
    ],
    "notes": "1589年納瓦拉的亨利繼位為法國亨利四世，波旁王朝開始；1792年法國廢除君主制。波旁王朝後於1814/1815–1830年間曾復辟，本圖以革命前主段表示。",
    "source": "https://en.wikipedia.org/wiki/House_of_Bourbon",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "波旁王朝"
  },
  {
    "id": "we_bourbon_start_1589",
    "nameZh": "亨利四世繼位，波旁王朝開始",
    "nameEn": "Henry IV of France succeeds to the throne",
    "start": 1589,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "france"
    ],
    "notes": "1589年瓦盧瓦王朝的亨利三世遇刺後，納瓦拉的亨利成為法國亨利四世，是波旁王朝在法國統治的起點。其後仍需多年宗教戰爭才穩固政權。",
    "source": "https://en.wikipedia.org/wiki/Henry_IV_of_France",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "波旁王朝起點"
  },
  {
    "id": "we_louis14_personal_rule_1661",
    "nameZh": "太陽王路易十四親政與鼎盛時期",
    "nameEn": "Personal reign of Louis XIV",
    "start": 1661,
    "end": 1715,
    "type": "在位期間",
    "regionIds": [
      "france"
    ],
    "notes": "路易十四自1643年即位，1661年馬薩林死後開始親政至1715年去世；以凡爾賽宮、宮廷文化與集權統治聞名。所謂「鼎盛」不是有公認固定起訖的一段黃金年代，且後期戰爭負擔沉重。",
    "source": "https://en.wikipedia.org/wiki/Louis_XIV",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "太陽王親政"
  },
  {
    "id": "we_french_revolution_1789",
    "nameZh": "法國大革命",
    "nameEn": "French Revolution",
    "start": 1789,
    "end": 1799,
    "type": "重大事件",
    "regionIds": [
      "france"
    ],
    "notes": "法國大革命通常以1789年三級會議、巴士底獄事件為起點；此處採至1799年拿破崙霧月政變為止的常見廣義分期，期間君主制瓦解並經歷共和及恐怖統治。",
    "source": "https://en.wikipedia.org/wiki/French_Revolution",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "法國大革命",
    "featured": true
  },
  {
    "id": "we_napoleon_egypt_1798",
    "nameZh": "拿破崙遠征埃及",
    "nameEn": "French campaign in Egypt and Syria",
    "start": 1798,
    "end": 1801,
    "type": "戰爭",
    "regionIds": [
      "france",
      "egypt"
    ],
    "notes": "1798年拿破崙率法軍入侵當時受鄂圖曼名義宗主權管轄的埃及，1799年返回法國，但法國遠征軍直到1801年才投降撤離。1798年尼羅河海戰中法國艦隊受英軍重創。",
    "source": "https://en.wikipedia.org/wiki/French_campaign_in_Egypt_and_Syria",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "拿破崙遠征埃及"
  },
  {
    "id": "we_first_french_empire_1804",
    "nameZh": "拿破崙第一帝國",
    "nameEn": "First French Empire",
    "start": 1804,
    "end": 1814,
    "type": "歷史時期",
    "regionIds": [
      "france"
    ],
    "notes": "拿破崙於1804年建立法蘭西第一帝國，1814年首次退位；1815年百日復辟為短暫延續，於另一個條目標示，以免把1814至1815年的波旁復辟期誤作連續統治。",
    "source": "https://en.wikipedia.org/wiki/First_French_Empire",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "拿破崙帝國"
  },
  {
    "id": "we_trafalgar_1805",
    "nameZh": "特拉法加海戰",
    "nameEn": "Battle of Trafalgar",
    "start": 1805,
    "end": null,
    "type": "戰爭",
    "regionIds": [
      "uk",
      "france",
      "spain"
    ],
    "notes": "1805年10月21日，納爾遜率領的英國皇家海軍擊敗法國與西班牙聯合艦隊，鞏固英國海上優勢；納爾遜在戰鬥中陣亡。",
    "source": "https://en.wikipedia.org/wiki/Battle_of_Trafalgar",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "特拉法加海戰",
    "featured": true
  },
  {
    "id": "we_russia_campaign_1812",
    "nameZh": "拿破崙遠征俄國慘敗",
    "nameEn": "French invasion of Russia",
    "start": 1812,
    "end": null,
    "type": "戰爭",
    "regionIds": [
      "france",
      "russia"
    ],
    "notes": "1812年拿破崙的大軍侵入俄羅斯；俄軍持續撤退、補給困難、莫斯科大火及嚴冬撤退等因素共同導致法軍嚴重損失，並非單純「敗給冬天」。",
    "source": "https://en.wikipedia.org/wiki/French_invasion_of_Russia",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "拿破崙征俄",
    "featured": true
  },
  {
    "id": "we_hundred_days_1815",
    "nameZh": "拿破崙百日王朝",
    "nameEn": "Hundred Days",
    "start": 1815,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "france"
    ],
    "notes": "1815年3月拿破崙自厄爾巴島返回法國，再度統治約百日；6月18日滑鐵盧失敗後第二次退位。本事件標於1815年，實際歷時約三個月。",
    "source": "https://en.wikipedia.org/wiki/Hundred_Days",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "百日王朝"
  },
  {
    "id": "we_waterloo_1815",
    "nameZh": "滑鐵盧戰役",
    "nameEn": "Battle of Waterloo",
    "start": 1815,
    "end": null,
    "type": "戰爭",
    "regionIds": [
      "france",
      "uk",
      "germany",
      "belgium"
    ],
    "notes": "1815年6月18日，拿破崙在今比利時滑鐵盧附近敗於威靈頓統率的英國及盟軍與布呂歇爾的普魯士軍隊，百日王朝遂告結束。",
    "source": "https://en.wikipedia.org/wiki/Battle_of_Waterloo",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "滑鐵盧",
    "featured": true
  },
  {
    "id": "we_franco_prussian_war_1870",
    "nameZh": "普法戰爭",
    "nameEn": "Franco-Prussian War",
    "start": 1870,
    "end": 1871,
    "type": "戰爭",
    "regionIds": [
      "germany",
      "france"
    ],
    "notes": "1870–1871年普魯士及德意志諸邦與法國交戰；法軍色當大敗、拿破崙三世被俘，巴黎遭圍困，後續促成德意志帝國的建立。",
    "source": "https://en.wikipedia.org/wiki/Franco-Prussian_War",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "普法戰爭"
  },
  {
    "id": "we_sedan_1870",
    "nameZh": "色當會戰：法皇拿破崙三世被俘",
    "nameEn": "Battle of Sedan and capture of Napoleon III",
    "start": 1870,
    "end": null,
    "type": "戰爭",
    "regionIds": [
      "germany",
      "france"
    ],
    "notes": "1870年9月1日至2日色當會戰，法軍戰敗；被俘的是法國皇帝拿破崙三世，不是法國國王。這是第二帝國垮台的重要轉折。",
    "source": "https://en.wikipedia.org/wiki/Battle_of_Sedan",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "色當會戰・法皇被俘",
    "featured": true
  },
  {
    "id": "we_german_empire_1871",
    "nameZh": "凡爾賽宮宣布德意志帝國成立",
    "nameEn": "Proclamation of the German Empire at Versailles",
    "start": 1871,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "germany",
      "france"
    ],
    "notes": "1871年1月18日普魯士國王威廉一世在凡爾賽宮鏡廳被宣布為德意志皇帝。這是帝國成立的「宣告儀式」，不是教宗主持的宗教加冕。",
    "source": "https://en.chateauversailles.fr/discover/history/key-dates/proclamation-german-empire-1871",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "德意志帝國成立",
    "featured": true
  },
  {
    "id": "we_holy_roman_empire_962",
    "nameZh": "神聖羅馬帝國（奧托王朝起）",
    "nameEn": "Holy Roman Empire",
    "start": 962,
    "end": 1806,
    "type": "歷史時期",
    "regionIds": [
      "germany"
    ],
    "notes": "此圖以962年奧托一世在羅馬受教宗加冕為象徵性起點，1806年弗朗茨二世放棄帝號為終點。帝國疆域與政治性質跨世紀劇變，並不等於現代德國。",
    "source": "https://en.wikipedia.org/wiki/Holy_Roman_Empire",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "神聖羅馬帝國"
  },
  {
    "id": "we_otto_962",
    "nameZh": "奧托一世在羅馬受教宗加冕為皇帝",
    "nameEn": "Coronation of Otto I as Holy Roman Emperor",
    "start": 962,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "germany",
      "italy"
    ],
    "notes": "962年2月2日教宗若望十二世在羅馬加冕東法蘭克／德意志國王奧托一世為皇帝，常作為中世紀神聖羅馬帝國的重要起點。",
    "source": "https://www.britannica.com/biography/Otto-I",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "奧托一世加冕",
    "featured": true
  },
  {
    "id": "we_prague_defenestration_1618",
    "nameZh": "布拉格擲窗事件",
    "nameEn": "Defenestration of Prague (1618)",
    "start": 1618,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "czechia",
      "austria",
      "germany"
    ],
    "notes": "1618年5月23日波希米亞新教貴族在布拉格城堡把哈布斯堡皇帝的代表擲出窗外，引發波希米亞起義，是三十年戰爭的重要導火線。",
    "source": "https://en.wikipedia.org/wiki/Defenestrations_of_Prague",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "布拉格擲窗事件",
    "featured": true
  },
  {
    "id": "we_thirty_years_war_1618",
    "nameZh": "三十年戰爭",
    "nameEn": "Thirty Years' War",
    "start": 1618,
    "end": 1648,
    "type": "戰爭",
    "regionIds": [
      "germany",
      "austria",
      "czechia",
      "sweden",
      "france",
      "spain"
    ],
    "notes": "1618–1648年間以神聖羅馬帝國為中心的歐洲大戰，起因含宗教衝突，但隨時間演變為哈布斯堡、法國、瑞典等勢力的政治軍事爭霸；1648年以《西發里亞和約》為重要終點。",
    "source": "https://en.wikipedia.org/wiki/Thirty_Years%27_War",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "三十年戰爭",
    "featured": true
  },
  {
    "id": "we_prussia_kingdom_1701",
    "nameZh": "普魯士王國建立",
    "nameEn": "Kingdom of Prussia founded",
    "start": 1701,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "germany"
    ],
    "notes": "1701年1月18日霍亨索倫的腓特烈三世在柯尼斯堡加冕為「在普魯士的國王」腓特烈一世，普魯士王國成立；後逐漸成為德意志統一的主導力量。",
    "source": "https://en.wikipedia.org/wiki/Kingdom_of_Prussia",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "普魯士王國誕生"
  },
  {
    "id": "we_frederick_great_1740",
    "nameZh": "腓特烈大帝統治普魯士",
    "nameEn": "Reign of Frederick the Great",
    "start": 1740,
    "end": 1786,
    "type": "在位期間",
    "regionIds": [
      "germany"
    ],
    "notes": "腓特烈二世（腓特烈大帝）1740至1786年統治普魯士，憑西里西亞戰爭、七年戰爭及行政與文化措施提升普魯士國際地位。",
    "source": "https://en.wikipedia.org/wiki/Frederick_the_Great",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "腓特烈大帝"
  },
  {
    "id": "we_seven_years_war_1756",
    "nameZh": "七年戰爭",
    "nameEn": "Seven Years' War",
    "start": 1756,
    "end": 1763,
    "type": "戰爭",
    "regionIds": [
      "germany",
      "austria",
      "france",
      "uk",
      "russia",
      "north-america",
      "india"
    ],
    "notes": "1756–1763年的跨洲戰爭，腓特烈大帝率普魯士抵抗奧地利、法國、俄羅斯等國；英法同時在北美及印度交戰，因此不僅是普魯士的局部戰爭。",
    "source": "https://en.wikipedia.org/wiki/Seven_Years%27_War",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "七年戰爭",
    "featured": true
  },
  {
    "id": "we_francisII_1806",
    "nameZh": "弗朗茨二世放棄神聖羅馬皇帝稱號",
    "nameEn": "Dissolution of the Holy Roman Empire",
    "start": 1806,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "austria",
      "germany"
    ],
    "notes": "1806年8月6日，法國拿破崙勢力擴張後，弗朗茨二世放棄神聖羅馬皇帝頭銜並宣布帝國解體；他仍以弗朗茨一世繼續擔任奧地利皇帝。",
    "source": "https://en.wikipedia.org/wiki/Dissolution_of_the_Holy_Roman_Empire",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "神聖羅馬帝國終結",
    "featured": true
  },
  {
    "id": "we_bismarck_1862",
    "nameZh": "俾斯麥的鐵血政策與執政時期",
    "nameEn": "Otto von Bismarck in power",
    "start": 1862,
    "end": 1890,
    "type": "在位期間",
    "regionIds": [
      "germany"
    ],
    "notes": "俾斯麥1862年出任普魯士首相並發表「鐵與血」演說，1871年成為德意志帝國首任宰相，直到1890年卸任。兩階段官職不同，此處以掌權期間統合呈現。",
    "source": "https://en.wikipedia.org/wiki/Otto_von_Bismarck",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "鐵血宰相俾斯麥"
  },
  {
    "id": "we_heptarchy_600",
    "nameZh": "英格蘭盎格魯－撒克遜七王國時期",
    "nameEn": "Heptarchy in Anglo-Saxon England",
    "start": 600,
    "end": 829,
    "type": "歷史時期",
    "regionIds": [
      "uk"
    ],
    "notes": "約6至9世紀英格蘭多個盎格魯－撒克遜王國並立，傳統概稱肯特、薩塞克斯、埃塞克斯、東盎格利亞、威塞克斯、麥西亞、諾森布里亞「七王國」，但並非同一時間恰好只有七國；以約600–829年便於圖像化。",
    "source": "https://en.wikipedia.org/wiki/Heptarchy",
    "precision": "約",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "英格蘭七王國"
  },
  {
    "id": "we_lindisfarne_viking_793",
    "nameZh": "維京人襲擊林迪斯法恩",
    "nameEn": "Viking raid on Lindisfarne",
    "start": 793,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk"
    ],
    "notes": "793年維京人襲擊英格蘭東北的林迪斯法恩修道院，是後世常用的維京時代開端象徵；但北歐人在此之前也有航海活動，且此後侵襲與移民逐漸擴大。",
    "source": "https://en.wikipedia.org/wiki/Lindisfarne",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "維京人入侵起點"
  },
  {
    "id": "we_great_heathen_army_865",
    "nameZh": "維京「異教徒大軍」入侵英格蘭",
    "nameEn": "Great Heathen Army",
    "start": 865,
    "end": 878,
    "type": "戰爭",
    "regionIds": [
      "uk"
    ],
    "notes": "約865年大規模維京軍隊登陸英格蘭，陸續攻擊諾森布里亞、東盎格利亞與麥西亞，並與威塞克斯的阿佛列大帝對抗；878年後丹麥法區逐漸成形。",
    "source": "https://en.wikipedia.org/wiki/Great_Heathen_Army",
    "precision": "約",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "維京大軍入侵"
  },
  {
    "id": "we_england_united_927",
    "nameZh": "埃塞爾斯坦統一英格蘭王國",
    "nameEn": "Formation of the Kingdom of England",
    "start": 927,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk"
    ],
    "notes": "927年威塞克斯國王埃塞爾斯坦取得對諾森布里亞等地的控制，通常被視為統一英格蘭王國的重要年份；此前已有逐步統一的長期過程，後續王權亦曾反覆變動。",
    "source": "https://en.wikipedia.org/wiki/Kingdom_of_England",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "英格蘭王國誕生",
    "featured": true
  },
  {
    "id": "we_norman_conquest_1066",
    "nameZh": "諾曼第公爵威廉征服英格蘭",
    "nameEn": "Norman conquest of England",
    "start": 1066,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk",
      "france"
    ],
    "notes": "1066年諾曼第公爵威廉率軍渡海，在黑斯廷斯戰役擊敗哈羅德二世，後加冕為英格蘭國王威廉一世；軍事征服與政治整合在其後數年持續。",
    "source": "https://en.wikipedia.org/wiki/Norman_Conquest",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "諾曼征服",
    "featured": true
  },
  {
    "id": "we_magna_carta_1215",
    "nameZh": "英王約翰簽署《大憲章》",
    "nameEn": "Magna Carta",
    "start": 1215,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk"
    ],
    "notes": "1215年6月15日英格蘭國王約翰在蘭尼米德接受《大憲章》，最初主要協調國王與貴族的權利義務，後成為限制王權與法治傳統的象徵；1215年版本並非立即穩定生效。",
    "source": "https://commonslibrary.parliament.uk/research-briefings/cbp-11169/",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "《大憲章》",
    "featured": true
  },
  {
    "id": "we_wars_roses_1455",
    "nameZh": "英格蘭玫瑰戰爭",
    "nameEn": "Wars of the Roses",
    "start": 1455,
    "end": 1487,
    "type": "戰爭",
    "regionIds": [
      "uk"
    ],
    "notes": "1455–1487年英格蘭蘭開斯特與約克兩系王位繼承者爆發多次內戰；1485年博斯沃思原野之役亨利七世獲勝後都鐸王朝開始，部分殘餘衝突延至1487年。",
    "source": "https://en.wikipedia.org/wiki/Wars_of_the_Roses",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "玫瑰戰爭"
  },
  {
    "id": "we_tudor_dynasty_1485",
    "nameZh": "英格蘭都鐸王朝",
    "nameEn": "House of Tudor",
    "start": 1485,
    "end": 1603,
    "type": "朝代",
    "regionIds": [
      "uk"
    ],
    "notes": "1485年亨利七世擊敗理查三世並即位，開始都鐸王朝，直到1603年伊莉莎白一世逝世。1485年是王朝起點，但玫瑰戰爭的最後一次主要戰鬥在1487年。",
    "source": "https://en.wikipedia.org/wiki/House_of_Tudor",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "都鐸王朝"
  },
  {
    "id": "we_spanish_armada_1588",
    "nameZh": "英格蘭擊退西班牙無敵艦隊",
    "nameEn": "Spanish Armada defeated",
    "start": 1588,
    "end": null,
    "type": "戰爭",
    "regionIds": [
      "uk",
      "spain"
    ],
    "notes": "1588年西班牙艦隊計畫護送陸軍進攻英格蘭，但在海峽遭英國艦隊攻擊及風暴重創而失敗；不宜簡化為某一場海戰就摧毀全部艦隊。",
    "source": "https://en.wikipedia.org/wiki/Spanish_Armada",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "擊敗無敵艦隊",
    "featured": true
  },
  {
    "id": "we_english_civil_war_1642",
    "nameZh": "英國內戰（三次英格蘭內戰）",
    "nameEn": "English Civil War",
    "start": 1642,
    "end": 1651,
    "type": "戰爭",
    "regionIds": [
      "uk"
    ],
    "notes": "1642–1651年英格蘭王黨與議會派多次交戰，政治與宗教紛爭涉及蘇格蘭、愛爾蘭等地；查理一世在1649年被處死，事件另外標記。",
    "source": "https://www.english-heritage.org.uk/learn/histories/the-english-civil-wars-history-and-stories/the-english-civil-wars/",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "英國內戰"
  },
  {
    "id": "we_charlesI_execution_1649",
    "nameZh": "英王查理一世被處死",
    "nameEn": "Execution of Charles I",
    "start": 1649,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk"
    ],
    "notes": "1649年1月30日英格蘭國王查理一世因與議會衝突、經審判後在倫敦被公開處決，隨後英格蘭進入共和與護國公時期。",
    "source": "https://en.wikipedia.org/wiki/Execution_of_Charles_I",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "查理一世被處死",
    "featured": true
  },
  {
    "id": "we_glorious_rev_1688",
    "nameZh": "英國光榮革命",
    "nameEn": "Glorious Revolution",
    "start": 1688,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk",
      "netherlands"
    ],
    "notes": "1688年荷蘭奧蘭治親王威廉率軍登陸英格蘭，詹姆士二世逃亡；議會邀請威廉與瑪麗接受王位，1689年權利法案形成更明確的君權限制。",
    "source": "https://www.parliament.uk/about/living-heritage/evolutionofparliament/parliamentaryauthority/revolution/",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "光榮革命",
    "featured": true
  },
  {
    "id": "we_bill_rights_1689",
    "nameZh": "英國《權利法案》",
    "nameEn": "Bill of Rights 1689",
    "start": 1689,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "uk"
    ],
    "notes": "1689年英格蘭議會通過《權利法案》，規定君主權力與議會權利之界線，與1688年光榮革命共同奠定議會君主制的重要制度基礎。",
    "source": "https://en.wikipedia.org/wiki/Bill_of_Rights_1689",
    "precision": "確定",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "《權利法案》"
  },
  {
    "id": "we_british_global_1815",
    "nameZh": "英國「日不落帝國」全球霸權時期",
    "nameEn": "Pax Britannica",
    "start": 1815,
    "end": 1914,
    "type": "歷史時期",
    "regionIds": [
      "uk"
    ],
    "notes": "「日不落帝國」是形容全球殖民範圍的修辭，並無明確建立之日；本圖以拿破崙戰爭後至第一次世界大戰前約1815–1914年的「不列顛治世」作為便於比較的時期，英國帝國版圖實際延續到20世紀。",
    "source": "https://en.wikipedia.org/wiki/Pax_Britannica",
    "precision": "約",
    "sourceType": "historical_reference",
    "isSeed": true,
    "shortName": "日不落帝國"
  }
];


// v7.9: Turkey, constitutional texts, modern France/Germany, and unified world-war events.
const MODERN_WORLD_SEED=[
  {
    "id": "hist_hittite_kingdom_empire",
    "nameZh": "西臺王國與帝國",
    "nameEn": "Hittite Kingdom and Empire",
    "start": -1650,
    "end": -1180,
    "type": "歷史時期",
    "regionIds": [
      "turkey",
      "west-asia"
    ],
    "notes": "西臺王國約在前17世紀形成，前14世紀起成為強大的新王國／帝國。這裡將約前1650至前1180年畫成西臺政治文化發展的綜合時段，帝國盛期並非始自前1650年。",
    "source": "https://en.wikipedia.org/wiki/Hittites",
    "precision": "約",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "西臺王國／帝國"
  },
  {
    "id": "hist_hittite_late_bronze_collapse",
    "nameZh": "西臺帝國崩潰（青銅時代崩潰）",
    "nameEn": "Collapse of the Hittite Empire",
    "start": -1200,
    "end": -1180,
    "type": "重大事件",
    "regionIds": [
      "turkey",
      "west-asia"
    ],
    "notes": "西臺帝國在前1200年前後逐步崩潰，與青銅時代晚期東地中海的戰亂、饑荒、政經危機及所謂「海上民族」活動有關。不能確認「海上民族直接消滅西臺」，也不應將此事件直接等同特洛伊戰爭。",
    "source": "https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse",
    "precision": "約",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "西臺帝國崩潰"
  },
  {
    "id": "hist_ottoman_empire",
    "nameZh": "鄂圖曼帝國",
    "nameEn": "Ottoman Empire",
    "start": 1299,
    "end": 1922,
    "type": "歷史時期",
    "regionIds": [
      "turkey",
      "west-asia"
    ],
    "notes": "傳統上以1299年奧斯曼一世政權形成為建國起點。帝國經歷歐亞非擴張，第一次世界大戰戰敗後逐步解體；1922年土耳其廢除蘇丹制，常作帝國終點。",
    "source": "https://en.wikipedia.org/wiki/Ottoman_Empire",
    "precision": "約",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "鄂圖曼帝國"
  },
  {
    "id": "hist_fall_constantinople_1453",
    "nameZh": "君士坦丁堡陷落",
    "nameEn": "Fall of Constantinople",
    "start": 1453,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "turkey",
      "greece",
      "italy"
    ],
    "notes": "1453年5月29日，鄂圖曼蘇丹穆罕默德二世攻陷君士坦丁堡，東羅馬帝國的首都失守，常用來標示拜占庭帝國的終結。與既有東羅馬帝國主軸1453年終點相互對照。",
    "source": "https://en.wikipedia.org/wiki/Fall_of_Constantinople",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "君士坦丁堡陷落"
  },
  {
    "id": "hist_ottoman_dissolution",
    "nameZh": "鄂圖曼帝國戰敗與解體",
    "nameEn": "Dissolution of the Ottoman Empire",
    "start": 1918,
    "end": 1922,
    "type": "重大事件",
    "regionIds": [
      "turkey",
      "west-asia",
      "greece",
      "uk",
      "france"
    ],
    "notes": "1918年鄂圖曼帝國在第一次世界大戰中戰敗，隨後遭協約國占領並經歷土耳其獨立戰爭。1922年11月1日廢除蘇丹制，帝國政治制度終結；1923年共和國成立。",
    "source": "https://en.wikipedia.org/wiki/Dissolution_of_the_Ottoman_Empire",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "鄂圖曼解體"
  },
  {
    "id": "hist_turkish_republic_1923",
    "nameZh": "土耳其共和國建立",
    "nameEn": "Proclamation of the Republic of Turkey",
    "start": 1923,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "turkey"
    ],
    "notes": "1923年10月29日宣布成立土耳其共和國，穆斯塔法・凱末爾出任首任總統。建國與改革是持續過程，不宜將全部世俗化措施視為1923年當年完成。",
    "source": "https://en.wikipedia.org/wiki/Proclamation_of_the_Republic_of_Turkey",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "土耳其共和國"
  },
  {
    "id": "hist_ataturk_reforms",
    "nameZh": "凱末爾世俗化與現代化改革",
    "nameEn": "Atatürk reforms",
    "start": 1923,
    "end": 1938,
    "type": "歷史時期",
    "regionIds": [
      "turkey"
    ],
    "notes": "凱末爾領導的共和國改革包含1924年廢除哈里發制、法律與教育制度世俗化、1928年字母改革等，並非單一年度的改革。這裡概括其建國至1938年逝世期間。",
    "source": "https://en.wikipedia.org/wiki/Atat%C3%BCrk%27s_reforms",
    "precision": "約",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "凱末爾改革"
  },
  {
    "id": "hist_hammurabi_code",
    "nameZh": "《漢摩拉比法典》",
    "nameEn": "Code of Hammurabi",
    "start": -1754,
    "end": null,
    "type": "法典／文獻",
    "regionIds": [
      "west-asia"
    ],
    "notes": "古巴比倫王漢摩拉比在位晚期制定的法典石碑，通常概約標成前1754年；具體編年各學說有所差異。不是人類最早的法律文本。",
    "source": "https://en.wikipedia.org/wiki/Code_of_Hammurabi",
    "precision": "約",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "漢摩拉比法典"
  },
  {
    "id": "hist_justinian_corpus_529",
    "nameZh": "《查士丁尼法典》與《民法大全》",
    "nameEn": "Corpus Juris Civilis / Code of Justinian",
    "start": 529,
    "end": 534,
    "type": "法典／文獻",
    "regionIds": [
      "turkey",
      "italy",
      "greece"
    ],
    "notes": "529年首次頒布《查士丁尼法典》，533年《學說彙纂》與《法學階梯》，534年修訂法典；此處以529–534年表示《民法大全》的核心編纂期。其法律傳統影響後世歐陸法系。",
    "source": "https://en.wikipedia.org/wiki/Corpus_Juris_Civilis",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "查士丁尼法典"
  },
  {
    "id": "hist_tang_code_653",
    "nameZh": "《唐律疏議》",
    "nameEn": "Tang Code with Commentary",
    "start": 653,
    "end": null,
    "type": "法典／文獻",
    "regionIds": [
      "china"
    ],
    "notes": "唐高宗永徽四年（653年）頒行《永徽律疏》，後稱《唐律疏議》，是研究中國及東亞傳統法制的重要文獻。",
    "source": "https://zh.wikipedia.org/wiki/%E5%94%90%E5%BE%8B%E7%96%8F%E8%AD%B0",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "唐律疏議"
  },
  {
    "id": "hist_us_declaration_1776",
    "nameZh": "《美國獨立宣言》",
    "nameEn": "United States Declaration of Independence",
    "start": 1776,
    "end": null,
    "type": "法典／文獻",
    "regionIds": [
      "north-america",
      "uk"
    ],
    "notes": "1776年7月4日大陸會議通過《獨立宣言》，宣告北美十三殖民地與英國分離；國家獨立仍須經歷獨立戰爭與外交承認。",
    "source": "https://www.archives.gov/founding-docs/declaration",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "美國獨立宣言"
  },
  {
    "id": "hist_us_constitution_1787",
    "nameZh": "《美國憲法》制定",
    "nameEn": "United States Constitution",
    "start": 1787,
    "end": null,
    "type": "法典／文獻",
    "regionIds": [
      "north-america"
    ],
    "notes": "1787年9月17日在費城制憲會議簽署美國憲法；其制度於1789年開始運作。本時間軸只標制定年份1787，而非生效年份，也不是1987年。",
    "source": "https://www.archives.gov/founding-docs/constitution",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "美國憲法"
  },
  {
    "id": "hist_rights_man_1789",
    "nameZh": "法國《人權與公民權宣言》",
    "nameEn": "Declaration of the Rights of Man and of the Citizen",
    "start": 1789,
    "end": null,
    "type": "法典／文獻",
    "regionIds": [
      "france"
    ],
    "notes": "1789年8月26日法國制憲國民議會通過《人權與公民權宣言》，成為法國大革命的重要政治文件。",
    "source": "https://en.wikipedia.org/wiki/Declaration_of_the_Rights_of_Man_and_of_the_Citizen",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "法國人權宣言"
  },
  {
    "id": "hist_richelieu_1624",
    "nameZh": "黎塞留樞機主政法國",
    "nameEn": "Cardinal Richelieu as chief minister",
    "start": 1624,
    "end": 1642,
    "type": "在位期間",
    "regionIds": [
      "france"
    ],
    "notes": "黎塞留1624年至1642年間擔任路易十三的首席大臣，強化王權與中央集權，並以國家利益為考量涉入三十年戰爭。",
    "source": "https://en.wikipedia.org/wiki/Cardinal_Richelieu",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "黎塞留主政"
  },
  {
    "id": "hist_first_french_empire_1804",
    "nameZh": "法蘭西第一帝國（拿破崙）",
    "nameEn": "First French Empire",
    "start": 1804,
    "end": 1814,
    "type": "歷史時期",
    "regionIds": [
      "france"
    ],
    "notes": "1804年拿破崙稱帝至1814年首次退位的法蘭西第一帝國；1815年的百日王朝與滑鐵盧在原有時間軸另有獨立條目。",
    "source": "https://en.wikipedia.org/wiki/First_French_Empire",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "拿破崙帝國"
  },
  {
    "id": "hist_french_third_republic_1870",
    "nameZh": "法國第三共和國",
    "nameEn": "French Third Republic",
    "start": 1870,
    "end": 1940,
    "type": "歷史時期",
    "regionIds": [
      "france"
    ],
    "notes": "1870年9月4日第二帝國在普法戰爭失敗後第三共和國宣告成立。1940年7月國民議會授予貝當全權，第三共和國的政治制度終結，維琪法國建立。",
    "source": "https://en.wikipedia.org/wiki/French_Third_Republic",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "第三共和國"
  },
  {
    "id": "hist_treaty_versailles_1919",
    "nameZh": "《凡爾賽條約》",
    "nameEn": "Treaty of Versailles",
    "start": 1919,
    "end": null,
    "type": "條約",
    "regionIds": [
      "france",
      "germany",
      "uk",
      "italy",
      "north-america",
      "japan"
    ],
    "notes": "1919年6月28日協約國與德國簽署《凡爾賽條約》，對德國領土、軍備、賠款等訂出規定。美國參與巴黎和會，但美國參議院沒有批准條約。",
    "source": "https://en.wikipedia.org/wiki/Treaty_of_Versailles",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "凡爾賽條約"
  },
  {
    "id": "hist_munich_agreement_1938",
    "nameZh": "《慕尼黑協定》",
    "nameEn": "Munich Agreement",
    "start": 1938,
    "end": null,
    "type": "條約",
    "regionIds": [
      "germany",
      "uk",
      "france",
      "italy",
      "czechia"
    ],
    "notes": "1938年9月29日至30日德國、英國、法國與義大利在未邀請捷克斯洛伐克代表參加的情況下達成協定，迫使其割讓蘇臺德地區。「捷克」在此標記為直接受影響方，而非締約談判方。",
    "source": "https://en.wikipedia.org/wiki/Munich_Agreement",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "慕尼黑協定"
  },
  {
    "id": "hist_fall_france_1940",
    "nameZh": "法國陷落",
    "nameEn": "Fall of France",
    "start": 1940,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "france",
      "germany",
      "uk",
      "italy"
    ],
    "notes": "1940年5月至6月，德軍攻勢使法軍潰敗，6月22日法德簽署停戰協定；法國第三共和國政治體制後於7月終結。",
    "source": "https://en.wikipedia.org/wiki/Battle_of_France",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "法國陷落"
  },
  {
    "id": "hist_end_third_republic_1940",
    "nameZh": "法國第三共和國終結",
    "nameEn": "End of the French Third Republic",
    "start": 1940,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "france"
    ],
    "notes": "1940年7月10日法國國民議會投票授予貝當全權，導向維琪政權建立。這裡區分6月軍事上的法國陷落，以及7月第三共和國憲政體制的終結。",
    "source": "https://en.wikipedia.org/wiki/French_Third_Republic",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "第三共和國終結"
  },
  {
    "id": "hist_nazi_germany_1933",
    "nameZh": "納粹德國時期",
    "nameEn": "Nazi Germany",
    "start": 1933,
    "end": 1945,
    "type": "歷史時期",
    "regionIds": [
      "germany"
    ],
    "notes": "1933年希特勒出任總理後納粹逐步建立一黨獨裁；1939年發動侵略引爆歐洲第二次世界大戰，1945年納粹政權戰敗瓦解。此處屬歷史事實編年，並非任何形式的讚揚。",
    "source": "https://en.wikipedia.org/wiki/Nazi_Germany",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "納粹德國"
  },
  {
    "id": "hist_world_war_1",
    "nameZh": "第一次世界大戰",
    "nameEn": "World War I",
    "start": 1914,
    "end": 1918,
    "type": "戰爭",
    "regionIds": [
      "uk",
      "france",
      "germany",
      "austria",
      "italy",
      "russia",
      "turkey",
      "belgium",
      "czechia",
      "serbia",
      "romania",
      "bulgaria",
      "china",
      "japan",
      "india",
      "north-america",
      "oceania",
      "egypt",
      "west-asia"
    ],
    "notes": "1914–1918年第一次世界大戰，主要交戰陣營為協約國與同盟國；歐洲主要參戰或戰區包含英、法、德、奧匈、俄、義、比利時、巴爾幹等，此外還有鄂圖曼、日本、中國、美國、英屬印度、澳紐部隊及中東、埃及等戰區。地區勾選反映參戰或直接受到戰事影響，不代表每一地區當時皆為獨立國家或同一年參戰。",
    "source": "https://en.wikipedia.org/wiki/World_War_I",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "第一次世界大戰"
  },
  {
    "id": "hist_world_war_2",
    "nameZh": "第二次世界大戰",
    "nameEn": "World War II",
    "start": 1939,
    "end": 1945,
    "type": "戰爭",
    "regionIds": [
      "uk",
      "france",
      "germany",
      "italy",
      "austria",
      "russia",
      "czechia",
      "poland",
      "serbia",
      "romania",
      "bulgaria",
      "greece",
      "belgium",
      "netherlands",
      "china",
      "japan",
      "india",
      "north-america",
      "latin-america",
      "oceania",
      "egypt",
      "west-asia"
    ],
    "notes": "1939–1945年第二次世界大戰，主要軸心國包含德、義、日；主要同盟國包含英、美、蘇、中、法等，另包括澳紐、英屬印度、波蘭、低地國家、巴爾幹等參戰或受占領地區；拉丁美洲標記巴西等參戰國。奧地利當時已併入納粹德國，並非獨立主要交戰國；西班牙和瑞典未勾選，土耳其直到1945年2月才宣戰，故不列為主要參戰區域。",
    "source": "https://en.wikipedia.org/wiki/World_War_II",
    "precision": "確定",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "第二次世界大戰"
  }
];

// v8.0 · Egypt political periods and 18 milestones of United States history.
const EGYPT_AMERICA_SEED=[
  {
    "id": "eg_roman_rule",
    "nameZh": "羅馬統治埃及",
    "nameEn": "Roman Egypt",
    "start": -30,
    "end": 395,
    "type": "歷史時期",
    "regionIds": [
      "egypt",
      "italy"
    ],
    "precision": "確定",
    "source": "https://nmec.gov.eg/historical-timeline/",
    "notes": "西元前30年屋大維兼併托勒密埃及後，埃及成為羅馬帝國行省。此處以395年東西宮廷分治作為銜接拜占庭段落的視覺界線，實際羅馬與東羅馬的制度具有連續性。",
    "shortName": "羅馬統治",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "eg_byzantine_rule",
    "nameZh": "拜占庭（東羅馬）統治埃及",
    "nameEn": "Byzantine Egypt",
    "start": 395,
    "end": 641,
    "type": "歷史時期",
    "regionIds": [
      "egypt",
      "turkey"
    ],
    "precision": "約",
    "source": "https://nmec.gov.eg/historical-timeline/",
    "notes": "395–641年為便於和西羅馬／東羅馬分支比較的常用畫法。部分埃及史料將拜占庭／科普特時期上溯至330年或戴克里先統治時代；阿拉伯軍隊於639年開始入侵，約641–642年間取代東羅馬統治。",
    "shortName": "東羅馬統治",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "eg_islamic_dynasties",
    "nameZh": "埃及伊斯蘭王朝統治時期",
    "nameEn": "Islamic dynasties in Egypt",
    "start": 641,
    "end": 1517,
    "type": "歷史時期",
    "regionIds": [
      "egypt",
      "west-asia"
    ],
    "precision": "約",
    "source": "https://nmec.gov.eg/historical-timeline/",
    "notes": "以7世紀阿拉伯／伊斯蘭征服為起點，後歷經正統、倭馬亞、阿拔斯、圖倫、法蒂瑪、阿尤布、馬穆魯克等王朝。1517年以鄂圖曼征服為下一個分期點；伊斯蘭文化與信仰並未於1517年終止。",
    "shortName": "伊斯蘭王朝",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "eg_ottoman_direct",
    "nameZh": "埃及鄂圖曼直接統治",
    "nameEn": "Ottoman rule in Egypt",
    "start": 1517,
    "end": 1805,
    "type": "歷史時期",
    "regionIds": [
      "egypt",
      "turkey"
    ],
    "precision": "約",
    "source": "https://egymonuments.gov.eg/en/historical-periods/ottoman-period",
    "notes": "1517年塞利姆一世擊敗馬穆魯克、埃及納入鄂圖曼帝國。1798–1801年曾被法軍入侵占領，1805年穆罕默德阿里上台後高度自治；名義鄂圖曼宗主權延續至1914年。",
    "shortName": "鄂圖曼統治",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "eg_muhammad_ali_dynasty",
    "nameZh": "穆罕默德阿里王朝統治埃及",
    "nameEn": "Muhammad Ali dynasty",
    "start": 1805,
    "end": 1953,
    "type": "歷史時期",
    "regionIds": [
      "egypt"
    ],
    "precision": "確定",
    "source": "https://nmec.gov.eg/historical-timeline/",
    "notes": "1805年穆罕默德阿里開始統治；王朝先後有總督、赫迪夫、蘇丹、國王等稱號，並與英國佔領、保護國及1922年後的埃及王國時期重疊。1953年埃及廢除君主制後終結。",
    "shortName": "穆罕默德阿里王朝",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "eg_british_occupation",
    "nameZh": "英國開始佔領埃及",
    "nameEn": "British occupation of Egypt",
    "start": 1882,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "egypt",
      "uk"
    ],
    "precision": "確定",
    "source": "https://en.wikipedia.org/wiki/History_of_Egypt_under_the_British",
    "notes": "英軍1882年進入埃及，1882–1914年間雖名義上仍為鄂圖曼附屬的自治赫迪夫國，英國卻掌握實質控制；1914年正式宣布保護國，1922年承認埃及獨立但仍保有重要權力及駐軍。不是1882–1922年皆屬正式英國殖民地。",
    "shortName": "英國佔領埃及",
    "sourceType": "historical_reference",
    "isSeed": true,
    "showPeriodCallout": false
  },
  {
    "id": "eg_british_protectorate",
    "nameZh": "英國宣布埃及為保護國",
    "nameEn": "British protectorate over Egypt",
    "start": 1914,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "egypt",
      "uk"
    ],
    "precision": "確定",
    "source": "https://en.wikipedia.org/wiki/Sultanate_of_Egypt",
    "notes": "1914年12月英國正式宣布埃及為其保護國，與鄂圖曼帝國的法理關係終止；1922年2月英國單方面宣布承認埃及獨立，仍對蘇伊士運河、防務等保留權利。",
    "shortName": "英國設保護國",
    "sourceType": "historical_reference",
    "isSeed": true,
    "showPeriodCallout": false
  },
  {
    "id": "eg_suez_canal_open_1869",
    "nameZh": "蘇伊士運河開通",
    "nameEn": "Opening of the Suez Canal",
    "start": 1869,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "egypt",
      "france",
      "uk"
    ],
    "precision": "確定",
    "source": "https://www.suezcanal.gov.eg/English/About/SuezCanal/Pages/CanalHistory.aspx",
    "notes": "1869年11月17日蘇伊士運河正式通航，連通地中海與紅海，大幅縮短歐亞海運航路；工程自1859年開挖。",
    "shortName": "蘇伊士運河開通",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "eg_republic_1953",
    "nameZh": "埃及廢除君主制並成立共和國",
    "nameEn": "Abolition of the Egyptian monarchy and declaration of republic",
    "start": 1953,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "egypt"
    ],
    "precision": "確定",
    "source": "https://nmec.gov.eg/historical-timeline/",
    "notes": "1953年6月18日埃及宣布廢除君主制，結束穆罕默德阿里王朝統治並成立共和國；1952年自由軍官革命為其前奏。",
    "shortName": "埃及成立共和國",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "eg_british_withdrawal_1956",
    "nameZh": "英軍撤離埃及完成",
    "nameEn": "Final British troop withdrawal from Egypt",
    "start": 1956,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "egypt",
      "uk"
    ],
    "precision": "確定",
    "source": "https://en.wikipedia.org/wiki/History_of_Egypt_under_the_British",
    "notes": "依1954年英埃協議，最後一批英軍在1956年6月撤離蘇伊士運河區（常用日期6月18日）；同年10月至11月英法以蘇伊士危機再度軍事介入，因此「最後撤離」特指既有駐軍撤離完成。",
    "shortName": "英軍撤離",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_boston_tea_1773",
    "nameZh": "波士頓茶黨事件",
    "nameEn": "Boston Tea Party",
    "start": 1773,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "usa",
      "uk"
    ],
    "precision": "確定",
    "source": "https://home.nps.gov/articles/000/boston-tea-party-in-real-time.htm",
    "notes": "1773年12月16日北美殖民者在波士頓港將東印度公司茶葉投入海中，抗議英國對殖民地課稅和貿易政策，成為美國革命前的重要事件。",
    "shortName": "波士頓茶黨",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_louisiana_purchase_1803",
    "nameZh": "路易斯安那購地",
    "nameEn": "Louisiana Purchase",
    "start": 1803,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "usa",
      "france"
    ],
    "precision": "確定",
    "source": "https://www.archives.gov/milestone-documents/louisiana-purchase-treaty",
    "notes": "1803年4月30日美國與法國簽訂路易斯安那購地條約，以1500萬美元購得密西西比河以西廣闊土地，使當時美國國土面積大幅增加。",
    "shortName": "路易斯安那購地",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_mexican_war_1846",
    "nameZh": "美墨戰爭",
    "nameEn": "Mexican–American War",
    "start": 1846,
    "end": 1848,
    "type": "戰爭",
    "regionIds": [
      "usa",
      "mexico"
    ],
    "precision": "確定",
    "source": "https://www.whitehouse.gov/history/",
    "notes": "1846–1848年美國與墨西哥因德克薩斯及邊界爭議爆發戰爭；瓜達盧佩—伊達爾戈條約使墨西哥割讓包括今日加州在內的大面積領土。",
    "shortName": "美墨戰爭",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_gold_rush_1848",
    "nameZh": "加州淘金熱",
    "nameEn": "California Gold Rush",
    "start": 1848,
    "end": 1855,
    "type": "歷史時期",
    "regionIds": [
      "usa"
    ],
    "precision": "約",
    "source": "https://www.nps.gov/cali/learn/historyculture/california-gold-rush.htm",
    "notes": "1848年1月發現黃金，1849年起大規模移民湧入加州。常以1848–1855年作為淘金熱主要時段，對西部擴張、族群與原住民社會造成深遠影響。",
    "shortName": "加州淘金熱",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_civil_war_1861",
    "nameZh": "美國南北戰爭",
    "nameEn": "American Civil War",
    "start": 1861,
    "end": 1865,
    "type": "戰爭",
    "regionIds": [
      "usa"
    ],
    "precision": "確定",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/civil-war-and-reconstruction-1861-to-1877/",
    "notes": "1861–1865年聯邦與南方邦聯交戰，核心爭議包括奴隸制度及各州退出聯邦問題；1865年邦聯敗亡，戰後展開重建。",
    "shortName": "南北戰爭",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_emancipation_1863",
    "nameZh": "林肯發布《解放奴隸宣言》",
    "nameEn": "Emancipation Proclamation",
    "start": 1863,
    "end": null,
    "type": "法典／文獻",
    "regionIds": [
      "usa"
    ],
    "precision": "確定",
    "source": "https://www.archives.gov/milestone-documents/emancipation-proclamation",
    "notes": "1863年1月1日《解放奴隸宣言》生效，適用於反叛州指定地區，並非立即解放美國所有奴隸；1865年第十三修正案廢除美國奴隸制度。",
    "shortName": "解放奴隸宣言",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_gilded_age_1877",
    "nameZh": "美國鍍金時代",
    "nameEn": "Gilded Age",
    "start": 1877,
    "end": 1900,
    "type": "歷史時期",
    "regionIds": [
      "usa"
    ],
    "precision": "約",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/rise-of-industrial-america-1876-to-1900/",
    "notes": "常用約1870年代至1900年前後的歷史分期；本圖取重建時期結束的1877年至1900年，反映快速工業化、企業集中、財富不均及政治腐敗與改革呼聲。",
    "shortName": "鍍金時代",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_great_depression_1929",
    "nameZh": "經濟大蕭條",
    "nameEn": "Great Depression",
    "start": 1929,
    "end": 1939,
    "type": "歷史時期",
    "regionIds": [
      "usa"
    ],
    "precision": "約",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/great-depression-and-world-war-ii-1929-to-1945/",
    "notes": "1929年股市崩盤後全球經濟陷入長期蕭條，美國出現高失業率與銀行危機。1939年前後為常見分期終點，但各國復甦時間並不一致。",
    "shortName": "經濟大蕭條",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_new_deal_1933",
    "nameZh": "羅斯福新政",
    "nameEn": "New Deal",
    "start": 1933,
    "end": 1939,
    "type": "歷史時期",
    "regionIds": [
      "usa"
    ],
    "precision": "約",
    "source": "https://en.wikipedia.org/wiki/New_Deal",
    "notes": "1933年羅斯福總統上任後推動金融改革、公共工程、社會安全等政策，1930年代後期逐漸告一段落。新政與大蕭條同時存在，將以重疊的色帶標示。",
    "shortName": "羅斯福新政",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_pearl_harbor_1941",
    "nameZh": "珍珠港事件",
    "nameEn": "Attack on Pearl Harbor",
    "start": 1941,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "usa",
      "japan"
    ],
    "precision": "確定",
    "source": "https://www.nps.gov/perl/learn/historyculture/index.htm",
    "notes": "1941年12月7日日本海軍突襲美國夏威夷珍珠港，促使美國於次日對日本宣戰，正式加入第二次世界大戰。",
    "shortName": "珍珠港事件",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_cold_war_1947",
    "nameZh": "冷戰",
    "nameEn": "Cold War",
    "start": 1947,
    "end": 1991,
    "type": "歷史時期",
    "regionIds": [
      "usa",
      "russia"
    ],
    "precision": "約",
    "source": "https://www.cfr.org/education/learn/timelines/history-us-foreign-policy",
    "notes": "1947–1991年美國與蘇聯及各自盟國之間的全球性政治、軍事、意識形態競爭，並未爆發美蘇之間直接的全面戰爭；此處俄羅斯代表蘇聯主要地理與政治核心，不等於當時俄羅斯獨立國家。",
    "shortName": "冷戰",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_korean_war_1950",
    "nameZh": "韓戰",
    "nameEn": "Korean War",
    "start": 1950,
    "end": 1953,
    "type": "戰爭",
    "regionIds": [
      "usa",
      "korea",
      "china",
      "russia"
    ],
    "precision": "確定",
    "source": "https://www.cfr.org/education/learn/timelines/history-us-foreign-policy",
    "notes": "1950年6月至1953年7月，北韓入侵南韓後，聯合國軍（以美軍為主）支持南韓，中國人民志願軍加入戰事，蘇聯提供支援；1953年停戰但未簽正式和平條約。",
    "shortName": "韓戰",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_vietnam_war_1955",
    "nameZh": "越戰",
    "nameEn": "Vietnam War",
    "start": 1955,
    "end": 1975,
    "type": "戰爭",
    "regionIds": [
      "usa",
      "vietnam",
      "china",
      "russia"
    ],
    "precision": "約",
    "source": "https://www.cfr.org/education/learn/resource-collections/contemporary-history-post-1945-introduction/essential-events-1945",
    "notes": "常見廣義越戰分期為1955–1975年；美軍大規模地面作戰主要在1965年後，1973年巴黎協定後美軍撤離，1975年西貢陷落、越南統一進程加速。",
    "shortName": "越戰",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_cuban_missile_1962",
    "nameZh": "古巴飛彈危機",
    "nameEn": "Cuban Missile Crisis",
    "start": 1962,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "usa",
      "cuba",
      "russia",
      "turkey"
    ],
    "precision": "確定",
    "source": "https://history.state.gov/milestones/1961-1968/cuban-missile-crisis",
    "notes": "1962年10月，美國發現蘇聯在古巴部署核飛彈後，美蘇對峙接近核戰；最終透過撤除古巴飛彈及秘密協商美國撤除土耳其飛彈等安排化解危機。",
    "shortName": "古巴飛彈危機",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_king_dream_1963",
    "nameZh": "金恩博士〈我有一個夢〉演說",
    "nameEn": "I Have a Dream speech",
    "start": 1963,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "usa"
    ],
    "precision": "確定",
    "source": "https://www.archives.gov/milestone-documents/official-program-for-the-march-on-washington",
    "notes": "1963年8月28日馬丁・路德・金恩博士在華盛頓爭取工作與自由大遊行中發表〈我有一個夢〉演說，成為美國民權運動的重要象徵。",
    "shortName": "我有一個夢",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_apollo11_1969",
    "nameZh": "阿波羅11號登月",
    "nameEn": "Apollo 11 Moon landing",
    "start": 1969,
    "end": null,
    "type": "科技",
    "regionIds": [
      "usa"
    ],
    "precision": "確定",
    "source": "https://www.nasa.gov/mission/apollo-11/",
    "notes": "1969年7月20日阿波羅11號太空人阿姆斯壯與艾德林登上月球，成為人類首次載人登月任務，亦是冷戰太空競賽的重要成果。",
    "shortName": "阿波羅11號",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_soviet_dissolution_1991",
    "nameZh": "蘇聯解體",
    "nameEn": "Dissolution of the Soviet Union",
    "start": 1991,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "russia",
      "usa"
    ],
    "precision": "確定",
    "source": "https://history.state.gov/milestones/1989-1992/collapse-soviet-union",
    "notes": "1991年12月蘇聯解體，成為冷戰結束的標誌。蘇聯不是今日俄羅斯的同義詞，俄羅斯聯邦是其主要繼承國之一；美國亦受國際政治格局轉變深刻影響。",
    "shortName": "蘇聯解體",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_911_2001",
    "nameZh": "九一一恐怖攻擊",
    "nameEn": "September 11 attacks",
    "start": 2001,
    "end": null,
    "type": "重大事件",
    "regionIds": [
      "usa"
    ],
    "precision": "確定",
    "source": "https://www.911memorial.org/learn/about-911",
    "notes": "2001年9月11日恐怖組織蓋達襲擊紐約世界貿易中心及華盛頓周邊，造成重大人員傷亡，深刻改變美國國安與外交政策。",
    "shortName": "九一一事件",
    "sourceType": "historical_reference",
    "isSeed": true
  }
];
// v8.1 · Continuous republican government since 1953, not a claim that its present
// official state name was used throughout the entire period.  The official name
// Arab Republic of Egypt only dates from 1971.
const EGYPT_REPUBLIC_SEED={
 id:'eg_republic_era_1953',
 nameZh:'埃及共和國（現阿拉伯埃及共和國）',
 shortName:'埃及共和國',
 nameEn:'Republican Egypt (now Arab Republic of Egypt)',
 start:1953,end:null,ongoing:true,type:'歷史時期',
 regionIds:['egypt'],precision:'確定',
 source:'https://www.un.org/en/about-us/member-states/egypt',
 notes:'1953年6月18日正式廢除君主制、成立埃及共和國，承接1805–1953年穆罕默德阿里王朝。1958–1971年國號為「阿拉伯聯合共和國」（1958–1961年曾與敘利亞合組聯合國家）；1971年9月正式改稱「阿拉伯埃及共和國」。為便於閱讀，主軸將1953年至今的共和政體合併顯示，不表示1953年當時就已使用現行國名。',
 sourceType:'historical_reference',isSeed:true
};

// The earlier versions used a single "north-america" location. New installs use country-specific IDs.
for(const seed of [...WEST_EUROPE_HISTORY_SEED,...MODERN_WORLD_SEED]){
 if(seed.regionIds?.includes('north-america'))seed.regionIds=seed.regionIds.map(x=>x==='north-america'?'usa':x);
 if(seed.id==='hist_world_war_1')seed.regionIds=[...new Set([...seed.regionIds,'canada'])];
 if(seed.id==='hist_world_war_2')seed.regionIds=[...new Set([...seed.regionIds,'canada','mexico'])];
}
// v8.3: French and British historical periods and milestone events.
const FRANCE_BRITAIN_SEED=[
  {
    "id": "fr_roman_gaul_52bce",
    "nameZh": "羅馬統治高盧（今法國地區）",
    "shortName": "羅馬高盧",
    "nameEn": "Roman Gaul",
    "start": -52,
    "end": 486,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "france"
    ],
    "notes": "羅馬自前58至前50年經由凱撒的高盧戰爭擴大控制，前52年阿萊西亞戰役常作為征服轉捩點。羅馬在高盧的權力於五世紀逐漸瓦解；486年蘇瓦松之戰後，最後的羅馬政權殘餘勢力結束。此色帶是大致分期，並不表示現今法國所有領土都被羅馬持續直接治理至486年。",
    "source": "https://en.wikipedia.org/wiki/Roman_Gaul",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "fr_capetian_dynasty_987",
    "nameZh": "法國卡佩王朝（直系）",
    "shortName": "卡佩王朝",
    "nameEn": "Capetian dynasty (direct line)",
    "start": 987,
    "end": 1328,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "france"
    ],
    "notes": "987年于格・卡佩即位，開啟法國卡佩王朝直系統治；1328年查理四世去世後，王位轉由卡佩家族支系瓦盧瓦王朝承接。既有「于格・卡佩即位」事件另保留為起始年份標記。",
    "source": "https://en.wikipedia.org/wiki/Capetian_dynasty",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "fr_valois_dynasty_1328",
    "nameZh": "法國瓦盧瓦王朝",
    "shortName": "瓦盧瓦王朝",
    "nameEn": "House of Valois",
    "start": 1328,
    "end": 1589,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "france"
    ],
    "notes": "1328年腓力六世繼承法國王位，瓦盧瓦王朝開始。經歷百年戰爭、文藝復興與法國宗教戰爭。1589年亨利三世遇刺，王位由波旁王朝的亨利四世繼承。瓦盧瓦屬卡佩家族的支系。",
    "source": "https://en.wikipedia.org/wiki/House_of_Valois",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "fr_avignon_papacy_1309",
    "nameZh": "亞維儂教廷時期（阿維尼翁之囚）",
    "shortName": "阿維尼翁之囚",
    "nameEn": "Avignon Papacy",
    "start": 1309,
    "end": 1377,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "france",
      "italy"
    ],
    "notes": "1309年起教宗駐於亞維儂；1377年額我略十一世返回羅馬。慣稱「阿維尼翁之囚」，並非所有教宗均被實際囚禁。這與1378年起的西方教會大分裂是不同時期。",
    "source": "https://en.wikipedia.org/wiki/Avignon_Papacy",
    "featured": true,
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "fr_joan_of_arc_1429",
    "nameZh": "聖女貞德（Joan of Arc）",
    "shortName": "聖女貞德",
    "nameEn": "Joan of Arc",
    "start": 1429,
    "end": 1431,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "france",
      "uk"
    ],
    "notes": "聖女貞德約1412年出生，1429年參與解圍奧爾良並促成查理七世加冕，成為百年戰爭的重要人物；1430年被俘，1431年在盧昂被處以火刑。此處標示其關鍵歷史活動1429–1431年，而非完整生卒年。",
    "source": "https://en.wikipedia.org/wiki/Joan_of_Arc",
    "featured": true,
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "fr_french_wars_religion_1562",
    "nameZh": "法國胡格諾戰爭（宗教戰爭）",
    "shortName": "胡格諾戰爭",
    "nameEn": "French Wars of Religion",
    "start": 1562,
    "end": 1598,
    "type": "戰爭",
    "precision": "確定",
    "regionIds": [
      "france"
    ],
    "notes": "1562至1598年間，法國天主教與胡格諾（加爾文宗新教徒）各派政治勢力爆發多次內戰；1589年波旁家族亨利四世繼位，1598年《南特敕令》成為重要收束節點。",
    "source": "https://en.wikipedia.org/wiki/French_Wars_of_Religion",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "fr_st_bartholomew_1572",
    "nameZh": "聖巴托羅謬日大屠殺",
    "shortName": "聖巴托羅謬大屠殺",
    "nameEn": "St. Bartholomew's Day massacre",
    "start": 1572,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "france"
    ],
    "notes": "1572年8月24日前後，巴黎爆發對胡格諾新教徒的刺殺與屠殺，暴力迅速蔓延至法國其他城市，是法國宗教戰爭最惡名昭彰的重大事件之一。",
    "source": "https://en.wikipedia.org/wiki/St._Bartholomew%27s_Day_massacre",
    "featured": true,
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "uk_norman_dynasty_1066",
    "nameZh": "英格蘭諾曼王朝",
    "shortName": "諾曼王朝",
    "nameEn": "Norman dynasty of England",
    "start": 1066,
    "end": 1154,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "uk"
    ],
    "notes": "1066年威廉征服者取得英格蘭王位，諾曼王朝建立，1154年史蒂芬去世後王位轉由安茹的亨利二世繼承，開啟金雀花王朝。",
    "source": "https://www.royal.uk/kings-and-queens-1066",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "uk_plantagenet_dynasty_1154",
    "nameZh": "英格蘭金雀花王朝",
    "shortName": "金雀花王朝",
    "nameEn": "House of Plantagenet",
    "start": 1154,
    "end": 1485,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "uk"
    ],
    "notes": "1154年亨利二世即位至1485年理查三世戰死，王位由都鐸家族取得；涵蓋金雀花本支及其蘭開斯特、約克支系，1399年後王位繼承仍由金雀花後裔延續。",
    "source": "https://en.wikipedia.org/wiki/House_of_Plantagenet",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "uk_stuart_first_1603",
    "nameZh": "斯圖亞特王朝（前期）",
    "shortName": "斯圖亞特",
    "nameEn": "House of Stuart (first reign)",
    "start": 1603,
    "end": 1649,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "uk"
    ],
    "notes": "1603年蘇格蘭詹姆士六世繼承英格蘭王位為詹姆士一世，兩國共戴一君，但國家尚未正式合併。1649年查理一世被處死，英格蘭君主制中斷。",
    "source": "https://www.royal.uk/stuarts",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "uk_interregnum_1649",
    "nameZh": "英格蘭共和國與護國公時期",
    "shortName": "共和／護國公",
    "nameEn": "Interregnum (England)",
    "start": 1649,
    "end": 1660,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "uk"
    ],
    "notes": "1649年查理一世被處決後，英格蘭先後進入共和國（Commonwealth）與克倫威爾護國公時期；1660年查理二世復辟，君主制恢復。因此斯圖亞特王朝色帶不應連續穿越1649–1660年。",
    "source": "https://www.royal.uk/united-kingdom-monarchs-1603-present",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "uk_stuart_restored_1660",
    "nameZh": "斯圖亞特王朝（王政復辟）",
    "shortName": "斯圖亞特",
    "nameEn": "House of Stuart (Restoration)",
    "start": 1660,
    "end": 1714,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "uk"
    ],
    "notes": "1660年查理二世復辟至1714年安妮女王去世，斯圖亞特王朝再度統治。1688年光榮革命及1707年英格蘭與蘇格蘭議會合併成立大不列顛王國均發生在此期間。",
    "source": "https://www.royal.uk/stuarts",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "uk_hanover_dynasty_1714",
    "nameZh": "英國漢諾威王朝",
    "shortName": "漢諾威",
    "nameEn": "House of Hanover",
    "start": 1714,
    "end": 1901,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "uk"
    ],
    "notes": "1714年喬治一世依王位繼承法登上英國王位，漢諾威王朝開始；1901年維多利亞女王逝世後，由其子愛德華七世開啟薩克森－科堡－哥達王朝。",
    "source": "https://en.wikipedia.org/wiki/House_of_Hanover",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "uk_saxe_coburg_1901",
    "nameZh": "薩克森－科堡－哥達王朝",
    "shortName": "薩克森科堡",
    "nameEn": "House of Saxe-Coburg and Gotha",
    "start": 1901,
    "end": 1917,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "uk"
    ],
    "notes": "1901年愛德華七世即位，英國王室屬薩克森－科堡－哥達家族。第一次世界大戰期間，國王喬治五世於1917年將英國王室名稱改為「溫莎」。",
    "source": "https://www.royal.uk/house-windsor",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "uk_windsor_1917",
    "nameZh": "英國溫莎王朝",
    "shortName": "溫莎王朝",
    "nameEn": "House of Windsor",
    "start": 1917,
    "end": null,
    "ongoing": true,
    "type": "朝代",
    "precision": "確定",
    "regionIds": [
      "uk"
    ],
    "notes": "1917年喬治五世宣布將英國王室名稱由薩克森－科堡－哥達改為「溫莎」，至今延續；這是王室名稱變更，不是同年發生政權更替。",
    "source": "https://www.royal.uk/house-windsor",
    "sourceType": "historical_reference",
    "isSeed": true
  }
];

// The British Empire's global influence is an event band rather than a ruling dynasty.
const empireSeed=WEST_EUROPE_HISTORY_SEED.find(e=>e.id==='we_british_global_1815');
if(empireSeed)empireSeed.type='重大事件';


// v8.7 · user-defined US periodization (9) and German political periods (4) + reunification.
const US_PERIOD_V87_IDS=new Set(["us_era_early_colonial_1607", "us_era_revolution_founding_1763", "us_era_expansion_democracy_1800", "us_era_civil_war_reconstruction_1861", "us_era_gilded_progressive_1877", "us_era_worldwars_depression_1917", "us_era_coldwar_prosperity_1945", "us_era_conservatism_globalization_1980", "us_era_war_on_terror_polarization_2001"]);
const US_EXISTING_MILESTONE_IDS=new Set(["us_gold_rush_1848", "us_gilded_age_1877", "us_great_depression_1929", "us_new_deal_1933", "us_cold_war_1947"]);
const HISTORY_V87_SEED=[
  {
    "id": "us_era_early_colonial_1607",
    "nameZh": "早期與殖民時期",
    "shortName": "殖民早期",
    "nameEn": "Early and Colonial America",
    "start": 1607,
    "end": 1763,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "以1607年詹姆斯敦英國殖民據點建立為起點，至1763年七年戰爭後北美殖民地政治局勢轉變為止。這是方便學習的英屬北美分期；原住民族歷史及其他歐洲殖民活動遠早於1607年。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_era_revolution_founding_1763",
    "nameZh": "革命與建國初期",
    "shortName": "革命與建國",
    "nameEn": "Revolution and Early Republic",
    "start": 1763,
    "end": 1800,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "1763年後英國殖民政策與殖民地抗爭加劇，包含1776年獨立宣言、1787年憲法與早期聯邦政府的建立。1800年是為便於編排而採用的教學分界。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_era_expansion_democracy_1800",
    "nameZh": "西進與民主轉型",
    "shortName": "西進與民主",
    "nameEn": "Westward Expansion and Democratization",
    "start": 1800,
    "end": 1861,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "19世紀前半的領土西擴、傑克遜式民主、工業化與改革運動；民主參與主要擴展於白人男性，並伴隨原住民族被迫遷移與奴隸制度爭議。1861年內戰開始。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_era_civil_war_reconstruction_1861",
    "nameZh": "南北內戰與重建",
    "shortName": "內戰與重建",
    "nameEn": "Civil War and Reconstruction",
    "start": 1861,
    "end": 1877,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "1861–1865年南北戰爭，1865–1877年聯邦推動南方重建與憲政改革。該時期的種族與公民權衝突對之後歷史產生長遠影響。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_era_gilded_progressive_1877",
    "nameZh": "鍍金與進步時代",
    "shortName": "鍍金與進步",
    "nameEn": "Gilded Age and Progressive Era",
    "start": 1877,
    "end": 1917,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "約1877年至美國1917年參加第一次世界大戰，涵蓋鍍金時代的工業成長、財富集中，以及進步主義改革；各史學著作對分期起訖並不一致。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_era_worldwars_depression_1917",
    "nameZh": "世界大戰與大蕭條",
    "shortName": "大戰與蕭條",
    "nameEn": "World Wars and the Great Depression",
    "start": 1917,
    "end": 1945,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "美國1917年參加第一次世界大戰後，經歷1920年代、1929年經濟大蕭條、羅斯福新政及第二次世界大戰；美國1941年正式參戰，1945年戰爭結束。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_era_coldwar_prosperity_1945",
    "nameZh": "冷戰與戰後繁榮",
    "shortName": "冷戰與繁榮",
    "nameEn": "Cold War and Postwar Prosperity",
    "start": 1945,
    "end": 1980,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "戰後經濟成長、冷戰、美蘇對立、民權運動、韓戰、越戰與太空競賽。冷戰實際延續至1991年；1980年僅作為美國內政與經濟政策轉折的分期點。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_era_conservatism_globalization_1980",
    "nameZh": "保守主義與全球化",
    "shortName": "保守與全球化",
    "nameEn": "Conservatism and Globalization",
    "start": 1980,
    "end": 2001,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "涵蓋1980年代保守主義政治、冷戰晚期、1991年蘇聯解體、全球化與資訊產業蓬勃發展；2001年九一一事件為下一階段的代表性轉折。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "us_era_war_on_terror_polarization_2001",
    "nameZh": "反恐戰爭與極化",
    "shortName": "反恐與極化",
    "nameEn": "War on Terror and Political Polarization",
    "start": 2001,
    "end": null,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "usa"
    ],
    "notes": "2001年九一一事件後，美國展開反恐戰爭，伴隨長期的國內政治極化、金融危機及數位社群變遷。本分期持續至今，並非表示反恐作戰在所有時期皆持續。",
    "source": "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/",
    "sourceType": "historical_reference",
    "isSeed": true,
    "ongoing": true
  },
  {
    "id": "de_era_kingdom_prussia_1701",
    "nameZh": "普魯士王國",
    "shortName": "普魯士",
    "nameEn": "Kingdom of Prussia",
    "start": 1701,
    "end": 1918,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "germany"
    ],
    "notes": "1701年霍亨索倫統治者腓特烈一世在柯尼斯堡加冕為「在普魯士的國王」；1871年後普魯士仍作為德意志帝國的邦國存在，至1918年君主制度崩解。",
    "source": "https://en.wikipedia.org/wiki/Kingdom_of_Prussia",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "de_era_german_empire_1871",
    "nameZh": "德意志帝國",
    "shortName": "德意志帝國",
    "nameEn": "German Empire",
    "start": 1871,
    "end": 1918,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "germany"
    ],
    "notes": "1871年1月18日在凡爾賽宮宣布成立的德意志帝國，為普魯士主導之聯邦制君主國，直到1918年德國革命與皇帝退位。與「普魯士王國」在1871–1918年間重疊，代表國家與邦國兩個不同層級。",
    "source": "https://www.dhm.de/en/exhibitions/permanent-exhibition/the-german-empire-and-the-first-world-war/",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "de_era_federal_republic_1949",
    "nameZh": "德意志聯邦共和國",
    "shortName": "聯邦共和國",
    "nameEn": "Federal Republic of Germany",
    "start": 1949,
    "end": null,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "germany"
    ],
    "notes": "1949年成立於西部德國地區，史稱西德。1990年10月3日民主德國各邦依統一條約加入聯邦共和國，現今德國延續1949年建立的聯邦共和國法制。",
    "source": "https://www.bundesregierung.de/breg-de/schwerpunkte/deutsche-einheit/die-einheit-ist-wirklichkeit-432814",
    "sourceType": "historical_reference",
    "isSeed": true,
    "ongoing": true
  },
  {
    "id": "de_era_democratic_republic_1949",
    "nameZh": "德意志民主共和國",
    "shortName": "民主共和國",
    "nameEn": "German Democratic Republic",
    "start": 1949,
    "end": 1990,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "germany"
    ],
    "notes": "1949年於蘇聯占領區成立，史稱東德。1990年10月3日其邦加入德意志聯邦共和國，民主德國作為獨立國家不再存在。",
    "source": "https://www.bundesregierung.de/breg-de/schwerpunkte/deutsche-einheit/die-einheit-ist-wirklichkeit-432814",
    "sourceType": "historical_reference",
    "isSeed": true
  },
  {
    "id": "de_reunification_1990",
    "nameZh": "兩德統一",
    "shortName": "兩德統一",
    "nameEn": "German reunification",
    "start": 1990,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "germany"
    ],
    "notes": "1990年10月3日東德各邦依統一條約加入德意志聯邦共和國，標誌德國統一。此為單一年份重大事件，並非新建一個與1949年聯邦共和國無關的國家。",
    "source": "https://www.bundesregierung.de/breg-de/schwerpunkte/deutsche-einheit/die-einheit-ist-wirklichkeit-432814",
    "sourceType": "historical_reference",
    "isSeed": true
  }
];
// Display these original 18-item US milestone records below the nine-period ribbon
// even if their stored category is 歷史時期; no dates, titles or notes are changed.
for(const original of EGYPT_AMERICA_SEED){
 if(US_EXISTING_MILESTONE_IDS.has(original.id))original.timelineRole='event';
}

// v9.0 · simplified West Asian history; cross-region tags indicate historical impact,
// not uninterrupted territorial control throughout a whole empire's lifespan.
const WEST_ASIA_V88_SEED=[
  {
    "id": "wa_sumer_civilization",
    "nameZh": "蘇美文明",
    "shortName": "蘇美",
    "nameEn": "Sumerian civilization",
    "start": -3500,
    "end": -2000,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "mesopotamia"
    ],
    "source": "https://zh.wikipedia.org/wiki/蘇美爾",
    "notes": "約前3500至前2000年；以兩河流域南部的烏魯克、烏爾等城邦為核心。此處為文明總覽，不代表存在一個從頭到尾統一的蘇美王朝。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_old_babylonia",
    "nameZh": "古巴比倫王國",
    "shortName": "古巴比倫",
    "nameEn": "Old Babylonian Empire",
    "start": -1894,
    "end": -1595,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "mesopotamia"
    ],
    "source": "https://zh.wikipedia.org/wiki/古巴比伦时期",
    "notes": "依常見中期編年採前1894至前1595年；漢摩拉比時期強盛。年代依考古編年方案會有差異。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_assyrian_empire",
    "nameZh": "亞述帝國",
    "shortName": "亞述",
    "nameEn": "Neo-Assyrian Empire",
    "start": -911,
    "end": -609,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "mesopotamia",
      "levant",
      "turkey",
      "egypt"
    ],
    "source": "https://zh.wikipedia.org/wiki/新亚述帝国",
    "notes": "這裡以新亞述帝國約前911至前609年作為「亞述」主軸，並非亞述文明全部歷史。對黎凡特、安那托利亞及部分埃及有不同時段的統治或軍事影響。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_neo_babylonia",
    "nameZh": "新巴比倫帝國",
    "shortName": "新巴比倫",
    "nameEn": "Neo-Babylonian Empire",
    "start": -626,
    "end": -539,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "mesopotamia",
      "levant"
    ],
    "source": "https://zh.wikipedia.org/wiki/新巴比倫王國",
    "notes": "前626年建立，前539年遭阿契美尼德波斯征服；其與新亞述帝國有短暫重疊。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_hellenistic_period",
    "nameZh": "希臘化時期（西亞）",
    "shortName": "希臘化",
    "nameEn": "Hellenistic period in Western Asia",
    "start": -330,
    "end": -63,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "turkey",
      "levant",
      "mesopotamia",
      "persia"
    ],
    "source": "https://zh.wikipedia.org/wiki/希腊化时代",
    "notes": "以亞歷山大征服波斯後到羅馬控制敘利亞附近的時代作概括分期；各地希臘化政權的實際存續不同，伊朗、兩河等地很早就有安息等勢力崛起，非單一政權統治整段期間。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_islam_emergence_610",
    "nameZh": "伊斯蘭教的誕生",
    "shortName": "伊斯蘭興起",
    "shortName": "伊斯蘭教興起",
    "nameEn": "Origin of Islam (Rise of Islam)",
    "start": 610,
    "end": null,
    "type": "重大事件",
    "precision": "約",
    "regionIds": [
      "arabian-peninsula"
    ],
    "source": "https://zh.wikipedia.org/wiki/伊斯蘭教歷史",
    "notes": "約610年，穆罕默德開始在麥加宣示宗教啟示，通常以此作為伊斯蘭教興起的標記。622年遷徙麥地那（希吉拉）則是伊斯蘭曆元年；宗教形成是一段歷程，不是單一精確創立日。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_arab_caliphates",
    "nameZh": "阿拉伯帝國（哈里發時代）",
    "shortName": "阿拉伯帝國",
    "nameEn": "Arab Caliphates (overview)",
    "start": 632,
    "end": 1258,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "arabian-peninsula",
      "levant",
      "mesopotamia",
      "persia",
      "egypt"
    ],
    "source": "https://zh.wikipedia.org/wiki/哈里發國",
    "notes": "將632年後正統、倭馬亞、阿拔斯等哈里發政權合併為簡略主軸，至1258年蒙古攻陷巴格達作常用轉折；各王朝勢力範圍不同，也不是全程維持統一的阿拉伯帝國。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_seljuk_empire",
    "nameZh": "塞爾柱突厥帝國",
    "shortName": "塞爾柱",
    "nameEn": "Great Seljuk Empire",
    "start": 1037,
    "end": 1194,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "persia",
      "mesopotamia",
      "turkey",
      "levant"
    ],
    "source": "https://zh.wikipedia.org/wiki/塞尔柱帝国",
    "notes": "採大塞爾柱帝國約1037至1194年總覽；安那托利亞的羅姆塞爾柱等繼承政權延續更久，後續需要可另補重大事件，不先細分。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_crusades_levant",
    "nameZh": "十字軍東征（聖地戰役）",
    "shortName": "十字軍東征",
    "nameEn": "Crusades to the Holy Land",
    "start": 1096,
    "end": 1291,
    "type": "戰爭",
    "precision": "確定",
    "regionIds": [
      "levant",
      "turkey",
      "egypt",
      "france",
      "germany",
      "italy",
      "uk"
    ],
    "source": "https://zh.wikipedia.org/wiki/十字軍東征",
    "notes": "以1096年第一次十字軍出發至1291年阿卡陷落，概括以聖地／黎凡特為主的十字軍戰役；不是195年連續不停的單一戰爭，亦不涵蓋所有發生於歐洲境內的十字軍。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_mongol_khanates",
    "nameZh": "蒙古汗國（總覽）",
    "shortName": "蒙古汗國",
    "nameEn": "Mongol Empire and successor khanates (overview)",
    "start": 1206,
    "end": 1368,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "china",
      "russia",
      "persia",
      "mesopotamia",
      "turkey"
    ],
    "source": "https://zh.wikipedia.org/wiki/蒙古帝国",
    "notes": "依使用者需求先維持一個蒙古汗國總覽，不拆分伊兒汗、欽察等汗國；1206年成吉思汗建蒙古帝國，後來逐漸分裂，各汗國統治時間並不相同。1368年為元廷離開大都的重要節點，不代表所有蒙古後繼政權當年同時滅亡。未來可與中國元朝資料串接。",
    "sourceType": "wikipedia",
    "isSeed": true
  },
  {
    "id": "wa_post_wwi_modern",
    "nameZh": "一戰後西亞國家形成",
    "shortName": "戰後・現代西亞",
    "nameEn": "Post-World War I state formation in Western Asia",
    "start": 1918,
    "end": 1950,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "turkey",
      "persia",
      "mesopotamia",
      "levant",
      "arabian-peninsula"
    ],
    "source": "https://zh.wikipedia.org/wiki/中東現代史",
    "notes": "以1918年至20世紀中葉作第一次世界大戰後西亞重組的概括時期。各地從帝國解體、託管制度到獨立建國的年份不同；不是另一個統一王朝，也不表示國家形成在1950年全部結束。",
    "sourceType": "wikipedia",
    "isSeed": true
  }
];
const WEST_ASIA_REGION_OVERRIDES={
  "hist_hittite_kingdom_empire": [
    "turkey",
    "levant"
  ],
  "hist_hittite_late_bronze_collapse": [
    "turkey",
    "levant"
  ],
  "eg_kadesh": [
    "egypt",
    "turkey",
    "levant"
  ],
  "hist_hammurabi_code": [
    "mesopotamia"
  ],
  "ir_achaemenid": [
    "persia",
    "mesopotamia",
    "levant",
    "turkey",
    "egypt"
  ],
  "ir_parthian": [
    "persia",
    "mesopotamia",
    "turkey"
  ],
  "ir_sasanian": [
    "persia",
    "mesopotamia",
    "turkey",
    "levant"
  ],
  "gr_alexander_empire": [
    "greece",
    "persia",
    "turkey",
    "mesopotamia",
    "levant",
    "egypt"
  ],
  "al_conquer_egypt_332": [
    "greece",
    "egypt",
    "levant"
  ],
  "al_achaemenid_defeat_330": [
    "greece",
    "persia",
    "mesopotamia"
  ],
  "it_roman_empire": [
    "italy",
    "greece",
    "turkey",
    "levant",
    "egypt",
    "mesopotamia"
  ],
  "it_east_roman": [
    "italy",
    "greece",
    "turkey",
    "levant",
    "egypt"
  ],
  "hist_ottoman_empire": [
    "turkey",
    "mesopotamia",
    "levant",
    "arabian-peninsula",
    "egypt",
    "greece"
  ],
  "hist_ottoman_dissolution": [
    "turkey",
    "mesopotamia",
    "levant",
    "arabian-peninsula",
    "egypt"
  ],
  "eg_islamic_dynasties": [
    "egypt",
    "levant"
  ],
  "hist_world_war_1": [
    "mesopotamia",
    "levant",
    "arabian-peninsula",
    "persia"
  ],
  "hist_world_war_2": [
    "mesopotamia",
    "levant",
    "persia"
  ],
  "eg_byzantine_rule": [
    "egypt",
    "turkey"
  ],
  "eg_ottoman_direct": [
    "egypt",
    "turkey"
  ]
};
const WEST_ASIA_REGION_IDS=['turkey','persia','mesopotamia','levant','arabian-peninsula'];
function normalizeWestAsiaRegions(dataset){
 const asia=dataset.continents.find(c=>c.id==='asia');
 if(asia){
  asia.children=asia.children.filter(c=>c.id!=='west-asia');
  const wanted=[['persia','伊朗／波斯'],['turkey','土耳其／安那托利亞'],['mesopotamia','兩河流域（伊拉克）'],['levant','黎凡特'],['arabian-peninsula','阿拉伯半島']];
  for(const [id,label] of wanted){
   const existing=asia.children.find(c=>c.id===id);
   if(!existing)asia.children.push({id,name:label});
   else if(id==='turkey'&&existing.name==='土耳其')existing.name=label;
  }
  const sortRank=new Map(wanted.map(([id],i)=>[id,i]));
  const sorted=asia.children.filter(c=>sortRank.has(c.id)).sort((a,b)=>sortRank.get(a.id)-sortRank.get(b.id));
  const place=asia.children.findIndex(c=>c.id==='persia');
  asia.children=asia.children.filter(c=>!sortRank.has(c.id));
  asia.children.splice(place<0?Math.min(5,asia.children.length):place,0,...sorted);
 }
 for(const event of dataset.events){
  let ids=Array.isArray(event.regionIds)?event.regionIds:[];
  const legacy=ids.includes('west-asia');
  ids=ids.filter(id=>id!=='west-asia');
  if(legacy && !WEST_ASIA_REGION_OVERRIDES[event.id]){
   // Unknown user-authored item: preserve the original umbrella's coverage without guessing.
   ids.push(...WEST_ASIA_REGION_IDS);
   event.regionMigrationReview=true;
  }
  const additions=WEST_ASIA_REGION_OVERRIDES[event.id]||[];
  event.regionIds=[...new Set([...ids,...additions])];
 }
}


// v9.0 — requested West Asian, European and French historical milestones; original Islam entry is renamed in place.
const HISTORY_V89_SEED=[
  {
    "id": "wa_babylonian_exile_586",
    "nameZh": "巴比倫之囚",
    "nameEn": "Babylonian Captivity",
    "start": -586,
    "end": -538,
    "type": "重大事件",
    "precision": "約",
    "regionIds": [
      "levant",
      "mesopotamia"
    ],
    "source": "https://www.britannica.com/event/Babylonian-Captivity",
    "notes": "新巴比倫王尼布甲尼撒二世攻占耶路撒冷後，猶大菁英與居民分批被遷往巴比倫。首次重要流放發生在前597年，前586年聖殿被毀及更大規模流放；前539年波斯征服巴比倫，前538年居魯士允許流亡者返鄉。此處以主要流放期前586～前538年呈現。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "巴比倫之囚"
  },
  {
    "id": "wa_christianity_emergence_30",
    "nameZh": "基督教的誕生",
    "nameEn": "Origins of Christianity",
    "start": 30,
    "end": null,
    "type": "重大事件",
    "precision": "約",
    "regionIds": [
      "levant"
    ],
    "source": "https://www.britannica.com/topic/Christianity",
    "notes": "基督教源於西元1世紀羅馬統治下的猶太地區（今黎凡特）；耶穌去世後其追隨者逐步建立早期教會。以約西元30年作簡化標記，並非宗教有單一精確成立日，也不等於耶穌的出生年份。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "基督教興起"
  },
  {
    "id": "wa_battle_talas_751",
    "nameZh": "怛羅斯戰役",
    "nameEn": "Battle of Talas",
    "start": 751,
    "end": null,
    "type": "戰爭",
    "precision": "確定",
    "regionIds": [
      "china",
      "mesopotamia",
      "persia"
    ],
    "source": "https://en.wikipedia.org/wiki/Battle_of_Talas",
    "notes": "751年唐朝將領高仙芝與阿拔斯王朝及其盟友在中亞怛羅斯河附近交戰，唐軍敗退；戰場約位於今吉爾吉斯及哈薩克交界一帶。因目前地區分類未另設「中亞」，這裡以唐朝、阿拔斯政權所屬區域作關聯標籤，而非表示戰事發生在伊朗或伊拉克境內。造紙術是否直接因該戰傳播仍有史學討論。",
    "sourceType": "wikipedia",
    "isSeed": true,
    "shortName": "怛羅斯"
  },
  {
    "id": "wa_seljuk_westward_islamization_960",
    "nameZh": "塞爾柱突厥人西遷與改信伊斯蘭教",
    "nameEn": "Seljuk Oghuz conversion to Islam and westward migration",
    "start": 960,
    "end": 1055,
    "type": "重大事件",
    "precision": "約",
    "regionIds": [
      "persia",
      "mesopotamia"
    ],
    "source": "https://www.britannica.com/topic/Seljuq",
    "notes": "約10世紀，來自中亞的烏古斯（Oghuz）突厥部落中，塞爾柱所屬群體逐步接受伊斯蘭教；11世紀勢力向呼羅珊、伊朗高原與巴格達推進，1055年圖格里勒進入巴格達。此為長期遷徙與改宗進程，不是單一日的事件；也不等同6–8世紀的「西突厥汗國」整體改信伊斯蘭教。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "突厥西遷與改宗"
  },
  {
    "id": "wa_abbasid_baghdad_capital_762",
    "nameZh": "阿拔斯王朝定都巴格達",
    "nameEn": "Abbasid capital established in Baghdad",
    "start": 762,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "mesopotamia"
    ],
    "source": "https://www.khanacademy.org/humanities/art-islam/chronological-periods-islamic/islamic-art-medieval/a/the-founding-of-baghdad",
    "notes": "762年，阿拔斯王朝哈里發曼蘇爾（al-Mansur）在底格里斯河畔興建巴格達圓城，逐步確立帝國政治中心。阿拔斯王朝成立於750年，建都巴格達不是其創建年份。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "阿拔斯定都"
  },
  {
    "id": "wa_mongol_sack_baghdad_1258",
    "nameZh": "蒙古攻陷巴格達",
    "nameEn": "Mongol Siege of Baghdad",
    "start": 1258,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "mesopotamia",
      "persia"
    ],
    "source": "https://en.wikipedia.org/wiki/Siege_of_Baghdad_(1258)",
    "notes": "1258年旭烈兀率蒙古軍攻陷巴格達，阿拔斯王朝在巴格達的哈里發統治終結。這是兩河流域的重要轉折；不代表所有伊斯蘭政權在1258年同時消失，開羅的阿拔斯名義哈里發體系後來仍存在。",
    "sourceType": "wikipedia",
    "isSeed": true,
    "shortName": "巴格達陷落"
  },
  {
    "id": "wa_kingdom_jerusalem_1099",
    "nameZh": "耶路撒冷王國",
    "nameEn": "Kingdom of Jerusalem",
    "start": 1099,
    "end": 1291,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "levant"
    ],
    "source": "https://www.britannica.com/place/kingdom-of-Jerusalem",
    "notes": "第一次十字軍於1099年攻取耶路撒冷後建立的拉丁十字軍王國。1187年薩拉丁奪回耶路撒冷城，但王國政權在沿海據點繼續存在，直到1291年阿卡陷落才結束。期間領土與實際首都曾多次變動。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "耶路撒冷王國"
  },
  {
    "id": "wa_baldwin_iv_reign_1174",
    "nameZh": "鮑德溫四世統治耶路撒冷王國",
    "nameEn": "Reign of Baldwin IV of Jerusalem",
    "start": 1174,
    "end": 1185,
    "type": "在位期間",
    "precision": "確定",
    "regionIds": [
      "levant"
    ],
    "source": "https://en.wikipedia.org/wiki/Baldwin_IV_of_Jerusalem",
    "notes": "耶路撒冷國王鮑德溫四世（Baldwin IV，俗稱「痲瘋國王」）於1174至1185年在位，面臨薩拉丁勢力擴張並曾於1177年蒙吉薩戰役獲勝；1185年病逝。",
    "sourceType": "wikipedia",
    "isSeed": true,
    "shortName": "鮑德溫四世"
  },
  {
    "id": "wa_saladin_jerusalem_1187",
    "nameZh": "薩拉丁收復耶路撒冷",
    "nameEn": "Saladin recaptures Jerusalem",
    "start": 1187,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "levant",
      "egypt"
    ],
    "source": "https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1187)",
    "notes": "1187年薩拉丁在哈丁戰役擊敗十字軍主要軍力，並於10月2日重新奪回耶路撒冷城。這不是收復整個黎凡特所有十字軍據點；耶路撒冷王國後來仍以其他城市為中心存續。",
    "sourceType": "wikipedia",
    "isSeed": true,
    "shortName": "薩拉丁收復聖城"
  },
  {
    "id": "eu_black_death_1347",
    "nameZh": "歐洲黑死病",
    "nameEn": "Black Death in Europe",
    "start": 1347,
    "end": 1353,
    "type": "重大事件",
    "precision": "約",
    "regionIds": [
      "greece",
      "italy",
      "germany",
      "france",
      "austria",
      "spain",
      "uk",
      "czechia",
      "sweden",
      "belgium",
      "netherlands",
      "poland",
      "serbia",
      "romania",
      "bulgaria"
    ],
    "source": "https://www.encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/black-death",
    "notes": "約1347至1353年鼠疫在歐洲廣泛流行，造成劇烈人口損失與社會經濟變化；實際流行年份和嚴重程度因各地而異，瘟疫同時波及西亞及北非。此處僅以「歐洲首波疫情」作主要時間軸範圍。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "黑死病"
  },
  {
    "id": "fr_second_empire_1852",
    "nameZh": "法蘭西第二帝國",
    "nameEn": "Second French Empire",
    "start": 1852,
    "end": 1870,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "france"
    ],
    "source": "https://www.assemblee-nationale.fr/gouv_parl/regimes.asp",
    "notes": "1852年拿破崙三世建立法蘭西第二帝國；1870年普法戰爭色當戰敗、皇帝被俘後帝制終結，接續第三共和國。與1804年拿破崙一世的第一帝國不同。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "第二帝國"
  },
  {
    "id": "fr_normandy_landings_1944",
    "nameZh": "諾曼第登陸（D-Day）",
    "nameEn": "Normandy landings (D-Day)",
    "start": 1944,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "france",
      "uk",
      "usa",
      "canada",
      "germany"
    ],
    "source": "https://www.nationalww2museum.org/war/topics/d-day-and-normandy-campaign",
    "notes": "1944年6月6日，盟軍在法國諾曼第展開大規模登陸，參與者包括美國、英國、加拿大及其他盟國部隊，目標是從西線解放德國占領下的西歐。時間軸僅精確至「年」，完整日期保存於此備註。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "諾曼第登陸"
  },
  {
    "id": "fr_paris_liberation_1944",
    "nameZh": "巴黎光復",
    "nameEn": "Liberation of Paris",
    "start": 1944,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "france",
      "usa",
      "germany"
    ],
    "source": "https://www.defense.gouv.fr/actualites/25-aout-1944-paris-libere",
    "notes": "1944年8月19日至25日巴黎抵抗力量起義，法國勒克萊爾第二裝甲師與美國第四步兵師等盟軍部隊進入巴黎；德軍於8月25日投降，巴黎光復。時間軸只顯示1944年，具體日期詳見備註。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "巴黎光復"
  },
  {
    "id": "fr_fourth_republic_1946",
    "nameZh": "法蘭西第四共和國",
    "nameEn": "French Fourth Republic",
    "start": 1946,
    "end": 1958,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "france"
    ],
    "source": "https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/quatrieme-republique",
    "notes": "1946年10月27日第四共和國憲法公布施行；1958年第五共和國憲法通過、第四共和國體制告終。部分官方政治任期資料延至1959年總統交接，此處依通行憲政分期採1946至1958。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "第四共和國"
  }
];


// v9.0 — Levant: ancient Israel, Roman Judea, early Muslim period, mandate and independence.
const LEVANT_V90_SEED=[
  {
    "id": "lv_united_kingdom_israel_1020",
    "nameZh": "統一以色列王國（傳統記載）",
    "nameEn": "United Monarchy of Israel (traditional chronology)",
    "start": -1020,
    "end": -931,
    "type": "歷史時期",
    "precision": "約",
    "regionIds": [
      "levant"
    ],
    "source": "https://www.britannica.com/place/ancient-Israel",
    "notes": "依《希伯來聖經》的傳統敘事，掃羅、大衛、所羅門先後統治一個聯合王國；所羅門去世後，傳統上約前930年分為北方以色列王國與南方猶大王國。統一王國的政治規模及史實程度是考古與史學爭論議題，這裡採傳統年代作對照，不視為無爭議的確定史實。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "統一以色列王國"
  },
  {
    "id": "lv_david_reign_1010",
    "nameZh": "大衛王在位",
    "nameEn": "Reign of King David",
    "start": -1010,
    "end": -970,
    "type": "在位期間",
    "precision": "約",
    "regionIds": [
      "levant"
    ],
    "source": "https://jewishvirtuallibrary.org/king-david",
    "notes": "依傳統編年，大衛王約於前1010至前970年在位，與耶路撒冷作為政治中心的興起有關。文獻所述王國幅員與統治細節尚存考古學爭論；不同編年可相差數年。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "大衛王"
  },
  {
    "id": "lv_solomon_reign_970",
    "nameZh": "所羅門王在位",
    "nameEn": "Reign of King Solomon",
    "start": -970,
    "end": -931,
    "type": "在位期間",
    "precision": "約",
    "regionIds": [
      "levant"
    ],
    "source": "https://www.britannica.com/biography/Solomon",
    "notes": "依傳統編年，所羅門王約前970至前931年在位。《列王紀》記載他興建耶路撒冷第一聖殿；關於其統治範圍及聖殿始建年代的考古證據與史料解讀仍有爭論。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "所羅門王"
  },
  {
    "id": "lv_first_temple_960",
    "nameZh": "所羅門興建第一聖殿（傳統記載）",
    "nameEn": "Solomon’s First Temple (traditional dating)",
    "start": -960,
    "end": null,
    "type": "重大事件",
    "precision": "約",
    "regionIds": [
      "levant"
    ],
    "source": "https://www.biblegateway.com/resources/encyclopedia-of-the-bible/Jerusalem-Temple",
    "notes": "據《列王紀》與《歷代志》，所羅門王在耶路撒冷興建第一聖殿。前960年左右是常用的傳統推定年代，並非經現代考古獨立確認的精確完工日期。第一聖殿傳統上在前586年新巴比倫攻陷耶路撒冷時毀壞。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "第一聖殿"
  },
  {
    "id": "lv_rome_jerusalem_63bc",
    "nameZh": "羅馬共和國征服耶路撒冷",
    "nameEn": "Pompey captures Jerusalem",
    "start": -63,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "levant"
    ],
    "source": "https://cojs.org/Judea_Under_Roman_Rule_-63_BCE-66_CE/",
    "notes": "前63年，羅馬將領龐培攻佔耶路撒冷，猶太地進入羅馬勢力範圍；早期曾透過附庸王國間接控制，西元6年才開始作為猶太行省直接行政管理。此處是羅馬統治轉折節點，不表示猶太居民從此全部離開該地。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "羅馬征服聖城"
  },
  {
    "id": "lv_herod_matthew_infants_4bc",
    "nameZh": "希律王與《馬太福音》嬰孩事件",
    "nameEn": "Herod and the infancy narrative in Matthew",
    "start": -4,
    "end": null,
    "type": "宗教文獻記載",
    "precision": "約",
    "regionIds": [
      "levant"
    ],
    "source": "https://www.britannica.com/biography/Herod-king-of-Judaea",
    "notes": "希律大帝約前37年至前4年統治猶太地，並在基督教形成前去世。《馬太福音》第二章記載他試圖殺害嬰兒耶穌、命令殺害伯利恆嬰孩；缺乏獨立同時代史料可確認事件真的發生。因此不可寫為「希律王迫害基督教」，年份僅是傳統故事的約略定位。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "希律與嬰孩事件"
  },
  {
    "id": "lv_second_temple_destroyed_70",
    "nameZh": "羅馬攻陷耶路撒冷與第二聖殿被毀",
    "nameEn": "Destruction of the Second Temple",
    "start": 70,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "levant"
    ],
    "source": "https://academic.oup.com/edited-volume/61673/chapter-abstract/548074399",
    "notes": "西元66年爆發第一次猶太—羅馬戰爭；70年提圖斯率羅馬軍攻陷耶路撒冷，第二聖殿遭毀。造成大量死傷、奴役與流亡，對猶太教歷史影響深遠。但猶太離散社群此前已存在，且猶太居民也並非在70年全數離開本地。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "第二聖殿被毀"
  },
  {
    "id": "lv_bar_kokhba_revolt_135",
    "nameZh": "巴爾科赫巴起義失敗與猶太離散加劇",
    "nameEn": "Bar Kokhba revolt and dispersal",
    "start": 132,
    "end": 135,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "levant"
    ],
    "source": "https://www.cambridge.org/core/books/abs/archaeology-of-the-holy-land/from-70-ce-to-the-barkokhba-revolt-132135136-ce/ECD07BCC94A112CA30E2B9B2C1C7F39B",
    "notes": "132–135年間，猶太人反抗羅馬統治的巴爾科赫巴起義失敗，造成人口與聚落重大損失；羅馬改建耶路撒冷並限制猶太人進入。這加劇了既有的猶太離散，但不等同「羅馬使所有猶太人從此流亡」，當地仍持續存在猶太社群。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "巴爾科赫巴起義"
  },
  {
    "id": "lv_muslim_capture_jerusalem_638",
    "nameZh": "阿拉伯穆斯林征服耶路撒冷",
    "nameEn": "Rashidun conquest of Jerusalem",
    "start": 638,
    "end": null,
    "type": "重大事件",
    "precision": "約",
    "regionIds": [
      "levant",
      "arabian-peninsula"
    ],
    "source": "https://academic.oup.com/edited-volume/61673/chapter-abstract/548074399",
    "notes": "約637–638年，正統哈里發時期的阿拉伯穆斯林軍隊自東羅馬帝國取得耶路撒冷，傳統記載哈里發歐瑪接受城市投降。史料對投降年份有637或638年的差異，這裡用638年作標記。這是政治統治轉換，不代表居民立刻全部改宗伊斯蘭教。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "穆斯林征服聖城"
  },
  {
    "id": "lv_british_take_jerusalem_1917",
    "nameZh": "一戰英軍佔領耶路撒冷",
    "nameEn": "British capture of Jerusalem in World War I",
    "start": 1917,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "levant",
      "uk",
      "turkey"
    ],
    "source": "https://www.britannica.com/place/Palestine/The-British-mandate",
    "notes": "1917年12月英軍從鄂圖曼帝國手中攻佔耶路撒冷。這屬第一次世界大戰的軍事佔領，不能直接視為國際聯盟託管制度已於1917年成立。同年11月英國發表《貝爾福宣言》，支持在巴勒斯坦建立猶太民族家園，但當地阿拉伯居民的政治前途成為重大爭議。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "英軍佔領聖城"
  },
  {
    "id": "lv_british_mandate_palestine_1920",
    "nameZh": "英國託管巴勒斯坦",
    "nameEn": "British administration and Mandate for Palestine",
    "start": 1920,
    "end": 1948,
    "type": "歷史時期",
    "precision": "確定",
    "regionIds": [
      "levant",
      "uk"
    ],
    "source": "https://www.britannica.com/place/Palestine/The-British-mandate",
    "notes": "一戰後英國於1920年開始在巴勒斯坦實施文官統治；國際聯盟1922年批准託管文書，並於1923年正式生效；1948年5月英國統治終結。此處以1920–1948年概括英國文官治理至託管終止；1917年英軍佔領另列事件。此時期同時涵蓋猶太移民、阿拉伯巴勒斯坦民族運動及其間日益升高的衝突。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "英國託管巴勒斯坦"
  },
  {
    "id": "lv_israel_independence_1948",
    "nameZh": "以色列建國",
    "nameEn": "Declaration of the State of Israel",
    "start": 1948,
    "end": null,
    "type": "重大事件",
    "precision": "確定",
    "regionIds": [
      "levant"
    ],
    "source": "https://www.britannica.com/place/Palestine/The-British-mandate",
    "notes": "1948年5月14日，在英國託管即將結束之際，大衛·本-古里安宣布成立以色列國。同年爆發第一次阿以戰爭，造成廣泛人口流離失所，特別是大量巴勒斯坦阿拉伯人逃離或被逐離家園；建國與戰爭涉及不同民族的歷史記憶，應分別理解。時間軸僅顯示年份，完整日期見此備註。",
    "sourceType": "reference",
    "isSeed": true,
    "shortName": "以色列建國"
  }
];

// v9.1 · Individual lifespans are historical annotations, NOT a dynasty/era bar.
// Dates are approximate; no claim is made of an exact birth year for Jesus or Muhammad.
const RELIGIOUS_FIGURE_LIFESPAN_V91_SEED=[
 {id:'lv_jesus_lifespan_4bc_30',nameZh:'耶穌基督在世期間',shortName:'耶穌基督',nameEn:'Lifetime of Jesus of Nazareth',start:-4,end:30,type:'在世期間',source:'https://www.britannica.com/biography/Jesus-Christ',notes:'耶穌（拿撒勒人耶穌）的出生年代通常估計約西元前6至前4年，逝世時間約西元30年（另有約33年的研究估計）。時間軸為便於比較，以約前4年至西元30年畫出在世期間；出生與死亡均非可確定到單一年份的歷史日期。耶穌活動於羅馬統治下的猶太地區；基督教的形成與傳播是其去世前後逐步發展的歷史歷程，與既有「基督教的誕生」事件不同。',precision:'約',regionIds:['levant'],sourceType:'reference',isSeed:true},
 {id:'ar_muhammad_lifespan_570_632',nameZh:'先知穆罕默德在世期間',shortName:'先知穆罕默德',nameEn:'Lifetime of the Prophet Muhammad',start:570,end:632,type:'在世期間',source:'https://www.britannica.com/biography/Muhammad',notes:'先知穆罕默德一般記為約570年出生於麥加、632年卒於麥地那，出生年份並非完全確定；約610年開始傳達伊斯蘭教啟示，622年遷徙麥地那（希吉拉）。此條目標示人物一生，而既有約610年的「伊斯蘭教的誕生」是另一個宗教史事件，兩者不重複。',precision:'約',regionIds:['arabian-peninsula'],sourceType:'reference',isSeed:true}
];


// v9.2 · Only the missing history: two Hellenistic successor states,
// Seljuk Anatolia, and two cross-cultural religious/diplomatic milestones.
const HISTORY_V92_SEED=[
 {id:'gr_hellenistic_macedon_323',nameZh:'馬其頓王國（希臘化時期）',shortName:'馬其頓王國',nameEn:'Kingdom of Macedon in the Hellenistic period',start:-323,end:-168,type:'歷史時期',precision:'約',regionIds:['greece'],source:'https://www.livius.org/articles/concept/diadochi/chronology-of-the-diadochi/',notes:'亞歷山大於前323年去世後，馬其頓本土仍有王國與繼業者政權延續。前277年起主要由安提柯王朝統治，前168年彼得那戰役後羅馬擊敗馬其頓。採前323至前168年作高中歷史簡化主線，並非同一王朝自始至終不變。',sourceType:'reference',isSeed:true},
 {id:'wa_seleucid_kingdom_312',nameZh:'塞琉古王國',shortName:'塞琉古王國',nameEn:'Seleucid Empire',start:-312,end:-63,type:'歷史時期',precision:'確定',regionIds:['mesopotamia','levant','persia','turkey'],source:'https://www.iranicaonline.org/articles/seleucid-empire/',notes:'前312年塞琉古一世奪取巴比倫，逐步建立希臘化帝國；西元前63年其在敘利亞的殘餘政權被羅馬併入。它與托勒密王國、馬其頓王國並稱亞歷山大死後三大希臘化繼業國。領土隨年代大幅縮小：伊朗及兩河流域部分地區較早被安息等政權取代，並非前312至前63年全程統治所列每個地區。',sourceType:'reference',isSeed:true},
 {id:'tr_seljuk_sultanate_rum_1077',nameZh:'塞爾柱土耳其（羅姆蘇丹國）',shortName:'塞爾柱土耳其',nameEn:'Sultanate of Rum (Seljuks of Anatolia)',start:1077,end:1308,type:'歷史時期',precision:'約',regionIds:['turkey'],source:'https://en.wikipedia.org/wiki/Sultanate_of_Rum',notes:'羅姆蘇丹國約1077至1308年，是塞爾柱突厥人在安那托利亞建立的政權，先後以尼西亞、科尼亞等地為重心；與以伊朗、兩河流域為中心的大塞爾柱帝國（1037–1194）應予區分。鄂圖曼帝國自1299年興起，兩者短暫重疊並無矛盾。',sourceType:'reference',isSeed:true},
 {id:'ir_zoroaster_zoroastrianism_1000bc',nameZh:'先知瑣羅亞斯德傳播祆教（拜火教）',shortName:'瑣羅亞斯德與祆教',nameEn:'Zoroaster and the emergence of Zoroastrianism',start:-1000,end:null,type:'重大事件',precision:'約',regionIds:['persia'],source:'https://www.iranicaonline.org/articles/zoroaster-ii-general-survey/',notes:'瑣羅亞斯德（Zarathustra / Zoroaster）是祆教（瑣羅亞斯德教；俗稱「拜火教」）的先知。學界對其活動年代及地點爭論甚多，部分研究推定約前1000年或更早，另有前7至前6世紀等看法。一般認為與古代伊朗語文化圈，可能偏東伊朗／中亞相關，未能確定其活動於今日伊朗的某個地點。本時間軸只以「約前1000年」作視覺參考，不表示該年確切創教；火在此信仰具有神聖象徵，不宜理解為單純崇拜火焰。',sourceType:'reference',isSeed:true},
 {id:'cn_zhangqian_parthia_deputies_119bc',nameZh:'張騫遣副使出使安息',shortName:'張騫副使通安息',nameEn:'Zhang Qian sends deputy envoys to Parthia',start:-119,end:-115,type:'重大事件',precision:'約',regionIds:['china','persia'],source:'https://ctext.org/shiji/da-wan-lie-zhuan/zhs',notes:'漢武帝時張騫第二次出使西域，約前119年再赴烏孫，後派副使分赴安息（帕提亞）、大宛、大夏等地。《史記·大宛列傳》明載「騫因分遣副使……安息」；約前115年前後張騫返漢並推動中西交通。副使何年確切抵達安息難以確認，故以約前119–前115年概括外交往來，而非聲稱張騫本人到達安息。',sourceType:'reference',isSeed:true}
];

// v9.2 Cloud 1.6 — historically sourced East-West contact, Mongol khanates, and early Sino-Japanese exchange (21 events).
const HISTORY_V16_SEED=[{"id":"cn_roman_daqin_embassy_166","nameZh":"大秦（羅馬）「使者」抵達東漢朝廷","nameEn":"Reported Roman embassy to the Eastern Han court","start":166,"end":null,"type":"重大事件","precision":"確定","regionIds":["china","italy"],"source":"https://contents.nahf.or.kr/id/NAHF.jo.d_0003_0118_0110_0010","notes":"《後漢書·西域傳》記載漢桓帝延熹九年（166），自稱大秦王「安敦」所遣者由日南（今越南中部一帶）進入漢境，向東漢朝廷獻象牙、犀角、玳瑁。東漢都城為洛陽，通常概括為大秦使者赴洛陽；原文沒有逐字寫明使者進城地點。其是否奉羅馬皇帝正式派遣並無確證，也可能是以大秦使者名義來訪的商人，故標題保留引號。","sourceType":"reference","isSeed":true,"shortName":"大秦使者訪漢"},{"id":"it_marco_polo_yuan_china_1275_1291","nameZh":"馬可波羅旅居元朝中國","nameEn":"Marco Polo in Yuan China","start":1275,"end":1291,"type":"文化","precision":"約","regionIds":["china","italy"],"source":"https://www.iranicaonline.org/articles/polo-marco/","notes":"威尼斯旅行者馬可波羅與父親、叔父約1275年在元朝與忽必烈見面，之後長期居留、旅行。據《伊朗百科全書》，一行約1291年從泉州循海路離開中國，1295年回到威尼斯；通俗年表也有將離華年記為約1292年者。此處採1275至約1291年作在華時段，遊記中部分經歷仍有史學討論。","sourceType":"reference","isSeed":true,"shortName":"馬可波羅在元朝"},{"id":"cn_ricci_macao_1582","nameZh":"利瑪竇抵達澳門，後進入明朝內地","nameEn":"Matteo Ricci arrives in Macau and enters Ming China","start":1582,"end":null,"type":"重大事件","precision":"確定","regionIds":["china","italy"],"source":"https://www.icm.gov.mo/rc/viewer/20021/1041","notes":"耶穌會傳教士利瑪竇於1582年8月抵達澳門，開始學習漢語；1583年9月獲准在廣東肇慶居留並展開內地傳教，1601年進入北京。區分「抵達澳門（1582）」與「進入中國內地（1583）」，是早期中西科技、宗教與文化交流的重要里程碑。","sourceType":"reference","isSeed":true,"shortName":"利瑪竇來華"},{"id":"cn_schall_macao_1619","nameZh":"湯若望抵達澳門，後赴明朝北京","nameEn":"Johann Adam Schall von Bell arrives in Macau","start":1619,"end":null,"type":"重大事件","precision":"確定","regionIds":["china","germany"],"source":"https://www.deutsche-biographie.de/sfz77938.html","notes":"德國耶穌會傳教士、天文學家湯若望於1619年7月到達澳門，1622年秋進入中國內地，1623年1月抵達北京；1630年參與修曆工作，明末清初對曆法與天文知識交流影響深遠。不要把1619年「到澳門」誤記為「到北京」。","sourceType":"reference","isSeed":true,"shortName":"湯若望來華"},{"id":"mn_western_campaign_central_asia_1219","nameZh":"蒙古第一次西征：征服中亞花剌子模","nameEn":"Mongol conquest of Khwarazm and Central Asia","start":1219,"end":1225,"type":"戰爭","precision":"約","regionIds":["mongolia","central-asia","persia"],"source":"https://openclass.kl.edu.tw/plan/file/4850/%E6%AD%B7%E5%8F%B2%E7%AC%AC%E4%B8%89%E8%AA%B2%E5%AE%8B%E5%85%83%E6%99%82%E6%9C%9F%E7%9A%84%E6%B0%91%E6%97%8F%E4%BA%92%E5%8B%95.pdf","notes":"成吉思汗率軍西征花剌子模（約1219—1225），攻取河中、中亞諸城，兵鋒擴及今日烏茲別克、土庫曼、哈薩克南部及伊朗、阿富汗部分地區。不同史書對西征起迄年界定略異；不是整個中亞在每一年都受同一政權直接統治。","sourceType":"reference","isSeed":true,"shortName":"蒙古西征中亞"},{"id":"mn_batu_campaign_eastern_europe_1236","nameZh":"蒙古第二次西征：拔都進軍東歐","nameEn":"Batu Khan campaigns in Eastern Europe","start":1236,"end":1242,"type":"戰爭","precision":"約","regionIds":["russia","eastern-europe","central-asia"],"source":"https://openclass.kl.edu.tw/plan/file/4850/%E6%AD%B7%E5%8F%B2%E7%AC%AC%E4%B8%89%E8%AA%B2%E5%AE%8B%E5%85%83%E6%99%82%E6%9C%9F%E7%9A%84%E6%B0%91%E6%97%8F%E4%BA%92%E5%8B%95.pdf","notes":"窩闊臺在位時由拔都等率軍西征（約1236—1242），征服伏爾加河流域、羅斯諸公國與欽察草原，進入波蘭、匈牙利等東歐地區；後形成欽察汗國／金帳汗國的統治基礎。三次西征的年份在教材與研究中略有差異。","sourceType":"reference","isSeed":true,"shortName":"蒙古西征東歐"},{"id":"mn_hulegu_campaign_west_asia_1253","nameZh":"蒙古第三次西征：旭烈兀征服西亞","nameEn":"Hulagu campaigns in Western Asia","start":1253,"end":1260,"type":"戰爭","precision":"約","regionIds":["persia","mesopotamia","levant","turkey"],"source":"https://openclass.kl.edu.tw/plan/file/4850/%E6%AD%B7%E5%8F%B2%E7%AC%AC%E4%B8%89%E8%AA%B2%E5%AE%8B%E5%85%83%E6%99%82%E6%9C%9F%E7%9A%84%E6%B0%91%E6%97%8F%E4%BA%92%E5%8B%95.pdf","notes":"蒙哥命旭烈兀西征，約1253—1260年進入波斯與兩河流域；1258年攻陷巴格達，阿拔斯王朝在巴格達的統治結束。蒙古軍隊隨後進入敘利亞，1260年於艾因札魯特遭馬木留克擊敗，擴張受阻，西亞以伊兒汗國為重要繼承政權。","sourceType":"reference","isSeed":true,"shortName":"蒙古西征西亞"},{"id":"mn_ogedei_khanate_1225","nameZh":"窩闊臺汗國","nameEn":"Ögedei Khanate","start":1225,"end":1309,"type":"歷史時期","precision":"約","regionIds":["central-asia","china"],"source":"https://catweb.ncl.edu.tw/class2007/96-3-1-700.pdf","notes":"窩闊臺家族受封地約始於1225年，核心在阿爾泰山西側、葉密立河流域（今新疆北部及哈薩克東部一帶）；13世紀後半海都勢力崛起，1260年代後逐漸形成與元朝抗衡的獨立政治集團，約1309年為元朝與察合臺系勢力瓜分。1225是受封地開端，不表示1225年即已有固定國界的獨立汗國。","sourceType":"reference","isSeed":true,"shortName":"窩闊臺"},{"id":"mn_chagatai_khanate_1225","nameZh":"察合臺汗國（中亞主幹）","nameEn":"Chagatai Khanate in Central Asia","start":1225,"end":1370,"type":"歷史時期","precision":"約","regionIds":["central-asia","china"],"source":"https://dict.revised.moe.edu.tw/dictView.jsp?ID=121722&la=0&powerMode=0","notes":"成吉思汗次子察合臺受封中亞地區，主要控制河中、七河流域及今日新疆一帶；13至14世紀疆域、權力中心多次變化，14世紀分為東西系。此條以1225至約1370年代表中亞西部主幹的發展脈絡，並非整個察合臺後裔政權在1370年全部滅亡；東察合臺系仍延續更久。","sourceType":"reference","isSeed":true,"shortName":"察合臺"},{"id":"mn_golden_horde_1242","nameZh":"欽察汗國（金帳汗國）","nameEn":"Golden Horde / Kipchak Khanate","start":1242,"end":1502,"type":"歷史時期","precision":"約","regionIds":["russia","eastern-europe","central-asia"],"source":"https://catweb.ncl.edu.tw/class2007/96-3-1-700.pdf","notes":"拔都西征後形成的朮赤家族汗國，版圖主要位於欽察草原、伏爾加河流域、黑海北岸及俄羅斯諸公國上層宗主權範圍，亦影響克里米亞與東歐。約13世紀中葉形成、15世紀逐漸分裂，通常以1502年大帳汗國覆滅作統治結束標誌；各附屬地實際統治期間不同。","sourceType":"reference","isSeed":true,"shortName":"欽察（金帳）"},{"id":"mn_ilkhanate_1256","nameZh":"伊兒汗國（波斯／西亞）","nameEn":"Ilkhanate of Persia","start":1256,"end":1335,"type":"歷史時期","precision":"約","regionIds":["persia","mesopotamia","turkey","levant"],"source":"https://catweb.ncl.edu.tw/class2007/96-3-1-700.pdf","notes":"旭烈兀於1256年前後在波斯建立伊兒汗國，核心今伊朗、伊拉克、亞塞拜然及安那托利亞東部，勢力隨年代起伏；1258年攻陷巴格達是重要里程碑。1335年汗王阿布·賽義德逝世後，中央集權崩解，殘餘伊兒系政權尚有短期延續，故本圖以主要汗國時期至1335年表示。","sourceType":"reference","isSeed":true,"shortName":"伊兒汗國"},{"id":"jp_wa_na_king_gold_seal_57","nameZh":"漢光武帝賜倭奴國王「漢委奴國王」金印","nameEn":"Han confers the King of Na gold seal","start":57,"end":null,"type":"重大事件","precision":"確定","regionIds":["china","japan"],"source":"https://dict.revised.moe.edu.tw/dictView.jsp?ID=82134&la=0&powerMode=0","notes":"《後漢書·東夷列傳》記載建武中元二年（57），倭奴國遣使東漢，光武帝賜予印綬；日本福岡志賀島1784年出土刻有「漢委奴國王」的金印，通常視為漢倭早期官方交往的重要物證。印文的「委」一般讀作倭，金印現藏福岡市博物館。","sourceType":"reference","isSeed":true,"shortName":"漢委奴國王金印"},{"id":"jp_himiko_wei_envoy_238","nameZh":"卑彌呼遣使曹魏，受封「親魏倭王」","nameEn":"Himiko receives the Wei title Queen of Wa","start":238,"end":null,"type":"重大事件","precision":"確定","regionIds":["japan","china"],"source":"https://ctext.org/text.pl?if=gb&node=603372","notes":"《三國志·魏書·倭人傳》記載景初二年（238），邪馬臺國女王卑彌呼遣難升米等經帶方郡赴魏都洛陽，魏明帝曹叡下詔封「親魏倭王」，賜金印紫綬等。部分後世記載作239年，本圖以《三國志》原文所載238年為主；賜物正式交付與使節返國另有時間差。","sourceType":"reference","isSeed":true,"shortName":"卑彌呼通魏"},{"id":"jp_sui_sunrise_letter_607","nameZh":"遣隋使國書：「日出處天子致書日沒處天子」","nameEn":"Japanese letter to Emperor Yang of Sui","start":607,"end":null,"type":"重大事件","precision":"確定","regionIds":["japan","china"],"source":"https://japanknowledge.com/introduction/keyword.html?i=1146","notes":"607年倭國遣使隋朝，國書自稱「日出處天子，致書日沒處天子，無恙」；《隋書·倭國傳》記載隋煬帝對其以天子自稱感到不悅。使節一般與小野妹子連結，呈現7世紀日本試圖以較對等方式與中國王朝交往的外交姿態。","sourceType":"reference","isSeed":true,"shortName":"日出處天子國書"},{"id":"jp_taika_reform_645","nameZh":"日本大化改新開始","nameEn":"Taika Reform begins in Japan","start":645,"end":null,"type":"重大事件","precision":"確定","regionIds":["japan"],"source":"https://repository.nabunken.go.jp/dspace/bitstream/11177/3923/1/AA12272648_1998_018_021.pdf","notes":"645年中大兄皇子、中臣鎌足等發動乙巳之變，之後推動中央集權與土地、戶籍、官制改革；646年發布改新詔。它早於663年白江口之戰，因此白江口戰敗不是大化改新的起因；但戰敗後促進防務整備及後續律令制度發展。","sourceType":"reference","isSeed":true,"shortName":"大化改新"},{"id":"jp_baekgang_battle_663","nameZh":"白江口之戰：唐、新羅擊敗倭國與百濟復國軍","nameEn":"Battle of Baekgang / Hakusukinoe","start":663,"end":null,"type":"戰爭","precision":"確定","regionIds":["japan","korea","china"],"source":"https://repository.nabunken.go.jp/dspace/bitstream/11177/3923/1/AA12272648_1998_018_021.pdf","notes":"663年，倭國援助百濟復國勢力，在朝鮮半島白江口一帶與唐、新羅聯軍交戰而敗。戰後日本加強九州沿海防衛、城堡與軍事部署，並影響後續律令國家體制的整備。大化改新始於645年，不宜誤稱「663年才開始大化改新」。","sourceType":"reference","isSeed":true,"shortName":"白江口之戰"},{"id":"jp_tang_envoys_630_894","nameZh":"日本遣唐使與中日文化交流","nameEn":"Japanese diplomatic missions to Tang China","start":630,"end":894,"type":"文化","precision":"確定","regionIds":["japan","china"],"source":"https://kotobank.jp/word/%E9%81%A3%E5%94%90%E4%BD%BF-60954","notes":"日本自630年派遣正式遣唐使赴唐，隨行留學生、學問僧傳入律令、佛教、典籍、藝術與都市制度。最後實際出航的遣唐使在838年；894年菅原道真建議停止新一次遣使計畫，傳統年表因此常用630—894年概括制度時段，並非每年都有使團或894年最後一次出航。","sourceType":"reference","isSeed":true,"shortName":"遣唐使"},{"id":"jp_yuan_invasion_1274","nameZh":"元朝第一次征日（文永之役）","nameEn":"First Mongol-Yuan invasion of Japan","start":1274,"end":null,"type":"戰爭","precision":"確定","regionIds":["japan","china","korea"],"source":"https://www.archives.go.jp/about/activity/international/jp_mn50/english/ch01.html","notes":"忽必烈命元、高麗聯軍於1274年攻擊對馬、壹岐及九州博多灣周邊，日本鎌倉幕府武士抵抗，遠征軍未能建立長期據點並撤退。當時海上遭遇風浪的細節仍有討論，不能把1274年與1281年都簡化為完全因颱風而失敗。","sourceType":"reference","isSeed":true,"shortName":"文永之役"},{"id":"jp_yuan_invasion_1281","nameZh":"元朝第二次征日（弘安之役），遭颱風重創","nameEn":"Second Mongol-Yuan invasion and kamikaze storm","start":1281,"end":null,"type":"戰爭","precision":"確定","regionIds":["japan","china","korea"],"source":"https://www.archives.go.jp/about/activity/international/jp_mn50/english/ch01.html","notes":"元軍於1281年再次攻日，日本沿海防壘與武士抗擊，加上大規模艦隊遭強烈風暴（一般視為颱風）重創，使第二次遠征失敗。後世稱護佑日本的「神風」，但不是唯一因素；應與1274年第一次征日分成兩筆。","sourceType":"reference","isSeed":true,"shortName":"弘安之役與神風"},{"id":"cn_qi_jiguang_wokou_1559_1565","nameZh":"戚繼光率戚家軍抗倭寇","nameEn":"Qi Jiguang campaigns against wokou raiders","start":1559,"end":1565,"type":"戰爭","precision":"約","regionIds":["china","japan"],"source":"https://www.dpm.org.cn/court/figure/104028.html","notes":"明嘉靖年間，戚繼光約1559年編練戚家軍，1561年取得台州大捷，1562—1564年轉戰福建，與俞大猷、劉顯等協同打擊沿海倭寇；1565年前後仍有掃蕩。明代「倭寇」包含日本海上武裝、華人走私與其他海上勢力，不可一概視為日本國家正式軍隊。","sourceType":"reference","isSeed":true,"shortName":"戚繼光抗倭"},{"id":"kr_imjin_war_1592_1598","nameZh":"萬曆朝鮮之役：明、朝鮮抵抗日本侵朝","nameEn":"Japanese invasions of Korea / Imjin War","start":1592,"end":1598,"type":"戰爭","precision":"確定","regionIds":["korea","china","japan"],"source":"https://academic.oup.com/edited-volume/61799/chapter-abstract/546328209","notes":"豐臣秀吉於1592年發動侵朝戰爭（壬辰倭亂），明朝援軍與朝鮮陸海軍共同抵抗；1593年後停戰談判失敗，1597年日軍再侵。1598年豐臣秀吉病逝後日軍撤回，但戰爭結局也與朝鮮和明軍長期抗戰、補給困難及軍事挫折密切相關。此戰對中、日、朝三方造成重大影響。","sourceType":"reference","isSeed":true,"shortName":"萬曆朝鮮之役"}];

const DEFAULT_DATA={version:19,continents:CONTINENTS.map(c=>({...c,children:c.children.map(a=>({id:a[0],name:a[1]}))})),events:[...SEED.map((r,i)=>({id:'cn_'+i,nameZh:r[0],nameEn:r[1],start:r[2],end:r[3],type:r[4],source:'https://zh.wikipedia.org/wiki/'+encodeURIComponent(r[5]),notes:r[6],precision:r[7],regionIds:['china'],sourceType:'wikipedia',isSeed:true})),...EGYPT_SEED,...EGYPT_EVENT_SEED,...PERSIAN_GREEK_SEED,...CLASSICAL_ROME_SEED,...ROMAN_MILESTONE_SEED,...WEST_EUROPE_HISTORY_SEED,...MODERN_WORLD_SEED,...EGYPT_AMERICA_SEED,EGYPT_REPUBLIC_SEED,...FRANCE_BRITAIN_SEED,...HISTORY_V87_SEED,...WEST_ASIA_V88_SEED,...HISTORY_V89_SEED,...LEVANT_V90_SEED,...RELIGIOUS_FIGURE_LIFESPAN_V91_SEED,...HISTORY_V92_SEED,...HISTORY_V16_SEED].filter(e=>e.id!=='wa_hellenistic_period')};
normalizeWestAsiaRegions(DEFAULT_DATA);
applyHistoryRevisionsV92(DEFAULT_DATA,{addMissing:false});
const KEY='history-atlas-v1';
const DEFAULT_UI={view:'time',start:-3600,end:2026,zoom:'fit',timeScaleYears:200,selected:[],regionSelectionMode:'all',text:'',focus:'china',folded:[],centerYear:null};
const deepClone=obj=>JSON.parse(JSON.stringify(obj));
let data=deepClone(DEFAULT_DATA),ui=deepClone(DEFAULT_UI),wikiCandidates=[],toastTimer;
// CLOUD: Supabase is authoritative. Never hydrate app data from localStorage.
// For old downloaded HTMLs, the user exports JSON from that origin and imports once here.
if(![500,200,100,50,20,10,5].includes(Number(ui.timeScaleYears)))ui.timeScaleYears=200;
// Non-destructive legacy data migration: preserve existing edits, add v5 seeds, remove requested Exodus seed.
function upgradeHistoryData(){
 const from=Number(data.version)||1;
 if(from>=5)return false;
 if(from<5){
 const africa=data.continents.find(c=>c.id==='africa');
 if(africa&&!africa.children.some(r=>r.id==='egypt'))africa.children.push({id:'egypt',name:'埃及'});
 if(from<4){
  for(const seed of EGYPT_SEED){
   const same=data.events.some(e=>e.id===seed.id||((e.nameZh||'').replace(/時期$/,'')===seed.nameZh.replace(/時期$/,'')&&e.regionIds?.includes('egypt')));
   if(!same)data.events.push(deepClone(seed));
  }
  if(ui.start===-1650&&ui.end===1950)ui.start=-2800;
 }
 const knownAliases={
  'eg_great_pyramid':['古夫金字塔','胡夫金字塔','吉薩大金字塔'],
  'eg_hatshepsut':['哈特謝普蘇特'],
  'eg_akhenaten_reform':['阿肯那頓宗教改革','阿肯那頓'],
  'eg_tutankhamun':['圖坦卡門'],
  'eg_kadesh':['卡迭石戰役','卡德士戰役','卡迭石'],
  'eg_abu_simbel':['阿布辛貝']
 };
 for(const seed of EGYPT_EVENT_SEED){
  const aliases=knownAliases[seed.id]||[];
  const exists=data.events.some(e=>{
   if(e.id===seed.id)return true;
   if(!e.regionIds?.includes('egypt'))return false;
   const title=(e.nameZh||'').trim();
   return title===seed.nameZh||aliases.some(a=>title===a||title.startsWith(a+'（'));
  });
  if(!exists)data.events.push(deepClone(seed));
 }
 }
 // v5: keep original Persian region ID so existing assigned events are not orphaned.
 const asia=data.continents.find(c=>c.id==='asia');
 let persia=data.continents.flatMap(c=>c.children).find(r=>r.id==='persia');
 if(!persia && asia){persia={id:'persia',name:'伊朗／波斯'};asia.children.push(persia)}
 if(persia&&persia.name==='波斯')persia.name='伊朗／波斯';
 const europe=data.continents.find(c=>c.id==='europe');
 if(europe&&!data.continents.some(c=>c.children.some(r=>r.id==='greece')))europe.children.push({id:'greece',name:'希臘'});
 const oldCount=data.events.length;
 // This seeded Exodus event was explicitly removed by the user; do not remove unrelated user-created entries.
 data.events=data.events.filter(e=>e.id!=='eg_moses_exodus'&&!(e.isSeed&&/^(摩西出埃及)/.test(e.nameZh||'')));
 for(const seed of PERSIAN_GREEK_SEED){
  const exists=data.events.some(e=>{
    if(e.id===seed.id)return true;
    if((e.nameZh||'').trim()!==seed.nameZh)return false;
    return seed.regionIds.some(r=>e.regionIds?.includes(r));
  });
  if(!exists)data.events.push(deepClone(seed));
 }
 data.version=5;
 return true;
}
function upgradeHistoryDataV6(){
 const from=Number(data.version)||1;
 if(from>=6)return false;
 const eu=data.continents.find(c=>c.id==='europe');
 const as=data.continents.find(c=>c.id==='asia');
 if(eu){for(const [id,name] of [['greece','希臘'],['italy','義大利']]){
  if(!data.continents.some(c=>c.children.some(r=>r.id===id)))eu.children.push({id,name});
 }}
 if(as&&!data.continents.some(c=>c.children.some(r=>r.id==='turkey')))as.children.push({id:'turkey',name:'土耳其'});
 for(const seed of CLASSICAL_ROME_SEED){
  const exists=data.events.some(e=>e.id===seed.id||((e.nameZh||'').trim()===seed.nameZh&&seed.regionIds.some(id=>e.regionIds?.includes(id))));
  if(!exists)data.events.push(deepClone(seed));
 }
 data.version=6;
 return true;
}
// One-time additive v7.5 migration: preserve user-created and user-edited records.
function upgradeHistoryDataV7(){
 const from=Number(data.version)||1;
 if(from>=7)return false;
 const eu=data.continents.find(c=>c.id==='europe');
 const af=data.continents.find(c=>c.id==='africa');
 const as=data.continents.find(c=>c.id==='asia');
 const ensure=(parent,id,name)=>{
  if(parent&&!data.continents.some(c=>c.children.some(r=>r.id===id)))parent.children.push({id,name});
 };
 ensure(eu,'italy','義大利');ensure(eu,'france','法國');ensure(eu,'uk','英國');
 ensure(af,'egypt','埃及');ensure(as,'turkey','土耳其');
 for(const seed of ROMAN_MILESTONE_SEED){
  const aliases=ROMAN_MILESTONE_ALIASES[seed.id]||[];
  const names=[seed.nameZh,...aliases];
  const exists=data.events.some(e=>{
   if(e.id===seed.id)return true;
   const title=(e.nameZh||'').replace(/[（(].*?[）)]/g,'').trim();
   return names.some(n=>n.replace(/[（(].*?[）)]/g,'').trim()===title)
    && Math.abs((e.start??0)-seed.start)<=1
    && seed.regionIds.some(id=>e.regionIds?.includes(id));
  });
  if(!exists)data.events.push(deepClone(seed));
 }
 data.version=7;
 return true;
}
// v7.8: add West-European records without resetting or overwriting any edited entry.
function upgradeHistoryDataV8(){
 const from=Number(data.version)||1;
 if(from>=8)return false;
 const eu=data.continents.find(c=>c.id==='europe');
 const additions=[['czechia','捷克'],['sweden','瑞典'],['belgium','比利時'],['netherlands','荷蘭']];
 if(eu)for(const [id,name] of additions){
  if(!data.continents.some(c=>c.children?.some(r=>r.id===id)))eu.children.push({id,name});
 }
 for(const seed of WEST_EUROPE_HISTORY_SEED){
  const same=data.events.some(e=>e.id===seed.id||(e.nameZh?.trim()===seed.nameZh && Math.abs(e.start-seed.start)<=1 && seed.regionIds.some(id=>e.regionIds?.includes(id))));
  if(!same)data.events.push(deepClone(seed));
 }
 data.version=8;
 return true;
}
// v7.9: additive import/migration, stable IDs, shared World War records, full French Third Republic span.
function upgradeHistoryDataV9(){
 if((Number(data.version)||1)>=9)return false;
 const eu=data.continents.find(c=>c.id==='europe');
 const existing=id=>data.continents.some(c=>c.children?.some(r=>r.id===id));
 if(eu){
  const cz=eu.children.find(r=>r.id==='czechia');
  if(cz && cz.name==='捷克／波希米亞')cz.name='捷克';
  if(!existing('czechia'))eu.children.push({id:'czechia',name:'捷克'});
  for(const [id,name] of [['poland','波蘭'],['serbia','塞爾維亞'],['romania','羅馬尼亞'],['bulgaria','保加利亞']]){
   if(!existing(id))eu.children.push({id,name});
  }
 }
 const namesEq=(a,b)=>String(a||'').replace(/[\s・·（）()《》\[\]]/g,'').trim()===String(b||'').replace(/[\s・·（）()《》\[\]]/g,'').trim();
 for(const seed of MODERN_WORLD_SEED){
  let prior=data.events.find(e=>e.id===seed.id);
  if(!prior)prior=data.events.find(e=>namesEq(e.nameZh,seed.nameZh)&&Math.abs((e.start||0)-seed.start)<=1);
  // Accept common manual aliases without adding duplicate timeline events.
  if(!prior&&seed.id==='hist_first_french_empire_1804')prior=data.events.find(e=>/^(拿破崙帝國|法蘭西第一帝國)/.test(e.nameZh||'')&&e.start===1804);
  if(!prior&&seed.id==='hist_french_third_republic_1870')prior=data.events.find(e=>/^(法國第三共和國建立|法國第三共和國)$/.test(e.nameZh||'')&&e.start===1870);
  if(!prior&&seed.id==='hist_world_war_1')prior=data.events.find(e=>/^(第一次世界大戰|一戰)$/.test(e.nameZh||'')&&e.start===1914);
  if(!prior&&seed.id==='hist_world_war_2')prior=data.events.find(e=>/^(第二次世界大戰|二戰)$/.test(e.nameZh||'')&&e.start===1939);
  if(prior){
   // User-requested region coverage: add missing participants but never strip manually selected ones.
   if(['hist_world_war_1','hist_world_war_2'].includes(seed.id)){
    prior.regionIds=[...new Set([...(prior.regionIds||[]),...seed.regionIds])];
    if(prior.end==null)prior.end=seed.end;
   }
   if(seed.id==='hist_french_third_republic_1870'){
    prior.nameZh='法國第三共和國';prior.type='歷史時期';prior.start=1870;prior.end=1940;
    prior.regionIds=[...new Set([...(prior.regionIds||[]),'france'])];
   }
  }else data.events.push(deepClone(seed));
 }
 data.version=9;
 return true;
}

// v8.0 · non-destructive upgrade of country filters and new history entries.
function upgradeHistoryDataV10(){
 if((Number(data.version)||1)>=10)return false;
 const am=data.continents.find(c=>c.id==='americas');
 const as=data.continents.find(c=>c.id==='asia');
 if(am){
  am.children=am.children.filter(r=>r.id!=='north-america');
  for(const [id,name] of [['usa','美國'],['mexico','墨西哥'],['canada','加拿大'],['cuba','古巴']]){
   if(!am.children.some(r=>r.id===id))am.children.push({id,name});
  }
  const order=['usa','mexico','canada','latin-america','cuba'];
  am.children.sort((a,b)=>{const ia=order.indexOf(a.id),ib=order.indexOf(b.id);return (ia<0?999:ia)-(ib<0?999:ib)});
 }
 if(as&&!as.children.some(r=>r.id==='vietnam'))as.children.push({id:'vietnam',name:'越南'});
 for(const e of data.events){
  const ids=Array.isArray(e.regionIds)?e.regionIds:[];
  // Legacy umbrella cannot identify a specific country. Existing milestones referred to the US;
  // retain them under the US rather than leave an orphaned region tag.
  e.regionIds=[...new Set(ids.map(id=>id==='north-america'?'usa':id))];
  if(e.id==='hist_world_war_1')e.regionIds=[...new Set([...e.regionIds,'usa','canada'])];
  if(e.id==='hist_world_war_2')e.regionIds=[...new Set([...e.regionIds,'usa','canada','mexico'])];
 }
 if(ui.selected?.includes('north-america'))ui.selected=ui.selected.map(x=>x==='north-america'?'usa':x);
 if(ui.focus==='north-america')ui.focus='usa';
 const normalized=s=>String(s||'').replace(/[\s（）()《》・·]/g,'');
 for(const seed of EGYPT_AMERICA_SEED){
  const same=data.events.some(e=>e.id===seed.id||(normalized(e.nameZh)===normalized(seed.nameZh)&&Math.abs(Number(e.start)-seed.start)<=1&&seed.regionIds.some(id=>e.regionIds?.includes(id))));
  if(!same)data.events.push(deepClone(seed));
 }
 if(ui.start===-2800&&ui.end===1950&&!ui.selected?.length)ui.end=2026;
 data.version=10;
 return true;
}

// v8.1: British occupation and protectorate become year markers, not ruling
// dynasties; extend Egypt's timeline with the ongoing republican government.
// Only records bearing those seeded IDs are recategorized; notes and unrelated
// user-created events are retained exactly as they were.
function upgradeHistoryDataV11(){
 if((Number(data.version)||1)>=11)return false;
 const updates=[
  {id:'eg_british_occupation',old:'英國佔領與實質統治埃及',name:'英國開始佔領埃及',year:1882,short:'英國佔領埃及'},
  {id:'eg_british_protectorate',old:'英國正式保護國時期（埃及）',name:'英國宣布埃及為保護國',year:1914,short:'英國設保護國'}
 ];
 for(const update of updates){
  const e=data.events.find(x=>x.id===update.id);
  if(!e)continue; // Do not reinstate seed records the user deliberately removed.
  if(e.nameZh===update.old)e.nameZh=update.name;
  if(e.shortName==='英國佔領'||e.shortName==='英國保護國')e.shortName=update.short;
  e.start=update.year;e.end=null;e.type='重大事件';
  e.ongoing=false;e.showPeriodCallout=false;
  delete e.candidateYears;delete e.temporalMode;
 }
 const aliases=['埃及共和國（現阿拉伯埃及共和國）','阿拉伯埃及共和國','埃及阿拉伯共和國','埃及共和國'];
 let republican=data.events.find(e=>e.id===EGYPT_REPUBLIC_SEED.id);
 if(!republican)republican=data.events.find(e=>e.start===1953&&e.regionIds?.includes('egypt')&&['朝代','歷史時期'].includes(e.type)&&aliases.includes(e.nameZh));
 if(republican){
  republican.start=1953;republican.end=null;republican.ongoing=true;republican.type='歷史時期';
 }else data.events.push(deepClone(EGYPT_REPUBLIC_SEED));
 data.version=11;
 return true;
}

// v8.3 migration: preserve personal notes and added entries; augment missing seeds only.
function upgradeHistoryDataV12(){
 if((Number(data.version)||1)>=12)return false;
 const normalized=s=>String(s||'').replace(/[\s（()）・·－—\-]/g,'').trim();
 for(const seed of FRANCE_BRITAIN_SEED){
  let existing=data.events.find(e=>e.id===seed.id);
  if(!existing)existing=data.events.find(e=>Math.abs(Number(e.start)-seed.start)<=1 &&
    e.regionIds?.some(id=>seed.regionIds.includes(id)) &&
    normalized(e.nameZh)===normalized(seed.nameZh));
  if(!existing)data.events.push(deepClone(seed));
  // If an existing custom record is found, leave its description, dates and selections untouched.
 }
 // A single existing seed is converted as requested; retain its original range and notes.
 for(const event of data.events){
  if(event.id==='we_british_global_1815' || (event.isSeed&&event.start===1815&&/日不落帝國/.test(event.nameZh||''))){
   event.type='重大事件';
   event.showPeriodCallout=false;
  }
 }
 data.version=12;
 return true;
}


// v8.7: Nine independent US chronology bands, four German state bands and one 1990 node.
// Existing custom entries/notes survive unchanged. Existing US milestones keep their category
// and historical content, but are rendered beneath the main period band as annotations.
function upgradeHistoryDataV13(){
 if((Number(data.version)||1)>=13)return false;
 const normalized=s=>String(s||'').replace(/[\s（()）・·－—\-]/g,'').trim();
 for(const seed of HISTORY_V87_SEED){
  const duplicate=data.events.some(e=>e.id===seed.id ||
   (normalized(e.nameZh)===normalized(seed.nameZh) && Math.abs(Number(e.start)-seed.start)<=2 && e.regionIds?.some(id=>seed.regionIds.includes(id))));
  if(!duplicate)data.events.push(deepClone(seed));
 }
 for(const event of data.events){
  if(US_EXISTING_MILESTONE_IDS.has(event.id)){
   // Only affects visual grouping; titles, years, notes, categories stay intact.
   event.timelineRole='event';
  }
 }
 data.version=13;return true;
}


// v9.0: keep users' self-authored notes and existing entries; add only simplified
// periods and Crusades, then replace legacy umbrella region tags with five areas.
function upgradeHistoryDataV14(){
 if((Number(data.version)||1)>=14)return false;
 normalizeWestAsiaRegions(data);
 for(const seed of WEST_ASIA_V88_SEED){
  const exists=data.events.some(e=>e.id===seed.id ||
   ((e.nameZh||'')===seed.nameZh && Math.abs(Number(e.start)-seed.start)<=2));
  if(!exists)data.events.push(deepClone(seed));
 }
 if(Array.isArray(ui.selected)&&ui.selected.includes('west-asia')){
  ui.selected=[...new Set([...ui.selected.filter(id=>id!=='west-asia'),...WEST_ASIA_REGION_IDS])];
 }
 if(ui.focus==='west-asia')ui.focus='mesopotamia';
 if(ui.start===-2800)ui.start=-3600;
 data.version=14;
 return true;
}


// v9.0: add requested markers without replacing personal notes/edits or creating duplicate Islam records.
// The old seed is retitled only if it still bears the untouched default name.
function upgradeHistoryDataV15(){
 if((Number(data.version)||1)>=15)return false;
 const islam=data.events.find(e=>e.id==='wa_islam_emergence_610');
 if(islam){
  if(islam.nameZh==='伊斯蘭教興起'){
   islam.nameZh='伊斯蘭教的誕生';
   islam.shortName=islam.shortName||'伊斯蘭教興起';
   if(islam.nameEn==='Rise of Islam')islam.nameEn='Origin of Islam (Rise of Islam)';
   if(islam.notes==='約610年穆罕默德開始在麥加傳播宗教啟示；以宗教興起的起點作年份節點，不當作一個朝代。')
    islam.notes='約610年，穆罕默德開始在麥加宣示宗教啟示，通常以此作為伊斯蘭教興起的標記。622年遷徙麥地那（希吉拉）則是伊斯蘭曆元年；宗教形成是一段歷程，不是單一精確創立日。';
  }
 }else{
  // A manual synonym already in the history is sufficient; do not re-create a second copy.
  const alias=data.events.find(e=>e.start>=609&&e.start<=622&&/^(伊斯蘭教|伊斯蘭教)/.test(e.nameZh||'')&&/(誕生|興起|創立)/.test(e.nameZh||''));
  if(!alias){
   const canonical=DEFAULT_DATA.events.find(e=>e.id==='wa_islam_emergence_610');
   if(canonical)data.events.push(deepClone(canonical));
  }
 }
 const simplify=s=>String(s||'').normalize('NFKC').replace(/[\s（()）・·－—\-]/g,'').trim();
 const alternateNames={
  wa_babylonian_exile_586:['巴比倫之囚','巴比倫流放'],
  wa_christianity_emergence_30:['基督教誕生','基督教的誕生','基督教興起'],
  wa_battle_talas_751:['怛羅斯戰役','怛邏斯戰役'],
  wa_seljuk_westward_islamization_960:['突厥人西遷與改信伊斯蘭教','塞爾柱突厥人西遷與改宗伊斯蘭教'],
  wa_abbasid_baghdad_capital_762:['阿拔斯王朝定都巴格達'],
  wa_mongol_sack_baghdad_1258:['蒙古攻陷巴格達'],
  wa_kingdom_jerusalem_1099:['耶路撒冷王國'],
  wa_baldwin_iv_reign_1174:['鮑德溫四世統治耶路撒冷王國','鮑德溫四世在位'],
  wa_saladin_jerusalem_1187:['薩拉丁收復聖地','薩拉丁收復耶路撒冷'],
  eu_black_death_1347:['歐洲黑死病','黑死病'],
  fr_second_empire_1852:['法蘭西第二帝國','法國第二帝國','第二帝國'],
  fr_normandy_landings_1944:['諾曼第登陸','諾曼第登陸D-Day'],
  fr_paris_liberation_1944:['巴黎光復'],
  fr_fourth_republic_1946:['法蘭西第四共和國','法國第四共和國','第四共和國']
 };
 for(const seed of HISTORY_V89_SEED){
  const aliases=[seed.nameZh,...(alternateNames[seed.id]||[])].map(simplify);
  const exists=data.events.some(e=>e.id===seed.id||
   (Math.abs(Number(e.start)-seed.start)<=2&&aliases.includes(simplify(e.nameZh))));
  if(!exists)data.events.push(deepClone(seed));
 }
 data.version=15;
 return true;
}


// v9.0: preserve previously saved notes and regions; append the requested Levant historical
// transitions and normalize older religious vocabulary in both seed and personal entries.
function normalizeIslamicTermsV90(){
 let changed=false;
 for(const e of data.events){
  for(const field of ['nameZh','shortName','notes']){
   if(typeof e[field]!=='string')continue;
   const old=e[field];
   const next=old.replace(/\u56de\u6559\u5f92/g,'穆斯林')
     .replace(/伊斯蘭教（\u56de\u6559）/g,'伊斯蘭教')
     .replace(/\u56de\u6559/g,'伊斯蘭教')
     .replace(/伊斯蘭教（伊斯蘭教）/g,'伊斯蘭教');
   if(next!==old){e[field]=next;changed=true;}
  }
 }
 return changed;
}
function upgradeHistoryDataV16(){
 if((Number(data.version)||1)>=16)return false;
 const clean=s=>String(s||'').normalize('NFKC').replace(/[\s（()）・·－—\-]/g,'').trim();
 const aliases={
  lv_united_kingdom_israel_1020:['以色列王國','統一以色列王國','以色列統一王國'],
  lv_david_reign_1010:['大衛王在位','大衛王統治'],
  lv_solomon_reign_970:['所羅門王在位','所羅門王統治'],
  lv_first_temple_960:['第一聖殿','所羅門建立第一聖殿','所羅門聖殿建立'],
  lv_rome_jerusalem_63bc:['羅馬征服耶路撒冷','羅馬統治猶太地'],
  lv_herod_matthew_infants_4bc:['希律王與伯利恆嬰孩','希律王與嬰孩耶穌'],
  lv_second_temple_destroyed_70:['第二聖殿被毀','羅馬人摧毀第二聖殿'],
  lv_bar_kokhba_revolt_135:['巴爾科赫巴起義','第二次猶太起義'],
  lv_muslim_capture_jerusalem_638:['阿拉伯征服耶路撒冷','穆斯林征服耶路撒冷'],
  lv_british_take_jerusalem_1917:['英軍攻佔耶路撒冷','英國佔領耶路撒冷'],
  lv_british_mandate_palestine_1920:['巴勒斯坦英國託管','英國託管巴勒斯坦'],
  lv_israel_independence_1948:['以色列建國','以色列獨立']
 };
 for(const seed of LEVANT_V90_SEED){
  const list=[seed.nameZh,...(aliases[seed.id]||[])].map(clean);
  const exists=data.events.some(e=>e.id===seed.id||
    (e.regionIds?.includes('levant')&&list.includes(clean(e.nameZh))&&
      Math.abs(Number(e.start)-seed.start)<=7));
  if(!exists)data.events.push(deepClone(seed));
 }
 data.version=16;
 return true;
}

// v9.1: Alexander remains one historical period, not a second event badge.
// Append lifespans to old JSON/localStorage without overwriting custom notes or events.
function upgradeHistoryDataV17(){
 if((Number(data.version)||1)>=17)return false;
 const alex=data.events.find(e=>e.id==='gr_alexander_empire');
 if(alex)alex.showPeriodCallout=false;
 const clean=s=>String(s||'').normalize('NFKC').replace(/[\s（()）·・－—-]/g,'').trim();
 const aliases={
  lv_jesus_lifespan_4bc_30:['耶穌基督在世期間','耶穌在世期間','耶穌基督生平','耶穌的一生'],
  ar_muhammad_lifespan_570_632:['先知穆罕默德在世期間','穆罕默德在世期間','穆罕默德生平','先知穆罕默德的一生']
 };
 for(const seed of RELIGIOUS_FIGURE_LIFESPAN_V91_SEED){
  const titles=(aliases[seed.id]||[seed.nameZh]).map(clean);
  const already=data.events.some(e=>e.id===seed.id||(
   e.regionIds?.some(id=>seed.regionIds.includes(id)) &&
   Math.abs(Number(e.start)-seed.start)<=8 && e.end!=null &&
   Math.abs(Number(e.end)-seed.end)<=6 && titles.includes(clean(e.nameZh))));
  if(!already)data.events.push(deepClone(seed));
 }
 data.version=17;
 return true;
}


// v9.2 canonical revisions: edit seeded records by immutable IDs rather than re-create
// them, and leave independently added personal records/notes alone.
function applyHistoryRevisionsV92(target,{addMissing=true}={}){
 let changed=false;
 const records=target.events||[];
 const get=id=>records.find(e=>e.id===id);
 const regions=(id,remove=[],add=[])=>{
  const e=get(id);if(!e)return;
  const prev=Array.isArray(e.regionIds)?e.regionIds:[];
  const next=[...new Set([...prev.filter(r=>!remove.includes(r)),...add])];
  if(next.join('|')!==prev.join('|')){e.regionIds=next;changed=true;}
 };
 const rename=(id,fromNames,toName,fromShort,toShort)=>{
  const e=get(id);if(!e)return;
  if(fromNames.includes(e.nameZh)&&e.nameZh!==toName){e.nameZh=toName;changed=true;}
  if(fromShort.includes(e.shortName)&&e.shortName!==toShort){e.shortName=toShort;changed=true;}
 };
 const addNote=(id,append)=>{
  const e=get(id);if(!e||!e.isSeed)return;
  const notes=String(e.notes||'');
  if(!notes.includes(append)&&notes.length>30){e.notes=notes+' '+append;changed=true;}
 };
 // A Hellenistic *cultural* umbrella is not a fourth dynasty.
 const original=records.length;
 target.events=records.filter(e=>e.id!=='wa_hellenistic_period');
 if(target.events.length!==original)changed=true;
 // Roman governance in Egypt: only Egypt-specific regional eras remain on Egypt's lane.
 regions('it_roman_empire',['egypt']);
 regions('it_east_roman',['egypt']);
 regions('eg_roman_rule',['italy','turkey']);
 regions('eg_byzantine_rule',['italy','turkey']);
 // Achaemenid rule did cover large parts of Asia Minor. Parthian and Sasanian
 // control/contests at the frontier do NOT imply centuries-long Anatolian rule.
 regions('ir_achaemenid',[],['turkey']);
 regions('ir_parthian',['turkey']);
 regions('ir_sasanian',['turkey','levant']);
 // Split the Seljuks into Iranian-core Great Seljuks and Anatolian Sultanate of Rum.
 regions('wa_seljuk_empire',['turkey','levant'],['persia','mesopotamia']);
 rename('wa_seljuk_empire',['塞爾柱突厥帝國','大塞爾柱帝國'],'大塞爾柱帝國',['塞爾柱','大塞爾柱'],'大塞爾柱');
 // Rename existing Ottoman history instead of duplicating its timeline.
 rename('hist_ottoman_empire',['鄂圖曼帝國','鄂圖曼土耳其帝國'],'鄂圖曼土耳其帝國',['鄂圖曼','鄂圖曼帝國','鄂圖曼土耳其'],'鄂圖曼土耳其');
 addNote('ir_parthian','安息核心在伊朗與兩河流域；與羅馬長期爭奪亞美尼亞等邊境勢力，並不代表統治今日土耳其全境。');
 addNote('ir_sasanian','薩珊帝國核心在伊朗與兩河流域，與東羅馬在安那托利亞東部、黎凡特屢有戰爭；七世紀曾短暫占領埃及及黎凡特，但不視為全程統治。');
 addNote('wa_seljuk_empire','本圖區分大塞爾柱帝國（伊朗、兩河）與安那托利亞的羅姆塞爾柱蘇丹國，避免土耳其主線重複。');
 addNote('eg_byzantine_rule','約619–629年間薩珊波斯軍隊曾短暫占領埃及；此色帶採簡化分期，不代表東羅馬自始至終從未中斷統治。');
 addNote('eg_ptolemaic','此王朝與塞琉古王國及馬其頓王國並列為三大希臘化繼業國之一。');
 if(addMissing){
  const compact=s=>String(s||'').normalize('NFKC').replace(/[\s（）()·・－—-]/g,'');
  for(const seed of HISTORY_V92_SEED){
   const matches=target.events.some(e=>e.id===seed.id||(
    compact(e.nameZh)===compact(seed.nameZh)&&Math.abs(Number(e.start)-seed.start)<=2&&
    e.regionIds?.some(id=>seed.regionIds.includes(id))));
   if(!matches){target.events.push(JSON.parse(JSON.stringify(seed)));changed=true;}
  }
 }
 return changed;
}
function upgradeHistoryDataV18(){
 if((Number(data.version)||1)>=18)return false;
 applyHistoryRevisionsV92(data,{addMissing:true});
 data.version=18;
 return true;
}

if(normalizeIslamicTermsV90()|upgradeHistoryData()|upgradeHistoryDataV6()|upgradeHistoryDataV7()|upgradeHistoryDataV8()|upgradeHistoryDataV9()|upgradeHistoryDataV10()|upgradeHistoryDataV11()|upgradeHistoryDataV12()|upgradeHistoryDataV13()|upgradeHistoryDataV14()|upgradeHistoryDataV15()|upgradeHistoryDataV16()|upgradeHistoryDataV17()|upgradeHistoryDataV18()|normalizeIslamicTermsV90()){try{localStorage.setItem(KEY,JSON.stringify({...data,ui}))}catch(e){console.warn('無法儲存升級資料；請匯出備份',e)}}

const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const esc=x=>String(x??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const safeUrl=u=>{try{let z=new URL(String(u));return z.protocol==='https:'||z.protocol==='http:'?z.href:''}catch{return ''}};
const isYear=x=>Number.isInteger(x)&&x!==0&&x>=-100000&&x<=100000;
const formatYear=(y,withNian=false)=>y<0?'前'+Math.abs(y)+(withNian?'年':''):'西元'+y+(withNian?'年':'');
const compactYear=y=>y<0?'前'+(-y):String(y);
const formatFocusYear=y=>y<0?'西元前 '+Math.abs(y)+' 年':'西元 '+y+' 年';
function parseFocusYear(input){
 let t=String(input??'').normalize('NFKC').trim().replace(/[\s，,]/g,'').replace(/年$/,'');
 let bc=/^(?:西元前|公元前|紀元前|前|BC|BCE)/i.test(t);
 t=t.replace(/^(?:西元前|公元前|紀元前|前|西元|公元|紀元|AD|CE|BCE|BC)/i,'');
 if(!/^[-+]?\d{1,6}$/.test(t))return null;
 let year=Number(t);
 if(bc)year=-Math.abs(year);
 return isYear(year)?year:null;
}
const effectiveEnd=e=>e.ongoing?Math.max(e.start,new Date().getFullYear()):(e.end??e.start);
const formatPeriod=e=>e.ongoing?((e.precision==='約'?'約':'')+compactYear(e.start)+' — 至今'):e.precision==='存疑'?(e.candidateYears?.length ? '年代假說：'+e.candidateYears.map(compactYear).join('／') : '年代存疑：'+compactYear(e.start)+(e.end!=null?'～'+compactYear(e.end):'')) : (e.precision==='約'?'約':'')+compactYear(e.start)+(e.end!=null&&e.end!==e.start?' — '+compactYear(e.end):'')+'年';
const astro=y=>y<0?y+1:y;const unAstro=y=>y<=0?y-1:y;
const findContinent=id=>data.continents.find(c=>c.id===id)||data.continents.find(c=>c.children.some(x=>x.id===id))||(HISTORY_EUROPE_GROUPS.some(g=>g.id===id)?data.continents.find(c=>c.id==='europe'):null);
// These are presentation labels only. Never rewrite authoritative Supabase region IDs/names.
const HISTORY_ASIAN_REGION_LABELS=Object.freeze({persia:'伊朗／波斯',turkey:'土耳其／安那托利亞',mesopotamia:'伊拉克／兩河流域'});
const HISTORY_ASIAN_REGION_HINTS=Object.freeze({mesopotamia:'兩河流域以現今伊拉克為核心，亦包含敘利亞、土耳其部分地區；不等同現代國界。',turkey:'安那托利亞是歷史地理區域，與現代土耳其國界不完全相同。',persia:'波斯為歷史地理與文化稱呼，與現代伊朗並非所有時代都完全對應。'});
const nameFor=id=>{if(Object.prototype.hasOwnProperty.call(HISTORY_ASIAN_REGION_LABELS,id))return HISTORY_ASIAN_REGION_LABELS[id];let c=data.continents.find(c=>c.id===id);if(c)return c.name;for(let x of data.continents){let r=x.children.find(r=>r.id===id);if(r)return r.name}return HISTORY_EUROPE_GROUPS.find(g=>g.id===id)?.name||id};
const colorFor=e=>findContinent(e.regionIds?.[0])?.color||'#8fa69e';
const eraRegionShortName=id=>({turkey:'土耳其',mesopotamia:'兩河流域',persia:'伊朗／波斯','arabian-peninsula':'阿拉伯半島'}[id]||nameFor(id));
function save(){if(historyReady&&historyOwner)historyScheduleCommit();}
function notify(msg){const el=$('#toast');el.textContent=msg;el.classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.add('hidden'),3800)}
function noRegionsSelected(){return !ui.selected.length&&ui.regionSelectionMode==='none'}
function filtered(){const q=ui.text.trim().toLowerCase(),sel=ui.selected;
 return data.events.filter(e=>{
  const valid=!noRegionsSelected()&&(!sel.length||sel.some(id=>e.regionIds.some(r=>historyRegionMatches(id,r))));
  return valid&&(!q||[e.nameZh,e.nameEn,e.type,e.notes,...e.regionIds.map(nameFor)].join(' ').toLowerCase().includes(q));
 }).sort((a,b)=>a.start-b.start||(a.end??a.start)-(b.end??b.start));
}
function inWindow(e){return e.start<=ui.end&&effectiveEnd(e)>=ui.start}
function toggleSelected(id){ui.selected=ui.selected.includes(id)?ui.selected.filter(a=>a!==id):[...ui.selected,id];ui.regionSelectionMode=ui.selected.length?'selected':'none';if(ui.view==='region')ui.focus=id;if(ui.selected.includes('egypt')&&ui.view==='time'&&ui.start>-2686)ui.start=-2800;if(window.innerWidth<=740){const side=document.querySelector('#regionSidebar');if(side)side.classList.remove('expanded');const toggle=document.querySelector('#mobileRegionToggle');if(toggle){toggle.setAttribute('aria-expanded','false');const arrow=toggle.querySelector('.mobile-region-arrow');if(arrow)arrow.textContent='展開 ▾'}}save();render()}
// Europe macro-regions are view/filter aliases, NEVER database migrations.
const HISTORY_EUROPE_GROUPS=[
 {id:'uk',name:'英國',ids:['uk']},
 {id:'france',name:'法國',ids:['france']},
 {id:'germany',name:'德意志',ids:['germany']},
 {id:'italy',name:'義大利',ids:['italy']},
 {id:'spain',name:'西班牙',ids:['spain']},
 {id:'geo-lowlands',name:'低地國',ids:['netherlands','belgium']},
 {id:'geo-nordic',name:'北歐',ids:['sweden','norway','denmark','finland','iceland']},
 {id:'geo-central',name:'中歐',ids:['austria','czechia','poland','hungary','slovakia']},
 {id:'geo-eastern',name:'東歐',ids:['eastern-europe','estonia','latvia','lithuania','belarus','ukraine','moldova']},
 {id:'geo-balkans',name:'巴爾幹半島',ids:['greece','serbia','bosnia','romania','bulgaria','croatia','slovenia','montenegro','albania','north-macedonia','kosovo']}
];
const HISTORY_GEO_HINTS={
 'geo-lowlands':'荷蘭、比利時',
 'geo-nordic':'瑞典、丹麥、挪威、芬蘭、冰島',
 'geo-central':'奧地利、捷克、波蘭、匈牙利、斯洛伐克等中歐地區',
 'geo-eastern':'波羅的海三國（愛沙尼亞、拉脫維亞、立陶宛）、白俄羅斯、烏克蘭、摩爾多瓦',
 'geo-balkans':'塞爾維亞、波士尼亞、保加利亞、羅馬尼亞、希臘等巴爾幹地區'
};
function historyEuropeGroupForId(id){return HISTORY_EUROPE_GROUPS.find(g=>g.id===id||g.ids.includes(id))||null}
function historyGeoLaneId(id){return historyEuropeGroupForId(id)?.id||id}
function historyGeoDisplayName(id){return historyEuropeGroupForId(id)?.name||nameFor(id)}
function historyGeoIsEuropeGroup(id){return HISTORY_EUROPE_GROUPS.some(g=>g.id===id)}
function historyNormalizeGeoSelection(){
 const prev=Array.isArray(ui.selected)?ui.selected:[];
 const next=[...new Set(prev.map(historyGeoLaneId))];
 if(next.length!==prev.length||next.some((v,i)=>v!==prev[i]))ui.selected=next;
}
function historyRegionMatches(selectedId,regionId){
 if(selectedId===regionId)return true;
 const group=HISTORY_EUROPE_GROUPS.find(g=>g.id===selectedId);
 if(group)return group.ids.includes(regionId);
 const c=data.continents.find(c=>c.id===selectedId);
 if(c)return c.children.some(r=>r.id===regionId)||
   (selectedId==='europe'&&HISTORY_EUROPE_GROUPS.some(g=>g.id===regionId||g.ids.includes(regionId)));
 const parent=findContinent(selectedId);
 return !!parent&&parent.id===regionId;
}
function historyEuropeRegionButton(g){
 const active=ui.selected.includes(g.id)||g.ids.some(id=>ui.selected.includes(id));
 return `<button type="button" class="region-chip macro-chip ${active?'active':''}" data-filter="${esc(g.id)}" aria-pressed="${active}" title="${esc(HISTORY_GEO_HINTS[g.id]||g.ids.filter(id=>data.continents.find(c=>c.id==='europe')?.children.some(r=>r.id===id)).map(nameFor).join('、')||g.name)}">${esc(g.name)}</button>`;
}
function renderSidebar(){
 const n=$('#regionNav');
 n.innerHTML=data.continents.map(c=>{
  const closed=ui.folded.includes(c.id);
  let children=c.children.length?c.children.map(k=>`<button type="button" class="region-chip ${ui.selected.includes(k.id)?'active':''}" data-filter="${esc(k.id)}" aria-pressed="${ui.selected.includes(k.id)}" title="${esc(HISTORY_ASIAN_REGION_HINTS[k.id]||nameFor(k.id))}">${esc(nameFor(k.id))}</button>`).join(''):'<span style="font-size:11px;color:#b2bcb6">尚無子地區</span>';
  if(c.id==='europe'){
   const mapped=new Set(HISTORY_EUROPE_GROUPS.flatMap(g=>g.ids));
   const extras=c.children.filter(k=>!mapped.has(k.id)).map(k=>`<button type="button" class="region-chip ${ui.selected.includes(k.id)?'active':''}" data-filter="${esc(k.id)}">${esc(k.name)}</button>`).join('');
   children=HISTORY_EUROPE_GROUPS.map(historyEuropeRegionButton).join('')+extras+
    '<span class="geo-sidebar-note">依歷史地理大區顯示；國家與古地名保留於事件詳情。</span>';
  }
  return `<div class="continent"><div class="continent-top"><button type="button" class="fold" data-fold="${esc(c.id)}" aria-label="${closed?'展開':'收合'}${esc(c.name)}">${closed?'▸':'▾'}</button><span class="dot" style="background:${esc(c.color)}"></span><button class="continent-name" data-fold="${esc(c.id)}" type="button">${esc(c.name)}</button><button type="button" data-filter="${esc(c.id)}" class="select-continent ${ui.selected.includes(c.id)?'active':''}">整洲</button></div><div class="region-items ${c.id==='europe'?'macro-region-items':''} ${closed?'hidden':''}">${children}</div></div>`;
 }).join('');
 n.querySelectorAll('[data-filter]').forEach(el=>el.onclick=()=>toggleSelected(el.dataset.filter));
 n.querySelectorAll('[data-fold]').forEach(el=>el.onclick=()=>{const id=el.dataset.fold;ui.folded=ui.folded.includes(id)?ui.folded.filter(v=>v!==id):[...ui.folded,id];save();renderSidebar()});
}

function setQuickRegion(id){
 if(!data.continents.some(c=>c.children.some(r=>r.id===id)))return;
 ui.selected=ui.selected.includes(id)?ui.selected.filter(v=>v!==id):[...ui.selected,id];
 ui.regionSelectionMode=ui.selected.length?'selected':'none';
 save();render();
}
function syncQuickRegionButtons(){
 $$('[data-quick-region]').forEach(b=>{const on=ui.selected.includes(b.dataset.quickRegion);b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
 const all=$('#clearFilter'),isAll=!ui.selected.length&&!noRegionsSelected();if(all){all.classList.toggle('active',isAll);all.setAttribute('aria-pressed',String(isAll))}
}
function selectedRegionSummary(){const picked=ui.selected.map(historyGeoDisplayName);if(!picked.length)return noRegionsSelected()?'未選取地區':'全部地區';if(picked.length<=2)return picked.join('、');return picked[0]+' 等 '+picked.length+' 個地區';}
function render(){historyNormalizeGeoSelection();ui.view='time';renderSidebar();$('#totalNum').textContent=data.events.length;$('#textSearch').value=ui.text;const mobileToggle=$('#mobileRegionToggle');if(mobileToggle){const label=mobileToggle.querySelector('span');if(label)label.textContent='▤ 地區篩選 · '+selectedRegionSummary();}
 $$('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===ui.view);b.setAttribute('aria-selected',String(b.dataset.view===ui.view))});
 updateScaleUI();$('#timeControls').classList.remove('hidden');
 syncQuickRegionButtons();
 const selectionClear=$('#clearSelection');if(selectionClear)selectionClear.disabled=noRegionsSelected();
 const items=filtered();let visible=items.filter(inWindow);$('#viewTitle').textContent='世界歷史時間軸';$('#viewDescription').textContent='';$('#countLabel').textContent=`${visible.length} 個條目`;renderTime(visible)
}
function tickStep(span,width){const steps=[1,2,5,10,20,25,50,100,200,250,500,1000,2000,5000,10000,20000];let target=Math.max(3,Math.floor(width/116));return steps.find(s=>span/s<=target)||20000}
const ERA_PALETTE_CN=['#b18c79','#c8a978','#99ab90','#7c9d8c','#80a9b9','#9eabc5','#889bb0','#998caf','#b792a7','#d09b86','#bca589','#95a68a','#87a9a0','#84a7b9','#8092b2','#ab94ad'];
const ERA_PALETTE_EG=['#aa9b80','#a68c75','#83a8a4','#ae8b83'];
const ERA_PALETTE_IR=['#a18eab','#8a9fa5','#b79e88'];
const ERA_PALETTE_GR=['#879cad','#8aabc0','#9b99bd'];
const ERA_PALETTE_RO=['#aa9982','#8faaa0','#8f9fae','#bd9c83','#8ea4b1'];
const ERA_PALETTE_FR=['#ae9a8a','#91a7a0','#a9a1b5','#bba58c','#8da8ac','#b2999f','#a5b39e','#94a5ba'];
const ERA_PALETTE_UK=['#9cae9f','#a99b88','#91a8b1','#b5a2ad','#9db5a3','#ad9d8f','#99abb7','#a9a0b5','#8eaaa7'];
const SCALE_STEPS=[500,200,100,50,20,10,5];
const scaleLevel=()=>Math.max(0,SCALE_STEPS.indexOf(Number(ui.timeScaleYears)));
const getEraViewportWidth=()=>{
 const old=$('#eraScroll');if(old?.clientWidth)return old.clientWidth;
 const pane=$('#mainContent');const panelWidth=pane?.clientWidth||Math.max(350,window.innerWidth-80);
 return Math.max(185,panelWidth-(window.innerWidth<=740?69:104)-2);
};
const eraCenturyPixels=()=>100*getEraViewportWidth()/Number(ui.timeScaleYears||200);
const eraTimelineStart=pane=>Number(pane?.dataset.start??ui.start);
const eraTimelineEnd=pane=>Number(pane?.dataset.end??ui.end);
const viewportYearFor=(pane,localX)=>eraTimelineStart(pane)+(pane.scrollLeft+localX-(Number(pane.dataset.pad)||0)-22)*100/(Number(pane.dataset.px)||eraCenturyPixels());
const scaleTickStep=()=>({500:100,200:50,100:20,50:10,20:5,10:2,5:1})[Number(ui.timeScaleYears)]||50;
let timelinePointerCount=0,timelineGestureWasPinch=false;
function setTimelineScale(nextIndex, focalYear=null, focalX=null){
 const level=Math.max(0,Math.min(SCALE_STEPS.length-1,Math.round(nextIndex)));
 const nextYears=SCALE_STEPS[level];
 const pane=$('#eraScroll');const width=pane?.clientWidth||getEraViewportWidth();
 const anchorX=Number.isFinite(focalX)?focalX:width/2;
 const year=Number.isFinite(focalYear)?focalYear:pane?viewportYearFor(pane,anchorX):(Number(ui.centerYear)||ui.start);
 const previous=Number(ui.timeScaleYears);
 if(nextYears===previous)return;
 // Keep the historical year under the user's fingers at the same on-screen x.
 ui.timeScaleYears=nextYears;
 const newPx=width/nextYears;
 ui.centerYear=Math.min(ui.end,Math.max(ui.start,year+(width/2-anchorX)/newPx));
 const events=filtered().filter(inWindow);
 renderTime(events,{center:ui.centerYear});
 updateScaleUI();save();
}
function updateScaleUI(){
 const label=$('#scaleTriggerText');if(label)label.textContent=Number(ui.timeScaleYears)+' 年／畫面';
 const slider=$('#scaleSlider');if(slider)slider.value=String(scaleLevel());
 const value=$('#scaleValue');if(value)value.textContent=String(ui.timeScaleYears);
 const less=$('#scaleLess'),more=$('#scaleMore');
 if(less)less.disabled=scaleLevel()===0;
 if(more)more.disabled=scaleLevel()===SCALE_STEPS.length-1;
}
function closeScaleSheet(){const root=$('#scaleRoot');if(root)root.replaceChildren();document.body.classList.remove('scale-open')}
function openScaleSheet(){
 const root=$('#scaleRoot');if(!root)return;
 root.innerHTML=`<div id="scaleBackdrop" class="scale-backdrop"><section class="scale-sheet" role="dialog" aria-modal="true" aria-label="時間軸縮放"><button type="button" class="scale-close" id="scaleClose" aria-label="關閉">×</button><h3>時間縮放</h3><div class="scale-status"><strong id="scaleValue">${ui.timeScaleYears}</strong><span>年／目前畫面</span></div><div class="scale-adjust"><button class="scale-stepper" id="scaleLess" type="button" aria-label="縮小時間軸">−</button><input type="range" id="scaleSlider" class="scale-slider" min="0" max="${SCALE_STEPS.length-1}" step="1" value="${scaleLevel()}" aria-label="選擇每畫面顯示的年數"><button class="scale-stepper" id="scaleMore" type="button" aria-label="放大時間軸">+</button></div><div class="scale-marks">${SCALE_STEPS.map(n=>`<span>${n}</span>`).join('')}</div></section></div>`;
 $('#scaleClose').onclick=closeScaleSheet;
 $('#scaleBackdrop').onclick=e=>{if(e.target.id==='scaleBackdrop')closeScaleSheet()};
 $('#scaleSlider').oninput=e=>setTimelineScale(Number(e.target.value));
 $('#scaleLess').onclick=()=>setTimelineScale(scaleLevel()-1);
 $('#scaleMore').onclick=()=>setTimelineScale(scaleLevel()+1);
 document.body.classList.add('scale-open');updateScaleUI();
}

function eraScrollYear(pane){
 const start=Number(pane.dataset.start),px=Number(pane.dataset.px)||eraCenturyPixels(),pad=Number(pane.dataset.pad)||0;
 return start+(pane.scrollLeft+pane.clientWidth/2-pad-22)*100/px;
}
function eraScrollTo(year,behavior='auto'){
 const pane=$('#eraScroll');if(!Number.isFinite(year))return;
 ui.centerYear=Math.max(ui.start,Math.min(ui.end,year));
 if(!pane||year<eraTimelineStart(pane)+ui.timeScaleYears/1.8||year>eraTimelineEnd(pane)-ui.timeScaleYears/1.8){
  renderTime(filtered().filter(inWindow),{center:ui.centerYear});return;
 }
 const pad=Number(pane.dataset.pad)||0;
 const x=pad+22+(year-eraTimelineStart(pane))*eraCenturyPixels()/100;
 pane.scrollTo({left:Math.max(0,x-pane.clientWidth/2),behavior});
 if(behavior==='auto')pane.updateFocusUI?.();
}
// Jump without changing the year scale; expand bounds only when a typed year is outside them.
function applyYearJump(year){
 if(!isYear(year))return false;
 if(year<ui.start||year>ui.end){
  const newStart=year<ui.start?Math.floor((year-100)/100)*100:ui.start;
  const newEnd=year>ui.end?Math.ceil((year+100)/100)*100:ui.end;
  if(newEnd-newStart>20000){notify('檢視範圍最多 20,000 年');return false}
  ui.start=newStart;ui.end=newEnd;ui.centerYear=year;save();render();
 }else ui.centerYear=year;
 eraScrollTo(year,'auto');
 save();
 return true;
}
function formatJumpLimit(year){return year<0?'前'+Math.abs(year):String(year)}
let inlineJumpTyping=false;
// Slider bounds represent the complete stored history, independent of viewport and region filter.
const JUMP_SLIDER_END=2000;
function getJumpSliderStart(){
 const start=data.events.reduce((earliest,e)=>isYear(e.start)?Math.min(earliest,e.start):earliest,Infinity);
 return Number.isFinite(start)?Math.min(start,JUMP_SLIDER_END-1):DEFAULT_UI.start;
}
function updateJumpSlider(year){
 const slider=$('#jumpSlider');if(!slider)return;
 const dataStart=getJumpSliderStart();
 if(String(slider.min)!==String(dataStart))slider.min=String(dataStart);
 if(String(slider.max)!==String(JUMP_SLIDER_END))slider.max=String(JUMP_SLIDER_END);
 const min=Number(slider.min),max=Number(slider.max);
 const clamped=Math.max(min,Math.min(max,Math.round(year)));
 slider.value=String(clamped===0?(year<0?-1:1):clamped);
 slider.style.setProperty('--jump-progress',Math.max(0,Math.min(100,100*(clamped-min)/Math.max(1,max-min)))+'%');
 const left=$('#jumpStart'),right=$('#jumpEnd');
 if(left)left.textContent=formatJumpLimit(dataStart);
 if(right)right.textContent=String(JUMP_SLIDER_END);
}
function syncInlineYear(year){
 const input=$('#jumpYearInput');
 if(input&&!inlineJumpTyping)input.value=String(Math.round(year));
 updateJumpSlider(year);
}
function bindInlineYearJump(){
 const input=$('#jumpYearInput'),slider=$('#jumpSlider'),go=$('#jumpGo');
 if(!input||!slider||!go)return;
 let debounce=null,frame=null;
 const commit=()=>{
  clearTimeout(debounce);debounce=null;
  const target=parseFocusYear(input.value);
  if(target===null)return false;
  if(applyYearJump(target)){inlineJumpTyping=false;input.value=String(target);updateJumpSlider(target);return true}
  return false;
 };
 // Only commit after typing stops, so a negative-year prefix is not misread.
 input.addEventListener('input',()=>{
  inlineJumpTyping=true;
  clearTimeout(debounce);
  if(parseFocusYear(input.value)!==null)debounce=setTimeout(commit,550);
 });
 input.addEventListener('keydown',ev=>{
  if(ev.key==='Enter'){
   ev.preventDefault();if(commit())input.blur();else notify('請輸入有效年份，例如 300 或 -221');
  }
 });
 input.addEventListener('blur',()=>{
  clearTimeout(debounce);
  if(!commit()){const y=$('#eraScroll')?eraScrollYear($('#eraScroll')):ui.centerYear;input.value=String(Math.round(y||ui.start));}inlineJumpTyping=false;
 });
 go.addEventListener('click',()=>{if(commit())input.blur();else notify('請輸入有效年份，例如 300 或 -221')});
 // Dragging the bar moves the timeline immediately, without opening a dialog.
 slider.addEventListener('input',()=>{
  let target=Number(slider.value);
  if(target===0)target=ui.centerYear<0?-1:1;
  inlineJumpTyping=false;input.value=String(target);updateJumpSlider(target);
  if(frame!==null)cancelAnimationFrame(frame);
  frame=requestAnimationFrame(()=>{frame=null;applyYearJump(target)});
 });
 updateJumpSlider(isYear(ui.centerYear)?ui.centerYear:ui.start);
}
function renderTime(items,opts={}){
 const pane=$('#mainContent');
 if(noRegionsSelected()){pane.innerHTML='<div class="empty">目前沒有選取任何地區。點選「全部」、快速地區按鈕，或展開地區篩選，即可顯示時間軸。</div>';return}
 if(ui.end<=ui.start||!isYear(ui.start)||!isYear(ui.end)){pane.innerHTML='<div class="empty">請輸入正確的起訖年份（不使用西元0年，且結束年須大於起始年）。</div>';return}
 const span=ui.end-ui.start;
 if(span>20000){pane.innerHTML='<div class="empty">目前設定的年份範圍太廣；請將檢視範圍縮小到 20,000 年以內。</div>';return}
 const groups=new Map();
 const selectedLane=id=>!ui.selected.length||ui.selected.some(sel=>historyRegionMatches(sel,id));
 // Multiple historic country IDs within the SAME macro region appear once in its lane.
 // The original IDs remain available in the event detail and Supabase.
 for(const e of items){
  const original=new Set(Array.isArray(e.regionIds)&&e.regionIds.length?e.regionIds:['other']);
  const visible=new Set([...original].filter(selectedLane).map(historyGeoLaneId));
  for(const id of visible){if(!groups.has(id))groups.set(id,[]);groups.get(id).push(e)}
 }
 const order=id=>{
  const groupIndex=HISTORY_EUROPE_GROUPS.findIndex(g=>g.id===id);
  if(groupIndex!==-1){
   const euIndex=data.continents.findIndex(c=>c.id==='europe');
   return euIndex*100+groupIndex+1;
  }
  const c=findContinent(id);if(!c)return 999;
  const i=data.continents.indexOf(c),j=c.children.findIndex(r=>r.id===id);
  return i*100+(j<0?0:j+1);
 };
 const lanes=[...groups].sort((a,b)=>order(a[0])-order(b[0])).map(([id,events])=>({id,events,periods:events.filter(e=>(e.type==='朝代'||e.type==='歷史時期')&&e.timelineRole!=='event'),points:events.filter(e=>e.timelineRole==='event'||(e.type!=='朝代'&&e.type!=='歷史時期'))}));
 if(!lanes.length){pane.innerHTML='<div class="empty">這個期間沒有符合的歷史資料。可調整年份、地區或新增條目。</div>';return}
 const oldScroller=pane.querySelector('#eraScroll');
 const restoreYear=oldScroller?eraScrollYear(oldScroller):null;
 const explicitCenter=Number.isFinite(opts.center)?opts.center:null;
 const defaultCenter=window.innerWidth<=740&&ui.start<=-1650&&ui.end>=1900&&!ui.selected.length?-1650:ui.start;
 const center=Math.max(ui.start,Math.min(ui.end,explicitCenter??(isYear(ui.centerYear)?ui.centerYear:null)??restoreYear??defaultCenter));
 // Render a fixed number of nearby viewports: 20-year zoom must not create a 100,000px-wide SVG.
 const bufferYears=Number(ui.timeScaleYears)*6;
 let renderStart=Math.max(ui.start,Math.floor(center-bufferYears));
 let renderEnd=Math.min(ui.end,Math.ceil(center+bufferYears));
 if(renderEnd-renderStart<ui.timeScaleYears+2){renderStart=ui.start;renderEnd=ui.end}
 const px=eraCenturyPixels(),chartWidth=Math.max(getEraViewportWidth(),Math.ceil((renderEnd-renderStart)*px/100+44));
 const xFor=y=>22+(y-renderStart)*px/100;
 const eventW=166,eventGap=16,eventTrackH=82;
 // Arrange event cards in separate rows when their year markers are close together.
 // The layout uses screen-space widths, rather than a fixed alternation that overlaps at small gaps.
 const laneLayout=lanes.map(lane=>{
  // Virtualize event annotations around the current viewport, not the full
  // 12-viewport SVG buffer: off-screen dates must not consume vertical rows.
  const eventHorizon=Number(ui.timeScaleYears)*0.8;
  const isNear=e=>e.start<=center+eventHorizon&&effectiveEnd(e)>=center-eventHorizon;
  const tinyPeriods=lane.periods.filter(e=>e.showPeriodCallout&&isNear(e)&&Math.abs(effectiveEnd(e)-e.start)*px/100<125).map(e=>({...e,__eraBadge:true}));
  let pts=[...lane.points.filter(isNear),...tinyPeriods].sort((a,b)=>a.start-b.start||(effectiveEnd(a)-effectiveEnd(b))); // stable tie-break keeps source order
  // Group dense milestones at 200- or 500-year overview. A cluster can be clicked to zoom in.
  if(ui.timeScaleYears>=200&&pts.length>1){
   const grouped=[],threshold=ui.timeScaleYears===500?126:112;
   for(const e of pts){
    const x=xFor((e.start+effectiveEnd(e))/2),prev=grouped[grouped.length-1];
    if(prev&&x-prev.lastX<threshold){prev.items.push(e);prev.lastX=x}
    else grouped.push({items:[e],lastX:x});
   }
   pts=grouped.map(g=>{
    if(g.items.length===1)return g.items[0];
    const representative=g.items.find(e=>e.featured)||g.items.find(e=>e.type==='戰爭')||g.items[0];
    return {...representative,id:'cluster_'+lane.id+'_'+Math.round(g.items[0].start),__clusterIds:g.items.map(e=>e.id),__clusterSize:g.items.length,
      start:Math.min(...g.items.map(e=>e.start)),end:Math.max(...g.items.map(e=>effectiveEnd(e))),
      shortName:(representative.shortName||representative.nameZh||'事件'),nameZh:(representative.nameZh||'事件')};
   });
  }
  // Stable chronological ordering: earlier starting events always sit higher when
  // dates overlap, or when their 166px labels would collide at this zoom level.
  // Reusing a lower track is allowed only when neither dates nor labels intersect.
  const mapped=[];
  for(const e of pts){
   const isHyp=e.temporalMode==='hypothesis'||e.precision==='存疑'||e.type==='年代推測';
   const candidate=e.candidateYears?.length?e.candidateYears:[e.start,e.end??e.start];
   const years=isHyp?candidate:[e.start,e.end??e.start];
   const timeA=Math.min(...years),timeB=Math.max(...years);
   const anchor=years.reduce((sum,y)=>sum+y,0)/years.length;
   const x=xFor(anchor);
   const labelX=Math.max(24,Math.min(chartWidth-eventW-20,x-eventW/2));
   let track=0;
   for(const prev of mapped){
    const datedOverlap=timeA<=prev.timeB&&timeB>=prev.timeA;
    const labelOverlap=labelX<prev.labelX+eventW+eventGap&&prev.labelX<labelX+eventW+eventGap;
    if(datedOverlap||labelOverlap)track=Math.max(track,prev.track+1);
   }
   mapped.push({e,x,track,labelX,isHyp,yearA:years[0],yearB:years[years.length-1],timeA,timeB});
  }
  const tracks=mapped.length?Math.max(...mapped.map(p=>p.track))+1:0;
  const romanSplit=lane.id==='italy'&&lane.periods.some(e=>e.romanBranch==='west')&&lane.periods.some(e=>e.romanBranch==='east');
  const periodTracks=new Map(),periodEnds=[];
  if(!romanSplit)for(const e of lane.periods.slice().sort((a,b)=>a.start-b.start)){
   let idx=periodEnds.findIndex(end=>end<=e.start);
   if(idx<0)idx=periodEnds.length;
   periodEnds[idx]=effectiveEnd(e);
   periodTracks.set(e.id,idx);
  }
  const periodExtra=romanSplit?0:Math.max(0,periodEnds.length-1)*58;
  return {...lane,romanSplit,pointLayouts:mapped,tracks,periodTracks,periodExtra,height:romanSplit?(tracks?294+(tracks-1)*eventTrackH:245):(tracks?171+(tracks-1)*eventTrackH:146)+periodExtra};
 });
 let currentTop=102;
 laneLayout.forEach(l=>{l.top=currentTop;l.y=currentTop+36;currentTop+=l.height});
 const height=currentTop+16;
 let markup=`<rect x="0" y="0" width="${chartWidth}" height="${height}" fill="#fff"/>`;
 markup+=`<line x1="22" y1="61" x2="${chartWidth-18}" y2="61" stroke="#aebbc0" stroke-width="2"/>`;
 for(let yr=Math.ceil(renderStart/scaleTickStep())*scaleTickStep();yr<=renderEnd;yr+=scaleTickStep()){
  if(yr===0)continue;
  const x=xFor(yr),txt=yr<0?'前'+(-yr):String(yr);
  markup+=`<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="76" y2="${height-9}" stroke="#eef1ee" stroke-width="1" stroke-dasharray="3 7"/>`;
  markup+=`<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="53" y2="69" stroke="#aebbc0" stroke-width="1"/>`;
  markup+=`<circle cx="${x.toFixed(1)}" cy="61" r="3.4" fill="#aebbc0"/>`;
  markup+=`<text x="${x.toFixed(1)}" y="41" text-anchor="middle" class="era-tick-label">${txt}</text>`;
 }
 for(let i=0;i<laneLayout.length;i++){
  const lane=laneLayout[i],y=lane.y;
  markup+=`<rect x="4" y="${lane.top+2}" width="${chartWidth-8}" height="${lane.height-8}" rx="12" fill="${i%2?'#fbfbf8':'#f9faf9'}"/>`;
  markup+=`<line x1="20" x2="${chartWidth-20}" y1="${y}" y2="${y}" stroke="#dfe5e0" stroke-width="2"/>`;
  const sorted=lane.periods.slice().sort((a,b)=>a.start-b.start);
  // Roman succession: main line (Kingdom → Republic → Imperial period) splits in 395 CE.
  const splitX=xFor(395);
  if(lane.romanSplit&&renderStart<=395&&renderEnd>=395){
   markup+=`<path d="M ${splitX.toFixed(1)} ${y+23} V ${y+125}" stroke="#a6b3ad" stroke-width="2" fill="none"/>`;
   markup+=`<circle cx="${splitX.toFixed(1)}" cy="${y}" r="5" fill="#fff" stroke="#889c98" stroke-width="2"/>`;
   markup+=`<text x="${(splitX+8).toFixed(1)}" y="${y+46}" class="era-roman-fork-label">395 · 東西分治</text>`;
  }
  for(let j=0;j<sorted.length;j++){
   const e=sorted[j],start=Math.max(e.start,renderStart),end=Math.min(effectiveEnd(e),renderEnd);
   if(end<start)continue;
   const left=xFor(start),right=xFor(end),width=Math.max(2,right-left);
   const color=lane.id==='egypt'?ERA_PALETTE_EG[j%ERA_PALETTE_EG.length]:lane.id==='china'?ERA_PALETTE_CN[j%ERA_PALETTE_CN.length]:lane.id==='persia'?ERA_PALETTE_IR[j%ERA_PALETTE_IR.length]:lane.id==='greece'?ERA_PALETTE_GR[j%ERA_PALETTE_GR.length]:lane.id==='italy'?ERA_PALETTE_RO[j%ERA_PALETTE_RO.length]:lane.id==='france'?ERA_PALETTE_FR[j%ERA_PALETTE_FR.length]:lane.id==='uk'?ERA_PALETTE_UK[j%ERA_PALETTE_UK.length]:colorFor(e);
   const name=e.nameZh||e.nameEn||'未命名',shortName=e.shortName||name.replace(/時期$/,'');
   const isRomanBranch=lane.romanSplit&&Boolean(e.romanBranch);
   const barY=isRomanBranch?(e.romanBranch==='west'?y+62:y+110):(y-26+(lane.periodTracks.get(e.id)||0)*58);
   const barH=isRomanBranch?35:52;
   const labelSize=width<32?12:width<90?13:16;
   const maxChars=Math.floor((width-5)/(labelSize*0.95));
   const label=maxChars>=shortName.length?shortName:(maxChars>=1?shortName.slice(0,Math.max(1,maxChars)):'');
   const title=esc(`${name}｜${formatPeriod(e)}｜${historyGeoDisplayName(lane.id)}｜點擊查看／編輯`);
   markup+=`<g class="era-period" data-open="${esc(e.id)}" role="button" tabindex="0" aria-label="${title}"><title>${title}</title><rect class="era-period-fill" x="${left.toFixed(1)}" y="${barY}" width="${width.toFixed(1)}" height="${barH}" rx="${isRomanBranch?6:3}" fill="${color}" stroke="#fff" stroke-width="1.8"/>`;
   if(label)markup+=`<text x="${(left+width/2).toFixed(1)}" y="${barY+barH/2+5}" font-size="${labelSize}" font-weight="720" text-anchor="middle" fill="#fff" class="era-segment-text" data-full-label="${esc(shortName)}">${esc(label)}</text>`;
   markup+='</g>';
   if(isRomanBranch&&e.end<=renderEnd&&e.end>=renderStart){
    const endLabel=e.romanBranch==='west'?'476 · 西羅馬亡':'1453 · 東羅馬亡';
    markup+=`<circle cx="${right.toFixed(1)}" cy="${barY+barH/2}" r="4" fill="#fff" stroke="${color}" stroke-width="2"/><text x="${(right+9).toFixed(1)}" y="${barY+barH/2+4}" class="era-roman-end">${endLabel}</text>`;
   }
  }
  const connectors=[],eventCards=[];
  for(const item of lane.pointLayouts){
   const {e,x,track,labelX,isHyp,yearA,yearB}=item;
   const cardY=y+(lane.romanSplit?198:72+lane.periodExtra)+track*eventTrackH;
   const startX=xFor(yearA),endX=xFor(yearB),from=Math.min(startX,endX),to=Math.max(startX,endX);
   const hasRange=!e.__clusterIds&&Math.abs(to-from)>4;
   const isCluster=!!e.__clusterIds;
   const title=esc(isCluster?`包含 ${e.__clusterSize} 個事件｜點擊放大檢視`:`${e.nameZh||e.nameEn}｜${formatPeriod(e)}｜${historyGeoDisplayName(lane.id)}｜點擊查看／編輯`);
   const short=(e.shortName||e.nameZh||e.nameEn||'事件');
   const labelText=(e.featured?'★ ':'')+short;
   const label=isCluster?(labelText.length>10?labelText.slice(0,9)+'…':labelText):labelText.length>12?labelText.slice(0,11)+'…':labelText;
   const small=isCluster?`另有 ${e.__clusterSize-1} 個事件 · 點擊放大`:(isHyp?(e.candidateYears?.map(compactYear).join('／')||'年代假說'):formatPeriod(e));
   const shownSmall=small.length>23?small.slice(0,22)+'…':small;
   const css=isHyp?' uncertain':e.featured?' featured':e.__eraBadge?' period-badge':'';
   const segY=cardY-20;
   let connector=`<g class="era-event-connector" ${isCluster?`data-cluster="${esc(e.id)}"`:`data-open="${esc(e.id)}"`} role="button" tabindex="0" aria-label="${title}"><title>${title}</title>`;
   // A single year is a node; a dated interval is a solid connected line.
   if(hasRange){
    connector+=`<line x1="${from.toFixed(1)}" y1="${segY}" x2="${to.toFixed(1)}" y2="${segY}" class="event-range${css}"/>`;
    connector+=`<circle cx="${from.toFixed(1)}" cy="${segY}" r="3.6" class="event-anchor${css}"/><circle cx="${to.toFixed(1)}" cy="${segY}" r="3.6" class="event-anchor${css}"/>`;
   }
   // Never draw a vertical stem through earlier event cards or a Roman fork.
   // Each short leader stays inside its own dedicated row below the history bars.
   if(!hasRange)connector+=`<circle cx="${x.toFixed(1)}" cy="${segY}" r="4" class="event-anchor${css}"/>`;
   const labelCenter=labelX+eventW/2;
   connector+=`<path d="M ${x.toFixed(1)} ${segY} L ${x.toFixed(1)} ${(cardY-9).toFixed(1)} L ${labelCenter.toFixed(1)} ${(cardY-9).toFixed(1)} L ${labelCenter.toFixed(1)} ${cardY}" class="event-leader${css}" fill="none"/>`;
   connector+='</g>';connectors.push(connector);
   let card=`<g class="${isCluster?'era-event-cluster':'era-event'}" ${isCluster?`data-cluster="${esc(e.id)}" data-cluster-year="${x.toFixed(1)}"`:`data-open="${esc(e.id)}"`} role="button" tabindex="0" aria-label="${title}"><title>${title}</title>`;
   card+=`<rect x="${labelX.toFixed(1)}" y="${cardY}" width="${eventW}" height="37" rx="9" class="${isCluster?'cluster-tag':'event-tag'+css}"/>`;
   card+=`<text x="${(labelX+eventW/2).toFixed(1)}" y="${cardY+15}" text-anchor="middle" class="${isCluster?'cluster-title':'event-tag-title'+css}">${esc(label)}</text>`;
   card+=`<text x="${(labelX+eventW/2).toFixed(1)}" y="${cardY+29}" text-anchor="middle" class="${isCluster?'cluster-date':'event-tag-date'+css}">${esc(shownSmall)}</text>`;
   card+='</g>';eventCards.push(card);
  }
  markup+=connectors.join('')+eventCards.join('');
 }
 const laneLabels=laneLayout.map(lane=>{
  const group=HISTORY_EUROPE_GROUPS.find(g=>g.id===lane.id);
  const continent=group?data.continents.find(c=>c.id==='europe'):findContinent(lane.id);
  const title=historyGeoDisplayName(lane.id);
  const heading=group?group.name:eraRegionShortName(lane.id);
  const sub=group?'歐洲 · 大區':continent?.name||'地區';
  return `<button class="era-region-label ${group?'macro-lane-label':''}" type="button" data-focus-region="${esc(lane.id)}" style="top:${lane.top+2}px" title="篩選${esc(title)}的歷史事件"><strong>${esc(heading)}</strong><small>${esc(sub)}</small></button>`;
 }).join('');
 const jumpOptions=[{year:-2600,name:'古夫金字塔'},{year:-1500,name:'新王國'},{year:-550,name:'波斯第一帝國'},{year:-525,name:'波斯征服埃及'},{year:-490,name:'馬拉松・溫泉關'},{year:-430,name:'伯羅奔尼撒戰爭'},{year:-334,name:'亞歷山大東征'},{year:-330,name:'亞歷山大帝國'},{year:-200,name:'羅馬共和'},{year:395,name:'羅馬分治'},{year:476,name:'西羅馬亡'},{year:1453,name:'東羅馬亡'},{year:650,name:'隋唐'},{year:1500,name:'明清'}];
 const eventCount=laneLayout.reduce((sum,l)=>sum+l.pointLayouts.filter(i=>!i.e.__eraBadge).length,0);
 pane.innerHTML=`<div class="era-view"><div class="era-labels" style="height:${height}px"><span class="era-axis-label">西元年</span>${laneLabels}</div><div class="era-viewport"><div class="era-scroll" id="eraScroll" tabindex="0" aria-label="可左右拖曳的歷史時間軸"><svg class="era-svg" width="${chartWidth}" height="${height}" viewBox="0 0 ${chartWidth} ${height}" xmlns="http://www.w3.org/2000/svg" aria-label="各地區朝代與歷史事件時間軸">${markup}</svg></div><div class="era-center-guide" aria-hidden="true"><span id="eraCenterYear" class="era-center-badge"></span><span class="era-center-dot"></span><span class="era-center-line"></span></div></div></div>`;
 const newScroller=pane.querySelector('#eraScroll');
 if(newScroller){
  newScroller.dataset.start=String(renderStart);
  newScroller.dataset.end=String(renderEnd);
  newScroller.dataset.px=String(px);
  const padding=Math.max(0,newScroller.clientWidth/2-22);
  newScroller.style.paddingLeft=padding+'px';
  newScroller.style.paddingRight=padding+'px';
  newScroller.dataset.pad=String(padding);
  const preferred=Number.isFinite(explicitCenter)?explicitCenter:(isYear(ui.centerYear)&&ui.centerYear>=ui.start&&ui.centerYear<=ui.end?ui.centerYear:null)??restoreYear;
  const fallback=window.innerWidth<=740&&ui.start<=-1650&&ui.end>=1900&&!ui.selected.length?-1650:ui.start;
  const targetYear=Math.max(ui.start,Math.min(ui.end,preferred??fallback));
  newScroller.scrollLeft=Math.max(0,padding+22+(targetYear-renderStart)*px/100-newScroller.clientWidth/2);
  let savedYearTimer=null;
  const syncFocus=()=>{
   const actual=eraScrollYear(newScroller);
   let year=Math.round(Math.max(ui.start,Math.min(ui.end,actual)));
   if(year===0)year=actual<0?-1:1;
   $('#eraCenterYear').textContent=formatFocusYear(year);
   ui.centerYear=year;
   syncInlineYear(year);
   clearTimeout(savedYearTimer);
   savedYearTimer=setTimeout(()=>save(),380);
  };
  const syncLabels=()=>{
   const l=newScroller.scrollLeft-padding,r=l+newScroller.clientWidth;
   newScroller.querySelectorAll('.era-period').forEach(g=>{const box=g.querySelector('rect'),label=g.querySelector('.era-segment-text');if(!box||!label)return;
    const x=Number(box.getAttribute('x')),w=Number(box.getAttribute('width')),left=Math.max(l,x),right=Math.min(r,x+w);
    if(right<=left)return;
    const size=Number(label.getAttribute('font-size'))||14,cap=Math.max(0,Math.floor((right-left-6)/(size*0.93)));
    label.textContent=(label.dataset.fullLabel||'').slice(0,cap);
    label.setAttribute('x',((left+right)/2).toFixed(1));
   });
   syncFocus();
  };
  newScroller.updateFocusUI=syncLabels;
  newScroller.addEventListener('scroll',syncLabels,{passive:true});
  newScroller.addEventListener('scroll',()=>{
   clearTimeout(window._timelineWindowTimer);
   window._timelineWindowTimer=setTimeout(()=>{
    if(timelinePointerCount||$('#eraScroll')!==newScroller)return;
    const cy=eraScrollYear(newScroller);
    const nearLeft=(cy-renderStart)<1.7*ui.timeScaleYears&&renderStart>ui.start;
    const nearRight=(renderEnd-cy)<1.7*ui.timeScaleYears&&renderEnd<ui.end;
    // Once the visible era changes, repack nearby event rows. Defer during
    // any active drag so the time axis never disappears under the pointer.
    const moved=Math.abs(cy-center)>ui.timeScaleYears*0.26;
    if(!newScroller.classList.contains('is-dragging')&&(nearLeft||nearRight||moved))renderTime(filtered().filter(inWindow),{center:cy});
   },155);
  },{passive:true});
  enableTimelineDragging(newScroller);
  syncLabels();
 }
 pane.querySelectorAll('[data-open]').forEach(el=>{el.addEventListener('click',()=>openEvent(el.dataset.open));el.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();openEvent(el.dataset.open)}})});
 pane.querySelectorAll('[data-cluster]').forEach(el=>{
  const record=laneLayout.flatMap(l=>l.pointLayouts).find(item=>item.e.id===el.dataset.cluster);
  const click=()=>{if(!record)return;setTimelineScale(Math.min(SCALE_STEPS.length-1,scaleLevel()+1),(record.e.start+record.e.end)/2)};
  el.addEventListener('click',click);
  el.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();click()}});
 });
 pane.querySelectorAll('[data-jump]').forEach(el=>el.addEventListener('click',()=>eraScrollTo(Number(el.dataset.jump))));
 pane.querySelectorAll('[data-focus-region]').forEach(el=>el.addEventListener('click',()=>{ui.selected=[el.dataset.focusRegion];save();render()}));
}
function enableTimelineDragging(scroller){
 let state=null,suppressClick=false;
 const end=ev=>{
  if(!state||ev.pointerId!==state.id)return;
  if(state.dragged){suppressClick=true;setTimeout(()=>{suppressClick=false},160)}
  const hadDragged=state.dragged;
  scroller.classList.remove('is-dragging');
  if(scroller.hasPointerCapture?.(state.id)){try{scroller.releasePointerCapture(state.id)}catch{}}
  state=null;
  // A drag may end without another native scroll event. Check whether nearby
  // event cards need a fresh chronological layout after the pointer is released.
  if(hadDragged)setTimeout(()=>{if($('#eraScroll')===scroller)scroller.dispatchEvent(new Event('scroll'))},20);
 };
 scroller.addEventListener('pointerdown',ev=>{
  if(ev.isPrimary===false||(ev.pointerType==='mouse'&&ev.button!==0))return;
  state={id:ev.pointerId,x:ev.clientX,y:ev.clientY,left:scroller.scrollLeft,dragged:false,skip:false};
 });
 scroller.addEventListener('pointermove',ev=>{
  if(!state||ev.pointerId!==state.id||state.skip||timelineGestureWasPinch||timelinePointerCount>1)return;
  const dx=ev.clientX-state.x,dy=ev.clientY-state.y;
  if(!state.dragged){
   if(Math.abs(dx)<7)return;
   if(ev.pointerType==='touch'&&Math.abs(dy)>Math.abs(dx)*1.1){state.skip=true;return}
   state.dragged=true;
   scroller.classList.add('is-dragging');
   if(ev.pointerType==='mouse'||ev.pointerType==='pen'){try{scroller.setPointerCapture(ev.pointerId)}catch{}}
  }
  scroller.scrollLeft=state.left-dx;
  if(ev.cancelable)ev.preventDefault();
 },{passive:false});
 for(const event of ['pointerup','pointercancel'])scroller.addEventListener(event,end);
 scroller.addEventListener('click',ev=>{if(suppressClick){ev.preventDefault();ev.stopImmediatePropagation();suppressClick=false}},true);
 scroller.addEventListener('keydown',ev=>{
  if(ev.target!==scroller)return;
  if(ev.key==='ArrowRight'||ev.key==='ArrowLeft'){
   ev.preventDefault();scroller.scrollLeft+=(ev.key==='ArrowRight'?1:-1)*eraCenturyPixels()/10;
  }
 });
}
function renderRegion(items){const pane=$('#mainContent');let options=data.continents.map(c=>`<optgroup label="${esc(c.name)}"><option value="${esc(c.id)}" ${ui.focus===c.id?'selected':''}>${esc(c.name)} · 全洲</option>${c.children.map(k=>`<option value="${esc(k.id)}" ${ui.focus===k.id?'selected':''}>${esc(nameFor(k.id))}</option>`).join('')}</optgroup>`).join('');
 if(!data.continents.some(c=>c.id===ui.focus||c.children.some(k=>k.id===ui.focus)))ui.focus='china';
 const matching=items.filter(e=>{const c=data.continents.find(c=>c.id===ui.focus);return c?e.regionIds.some(r=>r===c.id||c.children.some(k=>k.id===r)):e.regionIds.includes(ui.focus)||(findContinent(ui.focus)&&e.regionIds.includes(findContinent(ui.focus).id))});
 $('#countLabel').textContent=`${matching.length} 個條目`;
 let html=`<div class="focus-select"><span class="section-caption">CURRENT FOCUS</span><select id="focusRegion" aria-label="選擇地區">${options}</select><span class="tag">依年代由早到晚</span></div>`;
 if(!matching.length)html+=`<div class="empty">「${esc(nameFor(ui.focus))}」目前還沒有收錄符合的事件。<br><button class="button small" type="button" id="emptyAdd" style="margin-top:12px">＋ 建立第一個事件</button></div>`;
 else{html+='<div class="flow-list">';for(let e of matching){let moreRegions=e.regionIds.map(nameFor);let link=safeUrl(e.source);html+=`<div class="flow-item"><div class="flow-date">${e.precision==='存疑'?'推測':esc(compactYear(e.start))}<div style="font-size:10px;color:#a9b6ae">${e.precision==='存疑'?esc(e.candidateYears?.map(compactYear).join('／')||'年代未確立'):e.ongoing?'至今':e.end!=null&&e.end!==e.start?'至 '+esc(compactYear(e.end)):''}</div></div><i class="flow-node" style="--node:${esc(colorFor(e))}"></i><div class="flow-card"><div class="flow-card-title"><span>${esc(e.nameZh||e.nameEn)}</span><button class="button small" data-open="${esc(e.id)}" type="button">查看 / 編輯 ↗</button></div><div class="flow-sub">${esc(e.nameEn||'')}${e.precision==='存疑'?' · 年代假說（未證實）':e.precision==='約'?' · 年代約數':''}</div><p class="flow-note">${esc(e.notes||'尚未補充事件說明')}</p><div class="flow-tags"><span class="flow-tag">${esc(e.type||'事件')}</span>${moreRegions.map(k=>`<span class="flow-tag">${esc(k)}</span>`).join('')}</div>${link?`<div class="flow-actions"><a href="${esc(link)}" target="_blank" rel="noopener noreferrer">來源：維基百科 / 外部連結 ↗</a></div>`:''}</div></div>`;}html+='</div>'}
 pane.innerHTML=html;$('#focusRegion').onchange=e=>{ui.focus=e.target.value;ui.selected=[ui.focus];save();render()};pane.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openEvent(b.dataset.open));if($('#emptyAdd'))$('#emptyAdd').onclick=()=>openEvent();}
function openModal(title,subtitle,bodyHtml,footer){const root=$('#modalRoot');const hasHeader=!!(String(title||'').trim()||String(subtitle||'').trim());root.innerHTML=`<div class="backdrop" id="modalBackdrop"><section class="modal ${hasHeader?'':'no-header'}" role="dialog" aria-modal="true" ${hasHeader?'aria-labelledby="modalTitle"':'aria-label="對話視窗"'}>${hasHeader?`<header class="modal-header"><div><h2 id="modalTitle">${esc(title)}</h2>${subtitle?`<p>${esc(subtitle)}</p>`:''}</div><button class="close-modal" id="closeModal" type="button" aria-label="關閉">×</button></header>`:`<div class="modal-minimal-top"><button class="close-modal" id="closeModal" type="button" aria-label="關閉">×</button></div>`}<div class="modal-body" id="modalBody">${bodyHtml}</div>${footer?`<div class="modal-actions" id="modalActions">${footer}</div>`:''}</section></div>`;
 $('#closeModal').onclick=closeModal;$('#modalBackdrop').onclick=e=>{if(e.target.id==='modalBackdrop')closeModal()};}
function closeModal(){cancelWikiLookup();$('#modalRoot').innerHTML='';wikiCandidates=[]}
function historyResolveEditorRegionIds(checked,original=[]){
 const selected=new Set(checked),old=Array.isArray(original)?original:[];
 const out=[];
 for(const id of selected){
  const group=HISTORY_EUROPE_GROUPS.find(g=>g.id===id);
  if(!group){out.push(id);continue}
  const originalMembers=old.filter(r=>group.ids.includes(r)||r===group.id);
  // New events store the macro ID itself, never a falsely precise country ID.
  out.push(...(originalMembers.length?originalMembers:[group.id]));
 }
 // Keep original ID order whenever the visible region choices have not changed.
 const resolved=new Set(out);
 return [...old.filter(id=>resolved.has(id)),...out.filter(id=>!old.includes(id))].filter((id,i,arr)=>arr.indexOf(id)===i);
}
function regionEditorHtml(selected){
 const chosen=new Set(selected||[]);
 const input=(id,label,extraClass='')=>`<label class="region-option ${extraClass}"><input class="event-region" type="checkbox" value="${esc(id)}" ${chosen.has(id)?'checked':''}><span>${esc(label)}</span></label>`;
 const sections=data.continents.map(c=>{
  const whole=input(c.id,'整洲','region-whole');
  const children=c.id==='europe'
   ?HISTORY_EUROPE_GROUPS.map(g=>{
      const active=chosen.has(g.id)||g.ids.some(id=>chosen.has(id));
      return `<label class="region-option macro-region-option" title="${esc(HISTORY_GEO_HINTS[g.id]||g.name)}"><input class="event-region" type="checkbox" value="${esc(g.id)}" ${active?'checked':''}><span>${esc(g.name)}</span></label>`;
     }).join('')+
     c.children.filter(r=>!HISTORY_EUROPE_GROUPS.some(g=>g.ids.includes(r.id))).map(r=>input(r.id,r.name)).join('')
   :c.children.map(k=>input(k.id,nameFor(k.id))).join('');
  return `<section class="region-check-group"><h4><span class="dot" style="background:${esc(c.color)}"></span>${esc(c.name)}</h4><div class="region-check-group-options">${whole}${children}</div></section>`;
 }).join('');
 const specific=(selected||[]).filter(id=>data.continents.some(c=>c.children.some(r=>r.id===id))).map(nameFor);
 return `<p class="geo-edit-help">以大區域指定影響範圍；精確古地名、城市與當時的政權請寫在下方「歷史備註」。</p><div class="region-checklist">${sections}</div>${specific.length? `<p class="geo-saved-details">原始細部標記（保留不覆蓋）：${esc([...new Set(specific)].join('、'))}</p>`:''}`;
}
function openEvent(id=null){if(!id && !historyOwner){notify('僅管理者可以新增事件');return;}const e=id?data.events.find(e=>e.id===id):null;const item=e||{nameZh:'',nameEn:'',start:'',end:null,type:'事件',precision:'確定',notes:'',source:'',regionIds:ui.view==='region'?[ui.focus]:ui.selected.length?[ui.selected[0]]:['china']};
 let html=`<form id="eventForm"><div class="form-grid"><div class="field"><label for="eventZh">中文名稱</label><input id="eventZh" required maxlength="180" value="${esc(item.nameZh)}" autocomplete="off"><div class="wiki-inline" id="wikiInline"><div class="wiki-status" id="wikiStatus" role="status" aria-live="polite"></div><div id="wikiResults" class="wiki-results"></div></div></div><div class="field"><label for="eventEn">English name (optional)</label><input id="eventEn" maxlength="230" value="${esc(item.nameEn)}"></div><div class="field force-half"><label for="eventStart">起始年</label><input id="eventStart" required type="number" step="1" value="${item.start===''?'':esc(item.start)}"></div><div class="field force-half"><label for="eventEnd">結束年</label><input id="eventEnd" type="number" step="1" value="${item.end==null?'':esc(item.end)}"></div><div class="field"><label for="eventType">類別</label><select id="eventType">${['朝代','歷史時期','在位期間','在世期間','建造工程','重大事件','戰爭','法典／文獻','條約','年代推測','文化','科技','人物','其他','事件'].map(t=>`<option value="${t}" ${item.type===t?'selected':''}>${t}</option>`).join('')}</select></div><div class="field"><label for="eventPrecision">年代精確度</label><select id="eventPrecision"><option value="確定" ${item.precision!=='約'&&item.precision!=='存疑'?'selected':''}>確定 / 常用紀年</option><option value="約" ${item.precision==='約'?'selected':''}>約略年代</option></select></div><div class="field span-2"><label>影響地區</label>${regionEditorHtml(item.regionIds)}</div><div class="field span-2"><label for="eventNotes">歷史備註</label><textarea id="eventNotes" rows="3">${esc(item.notes)}</textarea></div><div class="field span-2"><label for="eventSource">資料來源網址</label><input id="eventSource" type="url" value="${esc(item.source)}"><p class="form-help">維基年代並非總有機器可讀的日期，請對照原文確認，存檔前可以修正。</p></div></div></form>`;
 let footer=`${e?`<button class="button danger" id="deleteEvent" style="margin-right:auto" type="button">刪除事件</button>`:''}<button class="button" id="cancelEvent" type="button">取消</button><button class="button primary" id="saveEvent" type="button">儲存事件</button>`;
 openModal('','',html,historyOwner?footer:'<button class="button" id="cancelEvent" type="button">關閉</button>');
 if(!historyOwner) $$('#eventForm input,#eventForm select,#eventForm textarea').forEach(field=>field.disabled=true);
 $('#cancelEvent').onclick=closeModal;if($('#saveEvent'))$('#saveEvent').onclick=()=>saveEvent(e?.id);$('#eventZh').addEventListener('input',()=>scheduleWikiLookup($('#eventZh').value));$('#eventZh').addEventListener('compositionstart',()=>{wikiComposing=true;cancelWikiLookup()});$('#eventZh').addEventListener('compositionend',()=>{wikiComposing=false;scheduleWikiLookup($('#eventZh').value)});
 if(e&&historyOwner)$('#deleteEvent').onclick=async()=>{if(!confirm(`確定刪除「${e.nameZh}」？此動作無法復原（除非已有備份）。`))return;data.events=data.events.filter(x=>x.id!==e.id);try{await historyCommitNow();closeModal();render();notify('已從 Supabase 刪除事件');}catch(err){notify('刪除失敗：'+err.message)}};
 setTimeout(()=>$('#eventZh')?.focus(),30);
}
async function saveEvent(existing){if(!historyOwner||!historyReady){notify('雲端未就緒，不能儲存');return;}const get=id=>$('#'+id)?.value.trim()||'';const zh=get('eventZh'),en=get('eventEn'),start=Number(get('eventStart')),endRaw=get('eventEnd'),end=endRaw===''?null:Number(endRaw),regions=historyResolveEditorRegionIds($$('.event-region:checked').map(e=>e.value),existing?data.events.find(e=>e.id===existing)?.regionIds:[]);
 if(!zh){notify('請輸入中文名稱');$('#eventZh').focus();return}if(!isYear(start)||end!==null&&!isYear(end)){notify('請填寫正確的西元年份，年份不能為 0。');return}if(end!==null&&astro(end)<astro(start)){notify('結束年份不得早於起始年份');return}if(!regions.length){notify('至少指定一個影響地區');return}
 const orig=existing?data.events.find(x=>x.id===existing):null;
 const temporalHyp=get('eventPrecision')==='存疑'||get('eventType')==='年代推測';
 const record={...orig,ongoing:Boolean(orig?.ongoing&&end===null&&['朝代','歷史時期'].includes(get('eventType'))),shortName:orig?.nameZh===zh?orig?.shortName:null,temporalMode:temporalHyp?'hypothesis':null,candidateYears:temporalHyp?(end!==null?[start,end]:[start]):null,id:existing||'evt_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),nameZh:zh,nameEn:en,start,end,type:get('eventType'),precision:orig?.precision==='存疑'&&orig?.nameZh===zh&&get('eventPrecision')==='確定'?'存疑':get('eventPrecision'),notes:get('eventNotes'),source:safeUrl(get('eventSource')),regionIds:regions,sourceType:orig?.sourceType||'manual',isSeed:orig?.isSeed||false};
 if(existing){data.events=data.events.map(x=>x.id===existing?record:x)}else{data.events.push(record)}
 try{await historyCommitNow();closeModal();render();notify(existing?'已同步修改到 Supabase':'已新增至 Supabase');}catch(err){notify('儲存失敗：'+err.message)}}
async function fetchJson(url){const ctrl=new AbortController();const timeout=setTimeout(()=>ctrl.abort(),14000);try{let r=await fetch(url,{method:'GET',signal:ctrl.signal,credentials:'omit'});if(!r.ok)throw Error('HTTP '+r.status);return await r.json()}finally{clearTimeout(timeout)}}
// v7.3: The only lookup box is the Chinese-name field. Never search mid-IME composition.
let wikiTimer=null,wikiSeq=0,wikiComposing=false;
function cancelWikiLookup(){if(wikiTimer!==null)clearTimeout(wikiTimer);wikiTimer=null;wikiSeq++}
function scheduleWikiLookup(value){
 if(wikiComposing)return;
 cancelWikiLookup();
 const q=String(value||'').trim();
 const status=$('#wikiStatus'),results=$('#wikiResults');
 if(status)status.textContent='';if(results)results.replaceChildren();
 wikiCandidates=[];
 if(q.length<2)return;
 const seq=wikiSeq;
 wikiTimer=setTimeout(()=>{wikiTimer=null;wikiSearch(q,seq)},750);
}
// Display Chinese Wikipedia's Traditional Chinese (Taiwan) variant, not raw zh/zh-cn content.
// Wikidata is queried in Traditional Chinese first; do not use a zh-cn label as a translation.
const traditionalLabel=labels=>labels?.['zh-hant']?.value||labels?.['zh-tw']?.value||'';
const traditionalDescription=descs=>descs?.['zh-hant']?.value||descs?.['zh-tw']?.value||'';
const makeZhWikiUrl=title=>`https://zh.wikipedia.org/zh-tw/${encodeURIComponent(String(title).replace(/\s+/g,'_'))}`;
async function localizeWikiCandidates(candidates,seq){
 const ids=[...new Set(candidates.map(w=>w.qid).filter(Boolean))];
 if(!ids.length)return;
 const p=new URLSearchParams({action:'wbgetentities',ids:ids.join('|'),props:'labels|descriptions|sitelinks',languages:'zh-hant|zh-tw|en',sitefilter:'zhwiki',format:'json',origin:'*'});
 try{
  const j=await fetchJson('https://www.wikidata.org/w/api.php?'+p);
  if(seq!==wikiSeq)return;
  for(const w of candidates){
   const wd=j.entities?.[w.qid];if(!wd)continue;
   w.tradTitle=traditionalLabel(wd.labels)||'';
   w.tradDescription=traditionalDescription(wd.descriptions)||'';
   w.zhTitle=wd.sitelinks?.zhwiki?.title||'';
  }
 }catch(e){/* Search can still work without Wikidata translations. */}
}
async function wikiSearch(q,seq){
 if(seq!==wikiSeq||!$('#eventZh'))return;
 const status=$('#wikiStatus'),results=$('#wikiResults');
 status.textContent='正在查詢維基百科…';
 const lang=/[\u3400-\u9fff]/.test(q)?'zh':'en';
 const p=new URLSearchParams({action:'query',generator:'search',gsrsearch:q,gsrlimit:'5',prop:'pageprops|extracts',exintro:'1',exsentences:'2',explaintext:'1',format:'json',origin:'*',redirects:'1'});
 if(lang==='zh'){
  p.set('variant','zh-tw');p.set('uselang','zh-tw');p.set('converttitles','1');
 }
 try{
  const j=await fetchJson(`https://${lang}.wikipedia.org/w/api.php?${p}`);
  if(seq!==wikiSeq||!$('#eventZh')||$('#eventZh').value.trim()!==q)return;
  const pages=Object.values(j.query?.pages||{}).sort((a,b)=>(a.index||0)-(b.index||0));
  wikiCandidates=pages.map(x=>({title:x.title,excerpt:(x.extract||'').replace(/\s+/g,' ').slice(0,320),qid:x.pageprops?.wikibase_item||'',lang,pageid:x.pageid,tradTitle:'',tradDescription:'',zhTitle:''}));
  if(!wikiCandidates.length){status.textContent='沒有找到相符條目，仍可手動填寫。';return}
  await localizeWikiCandidates(wikiCandidates,seq);
  if(seq!==wikiSeq||!$('#eventZh')||$('#eventZh').value.trim()!==q)return;
  const clean=s=>String(s||'').trim().toLocaleLowerCase().replace(/[\s·・‧]/g,'');
  const exact=wikiCandidates.findIndex(w=>clean(w.title)===clean(q)||clean(w.tradTitle)===clean(q));
  if(exact>=0&&wikiCandidates[exact].qid){
   await selectWiki(exact,{auto:true,seq});
   return;
  }
  status.textContent='找到相近條目，請點選正確的一筆：';
  results.innerHTML=wikiCandidates.slice(0,4).map((w,i)=>{
   const title=w.tradTitle||(w.lang==='zh'?w.title:'維基百科條目');
   const description=w.lang==='zh'?(w.excerpt||w.tradDescription):(w.tradDescription||'可點選後讀取中文資料');
   return `<div class="wiki-result"><div class="wiki-result-main"><b>${esc(title)}</b><small>${esc(description.slice(0,180))}</small></div><button type="button" data-wiki="${i}">套用</button></div>`;
  }).join('');
  results.querySelectorAll('[data-wiki]').forEach(el=>el.onclick=()=>selectWiki(Number(el.dataset.wiki),{auto:false,seq}));
 }catch(err){
  if(seq!==wikiSeq||!$('#wikiStatus'))return;
  status.textContent='維基百科暫時無法連線，仍可手動填寫。';
 }
}
async function traditionalArticleSummary(w,seq){
 if(w.lang==='zh')return w.excerpt||w.tradDescription||'';
 if(!w.zhTitle)return w.tradDescription||'';
 const p=new URLSearchParams({action:'query',titles:w.zhTitle,prop:'extracts',exintro:'1',exsentences:'2',explaintext:'1',format:'json',origin:'*',redirects:'1',variant:'zh-tw',uselang:'zh-tw',converttitles:'1'});
 try{
  const j=await fetchJson('https://zh.wikipedia.org/w/api.php?'+p);
  if(seq!==wikiSeq)return '';
  const page=Object.values(j.query?.pages||{})[0];
  return (page?.extract||w.tradDescription||'').replace(/\s+/g,' ').slice(0,320);
 }catch(e){return w.tradDescription||''}
}
function suggestYearsFromWikiIntro(text,lang){
 const intro=(text||'').slice(0,245);let dates=[];
 if(lang==='zh'){
  let re=/(?:公元前|西元前|前)?[0-9]{1,4}年/g,match;
  while((match=re.exec(intro))!==null&&dates.length<4){const raw=match[0];const n=Number(raw.match(/[0-9]+/)[0]);if(n===0)continue;dates.push({year:/前/.test(raw)?-n:n,index:match.index,end:re.lastIndex})}
 }else{
  let re=/\b([0-9]{3,4})\s*(BC|BCE|AD|CE)?\b/gi,match;
  while((match=re.exec(intro))!==null&&dates.length<4){const n=Number(match[1]);if(n===0)continue;dates.push({year:/^BC/i.test(match[2]||'')?-n:n,index:match.index,end:re.lastIndex})}
 }
 if(!dates.length)return null;
 if(dates.length>=2){let between=intro.slice(dates[0].end,dates[1].index);if(between.length<=12&&/^[\s\u2013\u2014\-~～—－至到]+$/.test(between)&&dates[1].year>=dates[0].year)return {start:dates[0].year,end:dates[1].year};}
 return dates[0].index<=135?{start:dates[0].year,end:null}:null;
}
const wikidataDate=cl=>{const ordered=[...(cl||[])].filter(x=>x.rank!=='deprecated').sort((a,b)=>(a.rank==='preferred'?-1:1)-(b.rank==='preferred'?-1:1));for(let x of ordered){const d=x.mainsnak?.datavalue?.value;if(d&&typeof d.time==='string'){let m=d.time.match(/^([+-])(\d{1,16})-/);if(!m)continue;let y=Number(m[2]);if(!y&&m[1]==='-')y=1;if(m[1]==='-')y=-y;if(isYear(y))return {year:y,precision:d.precision||9,raw:d.time}}}return null};
async function selectWiki(index,{auto=false,seq=wikiSeq}={}){
 const w=wikiCandidates[index];if(!w||seq!==wikiSeq||!$('#eventZh'))return;
 const status=$('#wikiStatus'),query=$('#eventZh').value.trim();
 const setField=(id,value)=>{const field=$('#'+id);if(field&&value!=null&&!field.value.trim())field.value=String(value)};
 status.textContent='正在讀取維基年代…';
 const applyArticle=(tradTitle,summary,source)=>{
  if(tradTitle){
   // An explicit candidate selection can normalize the search keyword to a Chinese name.
   if(!auto||w.lang==='en'||(w.lang==='zh'&&w.title===query&&tradTitle!==query)){
    const f=$('#eventZh');if(f&&f.value.trim()===query)f.value=tradTitle;
   }
  }
  setField('eventSource',source);
  setField('eventNotes',String(summary||'').slice(0,210));
 };
 let wd=null;
 if(w.qid){
  const p=new URLSearchParams({action:'wbgetentities',ids:w.qid,props:'claims|labels|descriptions|sitelinks',languages:'zh-hant|zh-tw|en',sitefilter:'zhwiki',format:'json',origin:'*'});
  try{
   const j=await fetchJson('https://www.wikidata.org/w/api.php?'+p);
   wd=j.entities?.[w.qid]||null;
   if(wd){
    w.tradTitle=traditionalLabel(wd.labels)||w.tradTitle;
    w.tradDescription=traditionalDescription(wd.descriptions)||w.tradDescription;
    w.zhTitle=wd.sitelinks?.zhwiki?.title||w.zhTitle;
   }
  }catch(e){/* Continue to use the article when Wikidata is unavailable. */}
 }
 if(seq!==wikiSeq||!$('#eventZh')||$('#eventZh').value.trim()!==query)return;
 const tradTitle=w.tradTitle||(w.lang==='zh'?w.title:'');
 const source=(w.zhTitle||w.lang==='zh')?makeZhWikiUrl(w.zhTitle||w.title):`https://${w.lang}.wikipedia.org/?curid=${encodeURIComponent(w.pageid)}`;
 const summary=await traditionalArticleSummary(w,seq);
 if(seq!==wikiSeq||!$('#eventZh')||$('#eventZh').value.trim()!==query)return;
 applyArticle(tradTitle,summary,source);
 const c=wd?.claims||{};
 const start=wikidataDate(c.P580)||wikidataDate(c.P571)||wikidataDate(c.P585)||wikidataDate(c.P577);
 const end=wikidataDate(c.P582)||wikidataDate(c.P576);
 setField('eventEn',wd?.labels?.en?.value||((w.lang==='en')?w.title:null));
 if(start)setField('eventStart',start.year);
 if(end)setField('eventEnd',end.year);
 if(start&&start.precision<=8&&$('#eventPrecision')?.value==='確定'&&!$('#eventStart').dataset.manuallyEdited)$('#eventPrecision').value='約';
 const count=(start?1:0)+(end?1:0);
 if(count)status.textContent=`已帶入繁體中文維基資料${count===2?'與起訖年份':'；請確認年份'}，原有內容不會被覆蓋。`;
 else if(tradTitle||summary)status.textContent='已帶入繁體中文資訊；維基沒有可直接讀取的起訖年，請手動確認。';
 else status.textContent='找到維基條目，但沒有繁體中文資料或可讀取的年代，請手動填寫。';
 if(!auto)$('#wikiResults').replaceChildren();
}
function manageRegions(){if(!historyOwner){notify('僅管理者能修改地區');return;}let html=`<div class="section-caption" style="margin-bottom:12px">EDIT GEOGRAPHY · 自由編輯子地區</div><div id="manageRegionList">${regionManagerRows()}</div><div class="add-region-row"><select id="newParent">${data.continents.map(c=>`<option value="${esc(c.id)}">${esc(c.name)}</option>`).join('')}</select><input id="newRegionName" placeholder="新國家 / 地區名稱" maxlength="70"><button type="button" class="button small primary" id="insertRegion">＋ 加入</button></div><div class="manage-warning">刪除地區時，已建立事件上的該地區標籤會同步移除；若事件沒有其他標籤，則會改歸原本的洲。五大洲主分類固定保留。</div>`;
 openModal('管理國家與地區','以五大洲為基礎，修改其下歷史文化區域。',html,'<button type="button" class="button primary" id="regionDone">完成</button>');$('#regionDone').onclick=closeModal;$('#insertRegion').onclick=()=>{let name=$('#newRegionName').value.trim();let c=data.continents.find(c=>c.id===$('#newParent').value);if(!name||!c){notify('請輸入地區名稱');return}if(data.continents.some(z=>z.children.some(k=>k.name===name))){notify('已有同名地區');return}c.children.push({id:'geo_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6),name});save();refreshRegionModal();render();$('#newRegionName').value='';notify('已新增地區')};
 attachManageHandlers()}
function regionManagerRows(){return data.continents.map(c=>`<section class="region-manage-group"><h4><span class="dot" style="background:${esc(c.color)}"></span> ${esc(c.name)}</h4>${c.children.map(k=>`<div class="manage-row" data-region-id="${esc(k.id)}"><input aria-label="地區名稱" value="${esc(k.name)}" maxlength="70"><select aria-label="所屬洲">${data.continents.map(z=>`<option value="${esc(z.id)}" ${z.id===c.id?'selected':''}>${esc(z.name)}</option>`).join('')}</select><button type="button" data-save-region="${esc(k.id)}" title="更新">儲存</button><button type="button" data-delete-region="${esc(k.id)}" class="remove" title="刪除">×</button></div>`).join('')||'<div class="form-help">尚未新增子地區</div>'}</section>`).join('')}
function refreshRegionModal(){$('#manageRegionList').innerHTML=regionManagerRows();attachManageHandlers()}
function attachManageHandlers(){$$('[data-save-region]').forEach(b=>b.onclick=()=>{const id=b.dataset.saveRegion,old=findContinent(id);if(!old)return;const row=b.closest('.manage-row'),name=row.querySelector('input').value.trim(),parent=row.querySelector('select').value;if(!name){notify('地區名稱不能空白');return}let r=old.children.find(k=>k.id===id);if(!r)return;let target=data.continents.find(c=>c.id===parent);r.name=name;if(old.id!==target.id){old.children=old.children.filter(x=>x.id!==id);target.children.push(r)}save();refreshRegionModal();render();notify('地區已更新')});
 $$('[data-delete-region]').forEach(b=>b.onclick=()=>{let id=b.dataset.deleteRegion,parent=findContinent(id),r=parent?.children.find(r=>r.id===id);if(!r)return;let assigned=data.events.filter(e=>e.regionIds.includes(id)).length;if(!confirm(`刪除「${r.name}」？${assigned?`\n有 ${assigned} 個事件使用這個標籤，將改歸「${parent.name}」。`:''}`))return;parent.children=parent.children.filter(x=>x.id!==id);data.events.forEach(e=>{if(e.regionIds.includes(id)){e.regionIds=e.regionIds.filter(x=>x!==id);if(!e.regionIds.length)e.regionIds=[parent.id]}});ui.selected=ui.selected.filter(x=>x!==id);if(ui.focus===id)ui.focus=parent.id;save();refreshRegionModal();render();notify('地區已刪除')})}
function exportData(){let payload=JSON.stringify({...data,ui,exportedAt:new Date().toISOString()},null,2);let blob=new Blob([payload],{type:'application/json;charset=utf-8'});let u=URL.createObjectURL(blob);let a=document.createElement('a');a.href=u;a.download='history-atlas-backup-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500);notify('已匯出 JSON 備份')}
function validateImport(obj){if(!obj||!Array.isArray(obj.continents)||!Array.isArray(obj.events)||obj.continents.length!==5||obj.events.length>20000)throw Error('資料格式不正確');for(let c of obj.continents){if(typeof c.name!=='string'||!Array.isArray(c.children)||typeof c.color!=='string'||c.children.length>1000)throw Error('洲別資料不完整')}for(let e of obj.events){if(typeof e.id!=='string'||typeof e.nameZh!=='string'||!isYear(e.start)||e.end!=null&&!isYear(e.end)||!Array.isArray(e.regionIds))throw Error('有事件欄位不完整')}return true}
async function importData(file){
 if(!file)return;
 try{
  if(!historyOwner||!historyReady)throw Error('需要先以 Owner 身分登入');
  let str=await file.text();if(str.length>9000000)throw Error('備份檔案過大');
  let obj=JSON.parse(str);validateImport(obj);
  const existingIds=new Set(data.events.map(x=>x.id));
  const additions=obj.events.filter(e=>!existingIds.has(e.id));
  const modifications=obj.events.filter(e=>existingIds.has(e.id)&&JSON.stringify(data.events.find(x=>x.id===e.id))!==JSON.stringify(e));
  const msg=`這次備份含 ${obj.events.length} 個歷史事件。將新增 ${additions.length} 筆、更新 ${modifications.length} 筆。\n\n不會刪除任何雲端已有但備份未包含的事件。你可先按「匯出備份」保留目前雲端資料。\n\n確定合併進 Supabase？`;
  if(!confirm(msg))return;
  const byId=new Map(data.events.map(e=>[e.id,e]));
  // Preserve every existing cloud event not present in this backup.
  for(const event of obj.events){byId.set(event.id,event)}
  data.events=[...byId.values()];
  // Merge added countries by region ID, never delete cloud-only regions.
  for(const sourceCont of obj.continents){const current=data.continents.find(c=>c.id===sourceCont.id);if(!current)continue;const byRegion=new Map(current.children.map(c=>[c.id,c]));for(const item of sourceCont.children){byRegion.set(item.id,item)}current.children=[...byRegion.values()]}
  normalizeIslamicTermsV90();
  await historyCommitNow();render();notify(`已合併 ${obj.events.length} 筆備份內容至 Supabase`);
 }catch(e){notify('匯入失敗：'+e.message)}finally{$('#fileInput').value=''}
}
function choosePreset(k){const preset={egypt:[-2800,-1],persia:[-650,710],greek:[-610,-270],alexander:[-450,-280],rome:[-840,600],'rome-split':[180,1510],early:[-1100,250],middle:[500,1380],recent:[1500,2026]};if(k==='full'){let a=data.events.map(e=>e.start),b=data.events.map(e=>effectiveEnd(e));ui.start=Math.floor(Math.min(...a,-2750)/100)*100;ui.end=Math.max(...b,1950)}else [ui.start,ui.end]=preset[k]||[ui.start,ui.end];save();render();if(k==='rome-split')eraScrollTo(395,'auto');if(k==='alexander')eraScrollTo(-334,'auto')}
$$('[data-view]').forEach(b=>b.onclick=()=>{ui.view='time';save();render()});
$$('[data-zoom]').forEach(b=>b.onclick=()=>setTimelineScale(b.dataset.zoom==='large'?4:b.dataset.zoom==='medium'?2:0));
$$('[data-preset]').forEach(b=>b.onclick=()=>choosePreset(b.dataset.preset));
$$('[data-quick-region]').forEach(button=>button.addEventListener('click',()=>setQuickRegion(button.dataset.quickRegion)));
$('#mobileRegionToggle').onclick=()=>{const side=$('#regionSidebar');const expanded=side.classList.toggle('expanded');$('#mobileRegionToggle').setAttribute('aria-expanded',String(expanded));$('#mobileRegionToggle .mobile-region-arrow').textContent=expanded?'收合 ▴':'展開 ▾'};
$('#clearFilter').onclick=()=>{ui.selected=[];ui.regionSelectionMode='all';save();render()};$('#clearSelection').onclick=()=>{ui.selected=[];ui.regionSelectionMode='none';save();render()};$('#manageRegions').onclick=manageRegions;$('#addEventTop').onclick=()=>{if(historyOwner&&historyReady)openEvent();else notify('雲端資料尚未就緒或未登入 Owner');};$('#exportBtn').onclick=exportData;$('#importBtn').onclick=()=>$('#fileInput').click();$('#fileInput').onchange=e=>importData(e.target.files[0]);
bindInlineYearJump();
$('#textSearch').oninput=e=>{let pos=e.target.selectionStart;ui.text=e.target.value;save();render();$('#textSearch').focus();try{$('#textSearch').setSelectionRange(pos,pos)}catch{}};
// Pinch-zoom uses a stable parent to keep receiving pointers while the SVG is re-rendered.
(function enablePinchZoom(){
 const surface=$('#mainContent');if(!surface)return;
 const active=new Map();let pinch=null;
 const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
 const localX=clientX=>{const r=$('#eraScroll')?.getBoundingClientRect();return r?clientX-r.left:getEraViewportWidth()/2};
 const within=target=>!!target?.closest?.('#eraScroll');
 surface.addEventListener('pointerdown',ev=>{
  if(ev.pointerType!=='touch'||!within(ev.target))return;
  active.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});timelinePointerCount=active.size;
  if(active.size===2){
   timelineGestureWasPinch=true;
   const [a,b]=[...active.values()],x=localX((a.x+b.x)/2),current=$('#eraScroll');
   pinch={distance:distance(a,b),initial:SCALE_STEPS[scaleLevel()],focalYear:current?viewportYearFor(current,x):ui.centerYear,midX:x};
   try{for(const id of active.keys())surface.setPointerCapture(id)}catch{}
  }
 },true);
 surface.addEventListener('pointermove',ev=>{
  if(!active.has(ev.pointerId))return;
  active.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
  if(!pinch||active.size<2)return;
  const [a,b]=[...active.values()];const d=distance(a,b);
  if(pinch.distance<15||d<15)return;
  const desired=pinch.initial*pinch.distance/d;
  // Nearest log-scaled preset; physical pinch movement determines how far to zoom.
  const next=SCALE_STEPS.reduce((best,years,i)=>Math.abs(Math.log(years/desired))<Math.abs(Math.log(SCALE_STEPS[best]/desired))?i:best,0);
  if(next!==scaleLevel())setTimelineScale(next,pinch.focalYear,localX((a.x+b.x)/2));
  if(ev.cancelable)ev.preventDefault();
 },{passive:false});
 const done=ev=>{
  if(!active.has(ev.pointerId))return;
  active.delete(ev.pointerId);timelinePointerCount=active.size;
  if(active.size<2)pinch=null;
  if(active.size===0){timelinePointerCount=0;timelineGestureWasPinch=false}
  try{if(surface.hasPointerCapture(ev.pointerId))surface.releasePointerCapture(ev.pointerId)}catch{}
 };
 surface.addEventListener('pointerup',done);
 surface.addEventListener('pointercancel',done);
 surface.addEventListener('wheel',ev=>{
  if(!(ev.ctrlKey||ev.metaKey)||!within(ev.target))return;
  ev.preventDefault();
  const pane=$('#eraScroll');if(!pane)return;
  const x=localX(ev.clientX);setTimelineScale(scaleLevel()+(ev.deltaY<0?1:-1),viewportYearFor(pane,x),x);
 },{passive:false});
})();
$('#openScale').onclick=openScaleSheet;
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#scaleBackdrop'))closeScaleSheet();else if($('#modalBackdrop'))closeModal()}});
window.addEventListener('resize',()=>{clearTimeout(window._eraResize);window._eraResize=setTimeout(()=>{if(ui.view==='time')renderTime(filtered().filter(inWindow),{center:ui.centerYear})},180)});

// v9.2 Cloud 1.9: fail-closed, conflict-checked cloud persistence.
const HISTORY_PROJECT_URL='https://trkzxallyzaaoaexltwy.supabase.co';
const HISTORY_PUBLISHABLE_KEY='sb_publishable_rix3nkE5cfvhf66QChzrhg_ieG2Jvri';
const HISTORY_AUTH_STORAGE='history-timeline-owner-session-v1';
const HISTORY_DEVICE_STORAGE='history-timeline-device-v1';
const HISTORY_DEVICE_ENDPOINT=HISTORY_PROJECT_URL+'/functions/v1/history-device-access';
let historyDeviceToken=null;
const HISTORY_AUTH_REDIRECT_URL='https://history-timeline-cfb.pages.dev/';
let historyOwner=false,historyReady=false,historyRemoteVersion=0,historyShadow=null;
let historySession=null,historyCommitTimer=null,historyInFlight=null,historyLastError=null;
const historySleep=ms=>new Promise(r=>setTimeout(r,ms));
function historyStatus(message,failed=false){const el=$('#historyCloudState');el.textContent=message;el.classList.toggle('error',!!failed)}
function historyControls(){document.body.classList.toggle('history-owner',historyOwner&&historyReady);const btn=$('#historySettingsBtn');btn.title=historyOwner?'設定 · Owner 已登入':'設定 · 訪客唯讀';btn.setAttribute('aria-label',historyOwner?'開啟設定（Owner 已登入）':'開啟設定（訪客）')}
function historyHeaders(session=historySession){const h={'apikey':HISTORY_PUBLISHABLE_KEY,'Accept':'application/json'};if(session?.access_token)h.Authorization='Bearer '+session.access_token;return h}
async function historyRequest(path,options={},requiresAuth=false){
 if(historyDeviceToken&&requiresAuth){
  if(path.startsWith('/rest/v1/history_settings')){const r=await historyDeviceApi('settings');return r.payload?[{payload:r.payload}]:[]}
  if(path==='/rest/v1/rpc/history_apply_changes'){const r=await historyDeviceApi('commit',{payload:JSON.parse(options.body)});return r.version}
  throw Error('裝置登入只能操作 History Atlas 已授權功能');
 }
 const headers={...historyHeaders(),...(options.headers||{})};let result=await fetch(HISTORY_PROJECT_URL+path,{...options,headers,cache:'no-store'});if(result.status===401&&requiresAuth&&historySession?.refresh_token){try{await historyRefreshSession();headers.Authorization='Bearer '+historySession.access_token;result=await fetch(HISTORY_PROJECT_URL+path,{...options,headers,cache:'no-store'})}catch{}}if(!result.ok){let detail=await result.text().catch(()=>'');try{const err=JSON.parse(detail);detail=err.message||err.msg||detail}catch{}throw Error(`${result.status} ${String(detail).slice(0,230)}`)}if(result.status===204)return null;return await result.json()}
async function historyFetchPaged(table){let rows=[],offset=0,pageSize=200;while(true){const batch=await historyRequest(`/rest/v1/${table}?select=id,payload,revision&order=id.asc&limit=${pageSize}&offset=${offset}`);rows.push(...batch);if(batch.length<pageSize)break;offset+=pageSize;if(offset>20000)throw Error('資料過多，停止讀取以免取得部分備份');}return rows}
async function historyLoadSnapshot({preserveUi=false}={}){
 const before=await historyRequest('/rest/v1/history_version_state?select=revision&id=eq.true');if(before.length!==1)throw Error('找不到雲端版本資訊');
 const version=Number(before[0].revision);
 const [events,continents]=await Promise.all([historyFetchPaged('history_events'),historyFetchPaged('history_continents')]);const after=await historyRequest('/rest/v1/history_version_state?select=revision&id=eq.true');
 if(Number(after?.[0]?.revision)!==version)throw Error('載入期間資料已更新，請重新整理');
 if(!events.length||continents.length!==5)throw Error('雲端資料不完整，不允許用本機資料覆蓋');
 const savedUi=preserveUi?deepClone(ui):deepClone(DEFAULT_UI);
 data={version:19,events:events.map(r=>r.payload),continents:continents.map(r=>r.payload)};
 ui={...deepClone(DEFAULT_UI),...savedUi};
 historyRemoteVersion=version;
 historyShadow={events:deepClone(data.events),continents:deepClone(data.continents),ui:deepClone(ui)};
 if(historyOwner){await historyLoadOwnerSettings()}
 render();historyReady=true;historyControls();
 historyStatus(`${data.events.length} 筆歷史資料 · Supabase 已同步 · ${historyOwner?'Owner 可編輯':'訪客唯讀'} · v9.2 Cloud 1.9`);
}
async function historyLoadOwnerSettings(){if(!historyOwner)return;const arr=await historyRequest('/rest/v1/history_settings?select=payload&limit=1',{},true);if(arr.length){ui={...deepClone(DEFAULT_UI),...arr[0].payload};historyShadow.ui=deepClone(ui)}}
function historyScheduleCommit(){if(!historyOwner||!historyReady)return;clearTimeout(historyCommitTimer);historyCommitTimer=setTimeout(()=>historyCommitNow().catch(e=>notify('同步失敗：'+e.message)),950)}
function historyDiff(){const oldEvents=new Map((historyShadow?.events||[]).map(e=>[e.id,e]));const currEvents=new Map(data.events.map(e=>[e.id,e]));const changed=[];const deleted=[];for(const [id,e] of currEvents){if(!oldEvents.has(id)||JSON.stringify(oldEvents.get(id))!==JSON.stringify(e))changed.push(e)}for(const id of oldEvents.keys()){if(!currEvents.has(id))deleted.push(id)}const continents=JSON.stringify(data.continents)!==JSON.stringify(historyShadow?.continents)?data.continents:null;const settings=JSON.stringify(ui)!==JSON.stringify(historyShadow?.ui)?ui:null;return {changed,deleted,continents,settings}}
async function historyCommitNow(){
 if(!historyOwner||!historyReady)throw Error('需要登入 Owner 並保持網路連線');
 clearTimeout(historyCommitTimer);
 if(historyInFlight)await historyInFlight;
 const diff=historyDiff();if(!diff.changed.length&&!diff.deleted.length&&!diff.continents&&!diff.settings)return historyRemoteVersion;
 const payload={p_expected_revision:historyRemoteVersion,p_events:diff.changed,p_deleted:diff.deleted,p_continents:diff.continents,p_settings:diff.settings};
 const work=(async()=>{
  historyStatus('正在安全寫入 Supabase…');
  try{
   const newVersion=await historyRequest('/rest/v1/rpc/history_apply_changes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)},true);
   historyRemoteVersion=Number(newVersion);
   // Capture only the committed snapshot, so subsequent UI changes queued during fetch are not lost.
   const prevEvents=new Map(historyShadow.events.map(e=>[e.id,e]));for(const id of diff.deleted)prevEvents.delete(id);for(const e of diff.changed)prevEvents.set(e.id,deepClone(e));
   historyShadow.events=[...prevEvents.values()];
   if(diff.continents)historyShadow.continents=deepClone(diff.continents);
   if(diff.settings)historyShadow.ui=deepClone(diff.settings);
   historyStatus(`${data.events.length} 筆歷史資料 · Supabase 已同步 · Owner 可編輯 · v9.2 Cloud 1.9`);
   return historyRemoteVersion;
  }catch(e){historyLastError=e;historyStatus('資料未儲存：'+e.message+'。將重新取得雲端資料。',true);throw e}
 })();
 historyInFlight=work;
 try{return await work}catch(e){try{await historyLoadSnapshot({preserveUi:true})}catch(e2){historyStatus('連線異常，請勿繼續修改。'+e2.message,true);historyReady=false;historyControls()}throw e}finally{historyInFlight=null}
}
async function historyAuthApi(path,body){const r=await fetch(HISTORY_PROJECT_URL+'/auth/v1/'+path,{method:'POST',headers:{apikey:HISTORY_PUBLISHABLE_KEY,'Content-Type':'application/json'},body:JSON.stringify(body),cache:'no-store'});const j=await r.json();if(!r.ok)throw Error(j.msg||j.message||j.error_description||String(r.status));return j}
function historySaveSession(s){historySession={access_token:s.access_token,refresh_token:s.refresh_token,expires_at:Math.floor(Date.now()/1000)+Number(s.expires_in||3500),user:s.user};try{localStorage.setItem(HISTORY_AUTH_STORAGE,JSON.stringify(historySession))}catch{}}
async function historyLoginWithAuthResponse(auth){
 if(!auth?.access_token||!auth?.refresh_token)throw Error('登入連結未回傳完整驗證憑證');
 historyDeviceToken=null;try{localStorage.removeItem(HISTORY_DEVICE_STORAGE)}catch{};historySaveSession(auth);
 try{await historyCheckOwner()}catch(e){
  historySession=null;historyOwner=false;
  try{localStorage.removeItem(HISTORY_AUTH_STORAGE)}catch{}
  historyControls();throw e;
 }
}
async function historyConsumeMagicLink(){
 const hash=new URLSearchParams(location.hash.replace(/^#/,''));
 const access_token=hash.get('access_token'),refresh_token=hash.get('refresh_token');
 if(!access_token||!refresh_token)return false;
 // Clean sensitive tokens from address bar before making any network requests.
 history.replaceState(null,'',location.pathname+location.search);
 try{
  await historyLoginWithAuthResponse({access_token,refresh_token,expires_in:Number(hash.get('expires_in')||3600)});
  notify('Owner 登入成功');return true;
 }catch(e){historyStatus('登入連結未完成 Owner 驗證：'+e.message,true);return false;}
}
async function historyLoginFromCopiedLink(text){
 let u;try{u=new URL(String(text||'').trim())}catch{throw Error('請貼上 Gmail 裡 Sign in 按鈕的完整連結')}
 if(u.origin!==HISTORY_PROJECT_URL||u.pathname!=='/auth/v1/verify')throw Error('登入連結不是本專案的 Supabase 驗證網址');
 const token_hash=u.searchParams.get('token_hash')||u.searchParams.get('token');
 const type=u.searchParams.get('type');
 if(!token_hash||!['magiclink','email'].includes(type))throw Error('此連結沒有可用的電子郵件登入憑證');
 const response=await historyAuthApi('verify',{token_hash,type});
 await historyLoginWithAuthResponse(response);
}
async function historyRefreshSession(){if(!historySession?.refresh_token)throw Error('登入憑證已過期');let r=await historyAuthApi('token?grant_type=refresh_token',{refresh_token:historySession.refresh_token});if(!r.access_token)throw Error('無法更新登入');historySaveSession(r);return r}
async function historyCheckOwner(){const authorized=await historyRequest('/rest/v1/rpc/history_is_owner',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'},true);if(authorized!==true)throw Error('這個帳號沒有 History Timeline 管理權限');historyOwner=true;await historyLoadOwnerSettings();historyShadow.ui=deepClone(ui);historyControls();render();historyStatus(`${data.events.length} 筆 · Supabase 已同步 · Owner 可編輯`)}
async function historyDeviceApi(action,body={}){
 const headers={'Content-Type':'application/json',apikey:HISTORY_PUBLISHABLE_KEY};
 if(historyDeviceToken)headers['X-History-Device']=historyDeviceToken;
 else if(historySession?.access_token){headers.Authorization='Bearer '+historySession.access_token;}
 const res=await fetch(HISTORY_DEVICE_ENDPOINT,{method:'POST',headers,body:JSON.stringify({action,...body}),cache:'no-store'});
 const j=await res.json().catch(()=>({error:'invalid_response'}));
 if(!res.ok||j?.ok===false){if(res.status===401&&historyDeviceToken&&action!=='redeem'){historyDeviceToken=null;historyOwner=false;try{localStorage.removeItem(HISTORY_DEVICE_STORAGE)}catch{};historyControls()}throw Error(j.error||String(res.status))}
 return j;
}
async function historyRestoreDevice(){
 let token;try{token=localStorage.getItem(HISTORY_DEVICE_STORAGE)}catch{}
 if(!token)return;
 historyDeviceToken=token;
 try{await historyDeviceApi('status');historyOwner=true;await historyLoadOwnerSettings();historyShadow.ui=deepClone(ui);historyControls();render();historyStatus(`${data.events.length} 筆 · 裝置已授權 · Owner 可編輯`)}
 catch(e){historyDeviceToken=null;historyOwner=false;historyControls();try{localStorage.removeItem(HISTORY_DEVICE_STORAGE)}catch{}}
}
async function historyDeviceRedeem(code,name){
 const j=await historyDeviceApi('redeem',{code,device_name:name});
 if(!j.token)throw Error('未收到授權憑證');
 historySession=null;historyDeviceToken=j.token;
 try{localStorage.setItem(HISTORY_DEVICE_STORAGE,j.token)}catch{}
 await historyDeviceApi('status');
 historyOwner=true;await historyLoadOwnerSettings();historyShadow.ui=deepClone(ui);historyControls();render();historyStatus(`${data.events.length} 筆 · 裝置已授權 · Owner 可編輯`);
}
function historyDeviceName(){return (/Android|iPhone|iPad/i.test(navigator.userAgent)?'手機／平板':'電腦')+' · '+(/Edg\//.test(navigator.userAgent)?'Edge':/Chrome\//.test(navigator.userAgent)?'Chrome':/Safari\//.test(navigator.userAgent)?'Safari':'瀏覽器')}
async function historyManageDevices(){
 if(!historyOwner)return historyOwnerDialog();
 const [devs,codes]=await Promise.all([historyDeviceApi('list'),historyDeviceApi('codes')]);
 const devices=devs.devices||[];
 const codeRows=(codes.codes||[]).map(c=>`<div class="form-help">有效至 ${new Date(c.expires_at).toLocaleString('zh-TW')} <button class="button small" data-cancel-code="${c.id}" type="button">取消</button></div>`).join('');
 const deviceRows=devices.map(d=>`<div style="display:flex;align-items:center;justify-content:space-between;gap:6px;padding:9px 0;border-bottom:1px solid #bbb5"><div style="min-width:0"><b>${esc(d.name)}</b><div class="form-help">${esc(d.user_agent).slice(0,95)}</div><div class="form-help">最近使用：${new Date(d.last_seen_at).toLocaleString('zh-TW')}${d.revoked_at?' · 已撤銷':''}</div></div><div style="display:flex;gap:4px;flex-wrap:wrap">${d.revoked_at?'':`<button class="button small" data-rename-device="${d.id}">更名</button><button class="button small" data-revoke-device="${d.id}">撤銷</button>`}</div></div>`).join('');
 const html=`<div class="form-grid"><div class="field span-2"><label>Owner Email</label><div class="form-help">tsaititi@gmail.com · 全部裝置登出仍可收 Magic Link 恢復</div></div><div class="field span-2"><label>核發新裝置登入碼</label><p class="form-help">6 位數 · 60 分鐘 · 使用一次失效 · 最多同時 3 組</p><button class="button primary" id="histIssueCode">＋ 核發登入碼</button><div id="histIssuedCode" style="font-size:23px;letter-spacing:4px;font-weight:700;text-align:center;margin:10px"></div>${codeRows}</div><div class="field span-2"><label>已授權裝置</label>${deviceRows||'<p class="form-help">目前沒有使用登入碼授權的裝置。以 Email 登入的裝置不計入此清單。</p>'}</div></div>`;
 openModal('成員與裝置','History Atlas 專用授權，不影響 Wordbook',html,'<button class="button primary" id="histDevicesClose">返回設定</button>');
 $('#histDevicesClose').onclick=historySettingsDialog;
 $('#histIssueCode').onclick=async()=>{const b=$('#histIssueCode');b.disabled=true;try{const r=await historyDeviceApi('issue');$('#histIssuedCode').textContent=r.code;notify('已核發一次性登入碼，請在新裝置輸入')}catch(e){notify('核發失敗：'+e.message)}finally{b.disabled=false}};
 $$('[data-revoke-device]').forEach(b=>b.onclick=async()=>{if(!confirm('確定撤銷此裝置的 History Atlas 授權？'))return;try{await historyDeviceApi('revoke',{id:b.dataset.revokeDevice});notify('裝置已撤銷');historyManageDevices()}catch(e){notify(e.message)}});
 $$('[data-rename-device]').forEach(b=>b.onclick=async()=>{const name=prompt('輸入裝置名稱（最多 80 字）');if(!name?.trim())return;try{await historyDeviceApi('rename',{id:b.dataset.renameDevice,name:name.trim()});historyManageDevices()}catch(e){notify(e.message)}});
 $$('[data-cancel-code]').forEach(b=>b.onclick=async()=>{try{await historyDeviceApi('revoke_code',{id:b.dataset.cancelCode});historyManageDevices()}catch(e){notify(e.message)}});
}
async function historyRestoreOwner(){let stored=null;try{stored=JSON.parse(localStorage.getItem(HISTORY_AUTH_STORAGE)||'null')}catch{}if(!stored?.refresh_token)return;historySession=stored;try{if(!stored.access_token||Date.now()/1000>stored.expires_at-100)await historyRefreshSession();await historyCheckOwner()}catch(e){historySession=null;historyOwner=false;try{localStorage.removeItem(HISTORY_AUTH_STORAGE)}catch{}historyControls();historyStatus('已連線 Supabase · 訪客唯讀；Owner 請重新登入')}}
function historySettingsDialog(){
 const active=historyOwner&&historyReady;
 const accountType=historyDeviceToken?'裝置登入碼授權':'Email / Magic Link';
 const icon=(name)=>name==='shield'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 4.5 5v6c0 5.2 3 8.7 7.5 11 4.5-2.3 7.5-5.8 7.5-11V5L12 2Z"/><path d="m8.6 12 2.3 2.4 4.7-5"/></svg>':name==='devices'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4" width="14.5" height="11.5" rx="2"/><path d="M7 19h5.5M9.8 15.5V19"/><rect x="18.5" y="9.5" width="3.5" height="10" rx="1"/></svg>':name==='logout'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><path d="M14 16l4-4-4-4M18 12H8"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><path d="m14 8 4 4-4 4M18 12H8"/></svg>';
 const item=(id,kind,title,caption,extra='')=>`<button class="history-settings-action ${extra}" id="${id}" type="button"><span class="history-settings-action-icon">${icon(kind)}</span><span class="history-settings-action-text"><b>${title}</b><small>${caption}</small></span><span class="history-settings-chevron" aria-hidden="true">›</span></button>`;
 const status=active?`<strong>Owner 已登入</strong><p>${historySession?.user?.email?esc(historySession.user.email):'tsaititi@gmail.com'} · ${esc(accountType)}</p>`:'<strong>訪客模式</strong><p>瀏覽所有事件；登入 Owner 後可編輯與管理裝置</p>';
 const body=`<div class="history-settings-profile"><span class="history-settings-profile-icon">${icon('shield')}</span><div>${status}</div></div><div class="history-settings-menu">${active?item('histSettingsDevices','devices','成員與裝置','核發登入碼、查看裝置、重新命名或撤銷授權')+item('histSettingsLogout','logout','登出','退出此裝置的 History Atlas 管理模式','logout'):item('histSettingsLogin','login','Owner 登入','使用裝置登入碼、Email Magic Link 或密碼登入')}</div>`;
 openModal('設定','History Atlas · 帳號與裝置管理',body,'');
 if(active){
  $('#histSettingsDevices').onclick=async()=>{try{await historyManageDevices()}catch(e){notify('無法開啟成員與裝置：'+e.message)}};
  $('#histSettingsLogout').onclick=()=>{historyOwnerDialog();if(!historyOwner)closeModal()};
 }else $('#histSettingsLogin').onclick=historyOwnerDialog;
}
function historyOwnerDialog(){
 if(historyOwner){if(!confirm('要登出 History Timeline 管理模式嗎？'))return;historySession=null;historyDeviceToken=null;historyOwner=false;try{localStorage.removeItem(HISTORY_AUTH_STORAGE);localStorage.removeItem(HISTORY_DEVICE_STORAGE)}catch{}historyControls();historyStatus('Supabase 已連線 · 訪客唯讀');return}
 const html=`<div class="form-grid">
 <div class="field span-2"><label for="histDeviceCode">新裝置一次性登入碼（6 位）</label><input id="histDeviceCode" type="text" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" autocomplete="one-time-code" placeholder="由已登入的 Owner 核發"></div>
 <div class="field span-2"><label for="histNewDeviceName">裝置名稱</label><input id="histNewDeviceName" maxlength="80" value="${esc(historyDeviceName())}"></div>
 <div class="field span-2"><label for="histEmail">Owner 電子郵件</label><input id="histEmail" type="email" autocomplete="username" placeholder="email@example.com"></div>
 <div class="field span-2"><label for="histPassword">密碼（如已設定）</label><input id="histPassword" type="password" autocomplete="current-password" placeholder="可使用 Wordbook 既有 Supabase 帳號密碼"></div>
 <p class="form-help span-2">沒有密碼？按「寄送登入連結」，在郵件中點 Sign in 即可登入。</p>
 <div class="field span-2"><label for="histMagicLink">Sign in 連結（備用）</label><input id="histMagicLink" type="url" inputmode="url" autocapitalize="off" autocomplete="off" spellcheck="false" placeholder="若郵件仍跳 localhost，長按 Sign in 複製連結，貼在這裡"></div>
 <p class="form-help span-2">登入連結只能使用一次，請勿分享。Owner 與 Wordbook 共用 Supabase 帳號，但資料編輯權限獨立。</p>
 </div>`;
 openModal('管理者登入','訪客可以檢視全部歷史事件；僅 Owner 可修改。',html,'<button class="button primary" type="button" id="histRedeemCode">登入碼登入</button><button class="button" type="button" id="histSendOtp">寄送登入連結</button><button class="button" type="button" id="histLoginLink">使用連結登入</button><button class="button primary" type="button" id="histLogin">密碼登入</button>');
 $('#histRedeemCode').onclick=async()=>{const code=$('#histDeviceCode').value.trim(),name=$('#histNewDeviceName').value.trim();const b=$('#histRedeemCode');if(!/^\d{6}$/.test(code))return notify('請輸入 6 位數登入碼');b.disabled=true;try{await historyDeviceRedeem(code,name);closeModal();notify('裝置登入成功')}catch(e){notify('裝置登入失敗：'+e.message)}finally{if($('#histRedeemCode'))b.disabled=false}};
 $('#histSendOtp').onclick=async()=>{const email=$('#histEmail').value.trim(),btn=$('#histSendOtp');if(!email)return notify('請先填入 Email');btn.disabled=true;try{
  const dest='otp?redirect_to='+encodeURIComponent(HISTORY_AUTH_REDIRECT_URL);
  await historyAuthApi(dest,{email,create_user:false});notify('已寄送 Sign in 登入連結，請查看信箱');
 }catch(e){notify('寄送失敗：'+e.message)}finally{if($('#histSendOtp'))$('#histSendOtp').disabled=false}};
 $('#histLoginLink').onclick=async()=>{const link=$('#histMagicLink').value,btn=$('#histLoginLink');if(!link.trim())return notify('請先貼上郵件中的 Sign in 完整連結');btn.disabled=true;try{
  await historyLoginFromCopiedLink(link);closeModal();notify('Owner 登入成功');
 }catch(e){notify('連結登入失敗：'+e.message)}finally{if($('#histLoginLink'))$('#histLoginLink').disabled=false}};
 $('#histLogin').onclick=async()=>{const email=$('#histEmail').value.trim(),pass=$('#histPassword').value,btn=$('#histLogin');if(!email||!pass)return notify('請輸入 Email 與密碼；沒有密碼請使用登入連結');btn.disabled=true;try{
  await historyLoginWithAuthResponse(await historyAuthApi('token?grant_type=password',{email,password:pass}));closeModal();notify('Owner 登入成功');
 }catch(e){notify('登入失敗：'+e.message)}finally{if($('#histLogin'))$('#histLogin').disabled=false}};
}
async function historyBoot(){historyReady=false;historyControls();historyStatus('正在讀取 Supabase，暫時只顯示原始範例…');try{await historyLoadSnapshot();if(!await historyConsumeMagicLink()){await historyRestoreOwner();if(!historyOwner)await historyRestoreDevice()}}catch(e){historyStatus('無法連線 Supabase。畫面是本機範例，只供檢視，無法儲存。'+e.message,true);historyReady=false;historyOwner=false;historyControls()}}
function historySearchDialog(){
 openModal('搜尋歷史事件','搜尋中文、英文、歷史年代或說明，點選結果即可前往事件。',`<div class="history-search-dialog"><div class="history-search-input-row"><input id="historySearchInput" type="search" autocomplete="off" placeholder="例如：克里米亞、甲午戰爭、1851" aria-label="搜尋歷史事件"><button class="button small" id="historySearchClear" type="button">清除</button></div><div class="history-search-results" id="historySearchResults" aria-live="polite"></div></div>`,'<button class="button primary" id="historySearchDone" type="button">完成</button>');
 const input=$('#historySearchInput'),results=$('#historySearchResults');
 input.value=ui.text||'';
 const matches=()=>{
  const q=input.value.trim().toLowerCase();
  if(!q)return [];
  return data.events.filter(e=>[e.nameZh,e.nameEn,e.shortName,e.type,e.notes,formatPeriod(e),...e.regionIds.map(nameFor)].join(' ').toLowerCase().includes(q)).sort((a,b)=>a.start-b.start).slice(0,40);
 };
 function openResult(event){
  ui.text='';ui.selected=[];ui.regionSelectionMode='all';closeModal();render();
  if(!applyYearJump(event.start))eraScrollTo(event.start,'auto');
  openEvent(event.id);
 }
 function refresh(){
  ui.text=input.value;render();
  const rows=matches();
  if(!input.value.trim()){results.innerHTML='<p class="form-help">輸入關鍵字後顯示符合的歷史事件。</p>';return}
  if(!rows.length){results.innerHTML='<p class="form-help">沒有找到符合的事件，請換個關鍵字。</p>';return}
  results.innerHTML=rows.map(e=>`<button type="button" class="history-search-result" data-history-result="${esc(e.id)}"><strong>${esc(e.nameZh||e.nameEn)}</strong><small>${esc(formatPeriod(e))} · ${esc(e.regionIds.map(nameFor).join('、'))}</small></button>`).join('')+(rows.length===40?'<p class="form-help">顯示前 40 筆，請輸入更精確的名稱。</p>':'');
  results.querySelectorAll('[data-history-result]').forEach(button=>button.onclick=()=>{const item=data.events.find(e=>e.id===button.dataset.historyResult);if(item)openResult(item)});
 }
 input.oninput=refresh;
 input.onkeydown=event=>{if(event.key==='Enter'){event.preventDefault();const first=matches()[0];if(first)openResult(first)}};
 $('#historySearchClear').onclick=()=>{input.value='';refresh();input.focus()};
 $('#historySearchDone').onclick=closeModal;
 refresh();input.focus();
}
$('#historySearchBtn').onclick=historySearchDialog;
$('#historySettingsBtn').onclick=historySettingsDialog;
window.addEventListener('focus',async()=>{if(!historyReady||document.querySelector('#eventForm')||historyInFlight||historyCommitTimer)return;try{const r=await historyRequest('/rest/v1/history_version_state?select=revision&id=eq.true');if(r?.length&&Number(r[0].revision)!==historyRemoteVersion)await historyLoadSnapshot({preserveUi:!historyOwner})}catch(e){historyStatus('同步檢查失敗：'+e.message,true)}});
historyBoot();


}
export default {async fetch(request){const headers=new Headers({'content-type':'text/html; charset=utf-8','cache-control':'no-store, max-age=0','x-content-type-options':'nosniff','x-history-build':'v9.2-cloud-1.9'});if(request.method!=='GET'&&request.method!=='HEAD')return new Response('Method Not Allowed',{status:405,headers:{'Allow':'GET, HEAD'}});return new Response(request.method==='HEAD'?null:HISTORY_DOCUMENT,{status:200,headers});}};