/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import memberApi from "@/api/memberApi";
import avatarNam from "@/assets/images/avatar-nam.jpg";
import avatarNu from "@/assets/images/avatar-nu.jpg";
import type { MemberType } from "@/types/members";
import FamilyTree from "@balkangraph/familytree.js";
import { useEffect, useRef } from "react";
import "./style.scss";

interface UrlOptions {
    enableSearch: boolean;
    scaleInitial: number;
}

function FamilyTreeNode() {
    const treeRef = useRef<HTMLDivElement>(null);
    const familyInstanceRef = useRef<any>(null);

    const getOptions = (): UrlOptions => {
        const searchParams = new URLSearchParams(window.location.search);
        const fit = searchParams.get("fit");

        if (fit === "yes") {
            return {
                enableSearch: false,
                scaleInitial: FamilyTree.match.boundary,
            };
        }

        return {
            enableSearch: true,
            scaleInitial: 1,
        };
    };

    const normalizeMembers = (members: MemberType[]): MemberType[] => {
        return members.map(member => {
            const hasImage =
                member.feature_image !== null &&
                member.feature_image !== false &&
                member.feature_image !== "";

            if (!hasImage) {
                return {
                    ...member,
                    feature_image:
                        member.gender === "female"
                            ? avatarNu
                            : avatarNam,
                };
            }

            return member;
        });
    };

    const getMembers = async (familyInstance: any) => {
        try {
            const response = await memberApi.getMembers();

            const members = normalizeMembers(response.data);

            const rootMember = members.find(
                m =>
                    m.generation === 1 &&
                    m.gender === "male" &&
                    m.fid === null &&
                    m.mid === null
            );

            if (rootMember) {
                familyInstance.config.roots = [rootMember.id];
            }

            familyInstance.load(members);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    };

    useEffect(() => {
        if (!treeRef.current) return;

        const options = getOptions();

        const family = new FamilyTree(treeRef.current, {
            mouseScrool: FamilyTree.none,
            scaleInitial: options.scaleInitial,
            mode: "light",
            template: "hugo",

            enableSearch: options.enableSearch,
            nodeMenu: undefined,

            nodeBinding: {
                img_0: "feature_image",
                field_0: "fullname",
                field_1: "birth_date",
            },

            editForm: {
                photoBinding: "feature_image",
                titleBinding: "fullname",
                generateElementsFromFields: false,
                elements: [
                    { type: "textbox", label: "Họ và tên", binding: "fullname" },
                    { type: "date", label: "Ngày sinh", binding: "birth_date" },
                    [
                        {
                            type: "select",
                            label: "Giới tính",
                            binding: "gender",
                            options: [
                                { value: "male", text: "Nam" },
                                { value: "female", text: "Nữ" },
                            ],
                        },
                        { type: "textbox", label: "Thứ tự", binding: "order" },
                        { type: "textbox", label: "Đời", binding: "generation" },
                    ],
                    { type: "textbox", label: "Địa chỉ", binding: "address" },
                    { type: "textbox", label: "Tiểu sử", binding: "biography" },
                    { type: "date", label: "Ngày mất", binding: "death_date" },
                ],
            },
        });

        family.on("field", (_sender: any, args: any) => {
            if (args.name === "birth_date" && args.value) {
                const date = new Date(args.value);
                if (!isNaN(date.getTime())) {
                    args.value = date.toLocaleDateString("vi-VN");
                }
            }
        });

        familyInstanceRef.current = family;

        getMembers(family);

        return () => {
            familyInstanceRef.current = null;
        };
    }, []);

    return (
        <section className="page-genealogy">
            <div className="container">
                <h1 className="page-genealogy__heading section-heading">PHẢ ĐỒ</h1>
                <div ref={treeRef} id="tree" />
            </div>
        </section>
    );
}

export default FamilyTreeNode;
